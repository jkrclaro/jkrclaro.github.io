Highcharts.chart('gender-chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Gender breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b> {point.percentage:.2f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: <span style="font-weight: 400 !important;">{point.percentage:.2f}%</span>'
            }
        }
    },
    series: [{
        name: 'Gender',
        colorByPoint: true,
        data: GENDERS
    }]
});