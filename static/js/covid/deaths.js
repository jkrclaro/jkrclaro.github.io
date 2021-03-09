Highcharts.chart('deaths-chart', {
    chart: {
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 768
        }
    },
    title: {
        text: 'Confirmed deaths of COVID-19 in Ireland'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%b \'%y', this.value)
            }
        },
        title: {
            text: 'Date'
        },
    },
    yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        title: {
            text: 'Deaths'
        },
        labels: {
            format: '{value}'
        },
    },
    tooltip: {
        headerFormat: 'Date: {point.x}<br>',
        pointFormat: 'Deaths: {point.y}',
        formatter: function() {
            return `<b>Date</b>: ${Highcharts.dateFormat('%d %b %Y', this.x)} <br> <b>Deaths</b>: ${this.y}`
        },
        shared: true
    },
    legend: {
        enabled: false
    },
    series: [{
        data: DEATHS,
        lineColor: Highcharts.getOptions().colors[5],
        color: Highcharts.getOptions().colors[5],
        fillOpacity: 1,
        name: 'Deaths',
        marker: {
            enabled: false
        },
        threshold: null
    }]
});