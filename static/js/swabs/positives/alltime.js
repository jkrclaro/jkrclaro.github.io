Highcharts.chart('positives-alltime-chart', {
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
        text: 'Daily reported positive swabs and confirmed cases'
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
        plotBands: PLOT_BANDS
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
            var lockdownStatus = '';
            var lockdowns = {
                1585353600000: 'First lockdown',
                1589760000000: 'Phase 1',
                1591574400000: 'Phase 2',
                1593388800000: 'Phase 3',
                1600128000000: 'Level 2',
                1601856000000: 'Level 3',
                1603238400000: 'Level 5',
                1606780800000: 'Level 3+',
                1608768000000: 'Level 5+',
            }
            for (var lockdown in lockdowns) {
                if (lockdown == this.x) {
                    lockdownStatus += `<br> <b>Lockdown:</b> ${lockdowns[lockdown]}</b>`
                }
            }
            return `<b>Date</b>: ${Highcharts.dateFormat('%d %b %Y', this.x)} ${lockdownStatus}`
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
            data: CASES,
            lineColor: '#5DC2C2',
            color: '#5DC2C2',
            fillOpacity: 1,
            name: 'Cases',
            threshold: null
        },
        {
            data: POSITIVES,
            lineColor: '#8085E9',
            color: '#8085E9',
            fillOpacity: 1,
            name: 'Positives',
            threshold: null
        },
    ]
});