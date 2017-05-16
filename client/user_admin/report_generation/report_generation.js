// ****RATE CODE****
// 1 - ANGRY
// 2 - SAD
// 3 - NEUTRAL
// 4 - HAPPY
// 5 - VERY HAPPY
// *****************

//REPORT SATISFACTION
Template.report_satisfaction.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('rates');
    });

    self.charts = new ReactiveDict();

    self.charts.set("range_pie_chart_options", {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 0,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: false,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
        legend: {
        	display: true
        },
        tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
				  //get the concerned dataset
				  var dataset = data.datasets[tooltipItem.datasetIndex];
				  //get the current items value
				  var currentValue = dataset.data[tooltipItem.index];
				  return currentValue + "%";
				}
			}
		}
	 
    });
});

Template.report_satisfaction.helpers({
    rates: ()=>{
        return Rates.find({});
    }
});

Template.report_satisfaction.events({
	'submit form': function (event, template) {
        event.preventDefault();

        const begin = event.target.inputBegin.value;
        const end = event.target.inputEnd.value;

        const veryhappy_val = Rates.find({rate_no: 5, createdAt: {$gt: new Date(begin), $lt: new Date(end)}}).count();
        const happy_val = Rates.find({rate_no: 4, createdAt: {$gt: new Date(begin), $lt: new Date(end)}}).count();
        const neutral_val = Rates.find({rate_no: 3, createdAt: {$gt: new Date(begin), $lt: new Date(end)}}).count();
        const sad_val = Rates.find({rate_no: 2, createdAt: {$gt: new Date(begin), $lt: new Date(end)}}).count();
        const angry_val = Rates.find({rate_no: 1, createdAt: {$gt: new Date(begin), $lt: new Date(end)}}).count();
        const total = Rates.find({createdAt: {$gt: new Date(begin), $lt: new Date(end)}}).count();

        if(total==0){
        	$('#msg').html("No Data Avaliable");
        }else{
        	$('#msg').html("");
        	veryhappy = Math.round((veryhappy_val/total)*100);
        	happy = Math.round((happy_val/total)*100);
        	neutral = Math.round((neutral_val/total)*100);
        	sad = Math.round((sad_val/total)*100);
        	angry = Math.round((angry_val/total)*100);
        }

        const PieData = [
            {
                value: veryhappy,
                color: "#00ff00",
                highlight: "#00ff00",
                label: "Very Happy"
            },
            {
                value: happy,
                color: "#00a65a",
                highlight: "#00a65a",
                label: "Happy"
            },
			{
                value: neutral,
                color: "#ffff00",
                highlight: "#ffff00",
                label: "Neutral"
            },
            {
                value: sad,
                color: "#FF1493",
                highlight: "#FF1493",
                label: "Sad"
            },
            {
                value: angry,
                color: "#FF0000",
                highlight: "#FF0000",
                label: "Angry"
            }
        ];

        range_pie_chart.Doughnut(PieData, template.charts.get("range_pie_chart_options"));
    },
    'click #wholeChart': function(event, template){
    	event.preventDefault();

        const veryhappy_val = Rates.find({rate_no: 5}).count();
        const happy_val = Rates.find({rate_no: 4}).count();
        const neutral_val = Rates.find({rate_no: 3}).count();
        const sad_val = Rates.find({rate_no: 2}).count();
        const angry_val = Rates.find({rate_no: 1}).count();
		const total = Rates.find({}).count();

        if(total==0){
        	$('#msg').html("No Data Avaliable");
        }else{
        	$('#msg').html("");
        	veryhappy = Math.round((veryhappy_val/total)*100);
        	happy = Math.round((happy_val/total)*100);
        	neutral = Math.round((neutral_val/total)*100);
        	sad = Math.round((sad_val/total)*100);
        	angry = Math.round((angry_val/total)*100);
        }

        const PieData = [
            {
                value: veryhappy,
                color: "#00ff00",
                highlight: "#00ff00",
                label: "Very Happy"
            },
            {
                value: happy,
                color: "#00a65a",
                highlight: "#00a65a",
                label: "Happy"
            },
			{
                value: neutral,
                color: "#ffff00",
                highlight: "#ffff00",
                label: "Neutral"
            },
            {
                value: sad,
                color: "#FF1493",
                highlight: "#FF1493",
                label: "Sad"
            },
            {
                value: angry,
                color: "#FF0000",
                highlight: "#FF0000",
                label: "Angry"
            }
        ];

        range_pie_chart.Doughnut(PieData, template.charts.get("range_pie_chart_options"));
    }
});

Template.report_satisfaction.onRendered(function(){
	$('#inputBegin').datepicker({
        autoclose: true
    });

    $('#inputEnd').datepicker({
        autoclose: true
    });

    const pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    range_pie_chart = new Chart(pieChartCanvas);

});
//----

//REPORT SUMMARY
Template.report_summary.onRendered(function(){
	$('#inputBegin').datepicker({
        autoclose: true
    });

    $('#inputEnd').datepicker({
        autoclose: true
    });
});

Template.report_summary.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('bills');
        self.subscribe('orders');
    });

    self.ordersNoVar = new ReactiveVar();
    self.totalIncomeVar = new ReactiveVar();

    self.ordersNoVar.set("");
    self.totalIncomeVar.set("");
});

Template.report_summary.helpers({
    ordersNo: ()=>{
        return Template.instance().ordersNoVar.get();
    },
    totalIncome: ()=>{
    	return Template.instance().totalIncomeVar.get();
    }
});

Template.report_summary.events({
	'submit form': function (event, template) {
        event.preventDefault();

        const begin = event.target.inputBegin.value;
        const end = event.target.inputEnd.value;

        let income = 0;

        const cursor_bills = Bills.find({createdAt: {$gt: new Date(begin), $lt: new Date(end)}});
        cursor_bills.forEach(function (record) {
            income = income + record.total;
        });

        let orders = Orders.find({createdAt: {$gt: new Date(begin), $lt: new Date(end)}}).count();

        if(orders==0 && income==0){
        	$('#msg').html("No data found");
        	template.totalIncomeVar.set("");
        	template.ordersNoVar.set("");
        }else{
        	$('#msg').html("");
        	template.totalIncomeVar.set(income);
        	template.ordersNoVar.set(orders);
        }
    },
    'click #todayReport':function(event,template) {
    	event.preventDefault();

    	let date1 = moment().startOf('day').toDate();
    	let date2 = moment().startOf('day').add(1,'day').toDate();

    	let income = 0;

        const cursor_bills = Bills.find({createdAt: {$gt: date1, $lt: date2}});
        cursor_bills.forEach(function (record) {
            income = income + record.total;
        });

        let orders = Orders.find({createdAt: {$gt: date1, $lt: date2}}).count();

        if(orders==0 && income==0){
        	$('#msg').html("No data found");
        	template.totalIncomeVar.set("");
        	template.ordersNoVar.set("");
        }else{
        	$('#msg').html("");
        	template.totalIncomeVar.set(income);
        	template.ordersNoVar.set(orders);
        }
    }

});
//----