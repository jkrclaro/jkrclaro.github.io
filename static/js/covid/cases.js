Highcharts.chart('cases-chart', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Cases vs Deaths',
        align: 'left'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        },
        plotBands: [{
            from: Date.UTC(2020, 3, 28, 0, 0, 0),
            to: Date.UTC(2020, 5, 18, 0, 0, 0),
            color: '#DDD',
            label: {
                text: 'First <br> lockdown',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 5, 18, 0, 0, 0),
            to: Date.UTC(2020, 6, 8, 0, 0, 0),
            color: '#EEE',
            label: {
                text: 'Phase 1',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 6, 8, 0, 0, 0),
            to: Date.UTC(2020, 6, 29, 0, 0, 0),
            color: '#DDD',
            label: {
                text: 'Phase 2',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 6, 29, 10, 0, 0),
            to: Date.UTC(2020, 9, 15, 0, 0, 0),
            color: '#EEE',
            label: {
                text: 'Phase 3',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 9, 15, 10, 0, 0),
            to: Date.UTC(2020, 10, 5, 0, 0, 0),
            color: '#DDD',
            label: {
                text: 'Level 2',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 10, 5, 0, 0, 0),
            to: Date.UTC(2020, 10, 21, 0, 0, 0),
            color: '#EEE',
            label: {
                text: 'Level 3',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 10, 21, 0, 0, 0),
            to: Date.UTC(2020, 12, 1, 0, 0, 0),
            color: '#DDD',
            label: {
                text: 'Level 5',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 12, 1, 0, 0, 0),
            to: Date.UTC(2020, 12, 24, 0, 0, 0),
            color: '#EEE',
            label: {
                text: 'Level 3+',
                style: {
                    color: '#606060'
                }
            }
        }, {
            from: Date.UTC(2020, 12, 24, 0, 0, 0),
            to: Date.now(),
            color: '#DDD',
            label: {
                text: 'Level 5+',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    yAxis: {
        title: {
            text: 'Population'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
    
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 86400000, // 1 day
            pointStart: Date.UTC(2020, 1, 29, 0, 0, 0)
        }
    },
    series: [{
        name: 'Cases',
        color: '#44A9A8',
        data: CASES
    }, {
        name: 'Deaths',
        color: '#F15C80',
        data: DEATHS
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});