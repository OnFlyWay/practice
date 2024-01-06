var symbolSize = 20;
var data = [
    [15, 0],
    [-50, 10],
    [-56.5, 20],
    [-46.5, 30],
    [-22.1, 40]
];

var myChart = echarts.init(document.getElementById('main'));

myChart.setOption({
    tooltip: {
        triggerOn: 'none',
        formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }
    },
    xAxis: {
        min: -100,
        max: 80,
        type: 'value',
        axisLine: {
            onZero: false
        }
    },
    yAxis: {
        min: -30,
        max: 60,
        type: 'value',
        axisLine: {
            onZero: false
        }
    },
    series: [{
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: symbolSize,
        data: data
    }],
});
setG()
function setG(color='red',rotation=0,width=symbolSize) {
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                type: 'rect',
                position: myChart.convertToPixel('grid', item),
                shape: {
                    width: width,
                    height: symbolSize / 2
                },
                style: {
                    fill: color
                },
                rotation:rotation,
                invisible: false,
                draggable: true,
                ondrag: echarts.util.curry(onPointDragging, dataIndex),
                onmousemove: echarts.util.curry(showTooltip, dataIndex),
                onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                z: 200
            };
        })
    });
}

window.addEventListener('resize', function () {
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
});

function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, dx, dy) {
    let temp = $("input[name='test']").get(0).checked
    let temp3 = $("#test3").prop('checked')
    console.log(temp3)
    let temp1= $("input[name='color']").get(0).value
    let temp2= $("#rotation").val()/180*Math.PI
    data[dataIndex] = myChart.convertFromPixel('grid', this.position);
    // console.log(dataIndex)
    myChart.setOption({
        series: [{
            id: 'a',
            data: data
        }]
    });
    if (temp) {
        setG(temp1)
    }
    if(temp3)
    {
        setG(temp1,temp2,60)
    }
}