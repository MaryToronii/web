var data;
data = {

    // A labels array that can contain any sort of values
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    //labels: ['0', '5,000', '10,000', '20,000'],
    // Our series array that contains series objects or in this case series data arrays
    series: [

        [2000, 4000, 10500, 15500, 12000, 6500, 4500, 7000, 11500, 11000, 5000, 2000],
        [3000, 3500, 6000, 10000, 7000, 5500, 4500, 4000, 13000, 9000, 5000, 2000],
        [2500, 4000, 9000, 15500, 6000, 5000, 3000, 5000, 10000, 9000, 6000, 1500],
        [2500, 3000, 6000, 10000, 7000, 4000, 2000, 3000, 10000, 9000, 5000, 2000]

    ]

};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.

var size = {
    chartPadding: {
        top: 70,
        left: 50,
    },

    high: 3,
    low: 0,

    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    width: 1000,
    height: 380,
    lineSmooth: true,
    axisY: {
        type : Chartist.FixedScaleAxis,
        low : 0,
        high : 20000,
        ticks : [ 0, 5000, 10000, 15000, 20000 ]
    },

    lineSmooth: Chartist.Interpolation.cardinal({
        tension: 4,
        fillHoles: false
    }),


}
var chart = new Chartist.Line('.ct-chart', data, size);



chart.on('draw', function(data) {
    if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
            d: {
                begin: 2000 * data.index,
                dur: 2000,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
            }
        });
    }
});













google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Persents'],
        ['United States', 46],
        ['Canada', 12],
        ['RU', 10],
        ['United Kingdom', 24],
        ['Bangladesh', 18]
    ]);

    var options = {
        colorAxis: {colors: ['#c2c2c2', '#4d4c4c']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}




window.onload = function () {

    var options = {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Actual vs Projected Sales"
        },
        axisX:{
            valueFormatString: "DD MMM"
        },
        axisY: {
            title: "Number of Sales",
            suffix: "K",
            minimum: 30
        },
        toolTip:{
            shared:true
        },
        legend:{
            cursor:"pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            showInLegend: true,
            name: "Projected Sales",
            markerType: "square",
            xValueFormatString: "DD MMM, YYYY",
            color: "#F08080",
            yValueFormatString: "#,##0K",
            dataPoints: [
                { x: new Date(2017, 10, 1), y: 63 },
                { x: new Date(2017, 10, 2), y: 69 },
                { x: new Date(2017, 10, 3), y: 65 },
                { x: new Date(2017, 10, 4), y: 70 },
                { x: new Date(2017, 10, 5), y: 71 },
                { x: new Date(2017, 10, 6), y: 65 },
                { x: new Date(2017, 10, 7), y: 73 },
                { x: new Date(2017, 10, 8), y: 96 },
                { x: new Date(2017, 10, 9), y: 84 },
                { x: new Date(2017, 10, 10), y: 85 },
                { x: new Date(2017, 10, 11), y: 86 },
                { x: new Date(2017, 10, 12), y: 94 },
                { x: new Date(2017, 10, 13), y: 97 },
                { x: new Date(2017, 10, 14), y: 86 },
                { x: new Date(2017, 10, 15), y: 89 }
            ]
        },
            {
                type: "line",
                showInLegend: true,
                name: "Actual Sales",
                lineDashType: "dash",
                yValueFormatString: "#,##0K",
                dataPoints: [
                    { x: new Date(2017, 10, 1), y: 60 },
                    { x: new Date(2017, 10, 2), y: 57 },
                    { x: new Date(2017, 10, 3), y: 51 },
                    { x: new Date(2017, 10, 4), y: 56 },
                    { x: new Date(2017, 10, 5), y: 54 },
                    { x: new Date(2017, 10, 6), y: 55 },
                    { x: new Date(2017, 10, 7), y: 54 },
                    { x: new Date(2017, 10, 8), y: 69 },
                    { x: new Date(2017, 10, 9), y: 65 },
                    { x: new Date(2017, 10, 10), y: 66 },
                    { x: new Date(2017, 10, 11), y: 63 },
                    { x: new Date(2017, 10, 12), y: 67 },
                    { x: new Date(2017, 10, 13), y: 66 },
                    { x: new Date(2017, 10, 14), y: 56 },
                    { x: new Date(2017, 10, 15), y: 64 }
                ]
            }]
    };
    $("#chartContainer").CanvasJSChart(options);
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
}