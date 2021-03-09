Highcharts.chart('cases-chart', {
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
        text: 'Confirmed cases of COVID-19 in Ireland'
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
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1585353600000, // 28 Mar 2020
                y: 294
            },
            text: 'First lockdown'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1589760000000, // 18 May 2020
                y: 88
            },
            text: 'Phase 1'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1591574400000, // 8 Jun 2020
                y: 9
            },
            text: 'Phase 2'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1593388800000, // 29 Jun 2020
                y: 24
            },
            text: 'Phase 3'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1600128000000, // 15 Sep 2020
                y: 357
            },
            text: 'Level 2'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1601856000000, // 05 Oct 2020
                y: 518
            },
            text: 'Level 3'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1603238400000, // 21 Oct 2020
                y: 1167
            },
            text: 'Level 5'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1606780800000, // 1 Dec 2020
                y: 269
            },
            text: 'Level 3+'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1608768000000, // 24 Dec 2020
                y: 922
            },
            text: 'Level 5+'
        }]
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
            text: 'Cases'
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
            return `<b>Date</b>: ${Highcharts.dateFormat('%d %b %Y', this.x)} <br> <b>Cases</b>: ${this.y} ${lockdownStatus}`
        },
        shared: true
    },
    legend: {
        enabled: false
    },
    series: [{
        data: CASES,
        lineColor: Highcharts.getOptions().colors[2],
        color: Highcharts.getOptions().colors[2],
        fillOpacity: 1,
        name: 'Cases',
        marker: {
            enabled: false
        },
        threshold: null
    }]
});