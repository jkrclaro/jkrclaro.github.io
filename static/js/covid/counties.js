Highcharts.chart('counties-chart', {
    chart: {
        type: 'bar',
        height: 500,
    },
    title: {
        text: 'Cases by county'
    },
    xAxis: {
        categories: COUNTY_NAMES,
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Cases',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Cases',
        data: COUNTY_CASES,
        color: '#44A9A8'
    }]
});