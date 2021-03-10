Highcharts.chart('age-chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Age breakdown'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: 'Ages {point.name}: <span style="font-weight: 400 !important;">{point.percentage:.2f}%</span>'
            }
        }
    },
    series: [{
        name: 'Age',
        colorByPoint: true,
        data: AGES
    }]
});