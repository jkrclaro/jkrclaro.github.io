Highcharts.chart('positives-7-chart', {
    chart: {
        type: 'line',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 768
        }
    },
    title: {
        text: 'Reported positive swabs and confirmed cases by date over the past 7 days'
    },
    credits: {
        enabled: false
    },
    annotations: [{
        draggable: '',
        labelOptions: {
            shape: 'connector',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.7em',
                textOutline: '1px'
            }
        },
    }],
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
            text: ''
        },
        labels: {
            format: '{value}'
        },
    },
    tooltip: {
        headerFormat: 'Date: {point.x}<br>',
        pointFormat: 'Cases: {point.y}',
        formatter: function() {
            return `<b>Date</b>: ${Highcharts.dateFormat('%d %b %Y', this.x)} <br> <b>Value</b>: ${this.y}`
        },
        shared: true
    },
    legend: {
        enabled: true,
        layout: 'horizontal',
        verticalAlign: 'bottom'
    },
    series: [
        {
            data: CASES_7,
            lineColor: '#5DC2C2',
            color: '#5DC2C2',
            fillOpacity: 1,
            name: 'Cases',
            threshold: null
        },
        {
            data: POSITIVES_7,
            lineColor: '#8085E9',
            color: '#8085E9',
            fillOpacity: 1,
            name: 'Positives',
            threshold: null
        },
    ]
});