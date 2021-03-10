Highcharts.chart('counties-chart', {
    chart: {
        type: 'bar',
        height: 768,
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
    credits: {
        enabled: false
    },
    series: [{
        name: 'Cases',
        data: COUNTY_CASES,
        color: '#44A9A8'
    }]
});