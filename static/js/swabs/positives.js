Highcharts.chart('positives-chart', {

    title: {
        text: 'Reported positive swabs and confirmed cases by date, over the past 7 days.'
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    xAxis: {
        title: {
            text: ''
        }
    },

    legend: {
        layout: 'horizontal',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [
        {
            name: 'Confirmed positives',
            data: POSITIVES
        }, 
        {
            name: 'Confirmed cases',
            data: CASES
        },
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});