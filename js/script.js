const APP_CONFIG = {
    comparisonSlider: {
        beforeImage: 'images/mining-before.png',
        afterImage: 'images/ecological-after.png',
        initialPosition: 0.5
    },
    ecologicalMap: {
        geoJsonUrl: 'data/jiangxi.json',
        mapName: 'jiangxi-ecology',
        metricLabel: '生态综合指数',
        regions: [
            {
                name: '南昌市',
                value: 85,
                overview: '省会都市圈重点推进山水林田湖草沙系统治理，打造数字化生态治理样板。',
                metrics: [
                    ['生态综合指数', '85分'],
                    ['数字监测覆盖率', '91%'],
                    ['重点流域水质优良率', '97%']
                ],
                digital: [
                    ['监测能力', '天空地一体化巡查'],
                    ['平台接入', '河湖林长制联动'],
                    ['更新频率', '按日汇聚']
                ],
                center: [115.89, 28.68],
                color: '#2c7a3e'
            },
            {
                name: '九江市',
                value: 90,
                overview: '依托长江岸线与鄱阳湖生态廊道，持续提升湿地修复与岸线保护能力。',
                metrics: [
                    ['生态综合指数', '90分'],
                    ['湿地保护面积', '92万亩'],
                    ['岸线修复里程', '124公里']
                ],
                digital: [
                    ['监测能力', '水环境在线感知'],
                    ['平台接入', '长江大保护专题图'],
                    ['更新频率', '按小时推送']
                ],
                center: [116.0, 29.7],
                color: '#4c9a5a'
            },
            {
                name: '赣州市',
                value: 92,
                overview: '赣南重点矿山修复与林地重建协同推进，是“两山”转化的代表区域。',
                metrics: [
                    ['生态综合指数', '92分'],
                    ['矿山修复面积', '3.5万亩'],
                    ['林地质量提升', '连续5年增长']
                ],
                digital: [
                    ['监测能力', '遥感+无人机核验'],
                    ['平台接入', '矿山修复监管平台'],
                    ['更新频率', '按周校核']
                ],
                center: [114.94, 25.85],
                color: '#5f9f63'
            },
            {
                name: '吉安市',
                value: 88,
                overview: '山地森林与流域生态协同修复成效突出，碳汇能力持续增强。',
                metrics: [
                    ['生态综合指数', '88分'],
                    ['森林覆盖率', '67.6%'],
                    ['年度碳汇量', '420万吨']
                ],
                digital: [
                    ['监测能力', '森林火情智能预警'],
                    ['平台接入', '林业碳汇核算模块'],
                    ['更新频率', '按日更新']
                ],
                center: [114.99, 27.11],
                color: '#6dad67'
            },
            {
                name: '宜春市',
                value: 86,
                overview: '聚焦矿山修复、温泉资源保护与绿色产业融合，形成生态资产运营场景。',
                metrics: [
                    ['生态综合指数', '86分'],
                    ['绿色产业产值', '年增12%'],
                    ['重点河段优良率', '96%']
                ],
                digital: [
                    ['监测能力', '生态资产台账'],
                    ['平台接入', '市县联动监管'],
                    ['更新频率', '按周更新']
                ],
                center: [114.38, 27.81],
                color: '#7cb342'
            },
            {
                name: '抚州市',
                value: 94,
                overview: '“两山银行”改革探索深入，生态资源收储、评估、转化链条较为完整。',
                metrics: [
                    ['生态综合指数', '94分'],
                    ['生态资源收储', '120余万亩'],
                    ['生态贷款规模', '12.5亿元']
                ],
                digital: [
                    ['监测能力', '资产确权与估值'],
                    ['平台接入', '两山银行应用场景'],
                    ['更新频率', '实时同步']
                ],
                center: [116.36, 27.98],
                color: '#90be6d'
            },
            {
                name: '上饶市',
                value: 89,
                overview: '武夷山生态屏障与信江流域保护协同推进，文旅与生态保护融合较好。',
                metrics: [
                    ['生态综合指数', '89分'],
                    ['自然保护地占比', '17%'],
                    ['重点景区生态承载', '动态监控']
                ],
                digital: [
                    ['监测能力', '景区客流热力分析'],
                    ['平台接入', '保护区监测专题'],
                    ['更新频率', '实时滚动']
                ],
                center: [117.97, 28.45],
                color: '#4fc3f7'
            },
            {
                name: '景德镇市',
                value: 87,
                overview: '陶瓷工业转型与山水生态修复并行，推动城市更新与生态品质提升。',
                metrics: [
                    ['生态综合指数', '87分'],
                    ['空气优良天数', '95%'],
                    ['修复示范片区', '8个']
                ],
                digital: [
                    ['监测能力', '工业园区在线感知'],
                    ['平台接入', '生态环境驾驶舱'],
                    ['更新频率', '按小时采集']
                ],
                center: [117.18, 29.27],
                color: '#57cc99'
            },
            {
                name: '萍乡市',
                value: 82,
                overview: '老工业区生态治理稳步推进，聚焦矿山修复和工业污染协同整治。',
                metrics: [
                    ['生态综合指数', '82分'],
                    ['矿山整治项目', '31个'],
                    ['土壤风险点位', '动态巡检']
                ],
                digital: [
                    ['监测能力', '重点源在线预警'],
                    ['平台接入', '矿区修复档案'],
                    ['更新频率', '按周巡检']
                ],
                center: [113.85, 27.63],
                color: '#84a98c'
            },
            {
                name: '新余市',
                value: 84,
                overview: '围绕城市湿地与山地公园建设，推进生产生活生态空间协同优化。',
                metrics: [
                    ['生态综合指数', '84分'],
                    ['城市绿地率', '43%'],
                    ['湿地修复项目', '12个']
                ],
                digital: [
                    ['监测能力', '城市绿地遥感解译'],
                    ['平台接入', '城园融合专题'],
                    ['更新频率', '按月评估']
                ],
                center: [114.92, 27.82],
                color: '#a3b18a'
            },
            {
                name: '鹰潭市',
                value: 83,
                overview: '信江流域生态治理与龙虎山周边保护联动，水生态治理基础扎实。',
                metrics: [
                    ['生态综合指数', '83分'],
                    ['水质优良率', '98%'],
                    ['生态缓冲带', '持续扩展']
                ],
                digital: [
                    ['监测能力', '流域断面在线监测'],
                    ['平台接入', '水生态专题图'],
                    ['更新频率', '按小时回传']
                ],
                center: [117.07, 28.26],
                color: '#588157'
            }
        ],
        streamItems: [
            '鄱阳湖水质监测数据已同步到生态一张图',
            '赣南矿山修复无人机巡检完成本轮比对',
            '抚州两山银行生态资产台账完成更新',
            '上饶保护区红外相机识别结果已回传',
            '九江岸线修复监测专题已生成日报',
            '城市绿地遥感识别模型完成最新推演',
            '重点断面水质传感器状态全部在线',
            '生态综合指数周报已推送到指挥驾驶舱'
        ]
    }
};

// 页面加载完成后初始化图表和效果
window.addEventListener('load', function() {
    // 初始化森林覆盖率动态趋势图
    initForestChart();
    // 初始化生态产品总值构成图
    initGepChart();
    // 初始化地市森林覆盖率对比图
    initCityChart();
    // 初始化林业碳汇交易增长趋势图
    initCarbonChart();
    // 初始化生态旅游收入增长趋势图
    initTourismChart();
    // 初始化空气质量指数变化图
    initAirChart();
    // 初始化鄱阳湖湿地生态变化图
    initWetlandChart();
    // 初始化江西绿色产业产值增长图
    initGreenIndustryChart();
    // 初始化江西生态指标vs全国平均雷达图
    initRadarChart();
    // 初始化生态数字孪生与智慧监测地图
    initEcologicalMap();
    // 初始化数据流动效果
    initDataStream();
    // 初始化粒子效果
    initParticles();
    // 初始化生态指数实时模拟
    initEcologicalIndex();
    // 初始化碳汇价值模拟计算器
    initCarbonCalculator();
    // 初始化生态账本模拟计算器
    initEcologicalLedger();
    // 初始化鄱阳湖候鸟数量变化图
    initBirdChart();
    // 初始化退捕渔民转产就业比例图
    initFishermanChart();
    // 初始化生态文明建设时间轴
    initTimeline();
    // 初始化图像对比滑块
    initImageSlider();
    // 初始化视频展示功能
    initVideoShowcase();
});

// 粒子效果实现
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // 随机大小
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 随机位置
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 随机动画延迟和持续时间
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// 生态指数实时模拟
function initEcologicalIndex() {
    const indexElement = document.getElementById('ecologicalIndex');
    let currentValue = 92.0;
    const targetValue = 92.6;
    const increment = 0.01;
    const interval = 100;
    
    const updateIndex = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(updateIndex);
        }
        indexElement.textContent = currentValue.toFixed(1);
    }, interval);
    
    // 模拟数据波动
    setInterval(() => {
        const randomChange = (Math.random() - 0.5) * 0.2;
        let newValue = parseFloat(indexElement.textContent) + randomChange;
        newValue = Math.max(92.0, Math.min(93.0, newValue));
        indexElement.textContent = newValue.toFixed(1);
    }, 5000);
}

// 森林覆盖率动态趋势图
function initForestChart() {
    const chartDom = document.getElementById('forestChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}年: {c}%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024', '2025'],
            axisLabel: {
                rotate: 45
            }
        },
        yAxis: {
            type: 'value',
            min: 55,
            max: 65,
            axisLabel: {
                formatter: '{value}%'
            }
        },
        series: [{
            name: '森林覆盖率',
            type: 'line',
            data: [57.0, 58.3, 60.0, 61.2, 62.1, 62.7, 63.1, 63.1, 63.1],
            smooth: true,
            lineStyle: {
                color: '#2c7a3e',
                width: 3
            },
            itemStyle: {
                color: '#2c7a3e'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: 'rgba(44, 122, 62, 0.3)'},
                    {offset: 1, color: 'rgba(44, 122, 62, 0.1)'}
                ])
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 生态产品总值构成图
function initGepChart() {
    const chartDom = document.getElementById('gepChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['调节服务', '供给服务', '文化服务']
        },
        series: [{
            name: 'GEP构成',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
                {value: 55, name: '调节服务'},
                {value: 30, name: '供给服务'},
                {value: 15, name: '文化服务'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                color: function(params) {
                    const colors = ['#2c7a3e', '#4c9a5a', '#7cb342'];
                    return colors[params.dataIndex];
                }
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 地市森林覆盖率对比图
function initCityChart() {
    const chartDom = document.getElementById('cityChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{b}: {c}%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}%'
            }
        },
        yAxis: {
            type: 'category',
            data: ['九江', '上饶', '宜春', '吉安', '赣州', '抚州']
        },
        series: [{
            name: '森林覆盖率',
            type: 'bar',
            data: [55.2, 61.3, 59.5, 67.6, 76.2, 68.4],
            itemStyle: {
                color: function(params) {
                    const colorList = ['#4c9a5a', '#5aaf68', '#68c576', '#76db84', '#84f092', '#92ff9f'];
                    return colorList[params.dataIndex];
                }
            },
            label: {
                show: true,
                position: 'right',
                formatter: '{c}%'
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 林业碳汇交易增长趋势图
function initCarbonChart() {
    const chartDom = document.getElementById('carbonChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}年: {c}万元'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2021', '2022', '2023', '2024', '2025']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}万元'
            }
        },
        series: [{
            name: '碳汇交易金额',
            type: 'line',
            data: [1200, 3500, 8900, 15600, 22000],
            smooth: true,
            lineStyle: {
                color: '#2c7a3e',
                width: 3
            },
            itemStyle: {
                color: '#2c7a3e'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: 'rgba(44, 122, 62, 0.3)'},
                    {offset: 1, color: 'rgba(44, 122, 62, 0.1)'}
                ])
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 生态旅游收入增长趋势图
function initTourismChart() {
    const chartDom = document.getElementById('tourismChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}年: {c}亿元'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}亿元'
            }
        },
        series: [{
            name: '生态旅游收入',
            type: 'line',
            data: [850, 980, 620, 1050, 1280, 1560, 1820],
            smooth: true,
            lineStyle: {
                color: '#4c9a5a',
                width: 3
            },
            itemStyle: {
                color: '#4c9a5a'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: 'rgba(76, 154, 90, 0.3)'},
                    {offset: 1, color: 'rgba(76, 154, 90, 0.1)'}
                ])
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 空气质量指数变化图
function initAirChart() {
    const chartDom = document.getElementById('airChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}年: {c}'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {
            type: 'value',
            min: 30,
            max: 70,
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [{
            name: '空气质量指数',
            type: 'line',
            data: [65, 62, 58, 52, 48, 45, 42],
            smooth: true,
            lineStyle: {
                color: '#2c7a3e',
                width: 3
            },
            itemStyle: {
                color: '#2c7a3e'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: 'rgba(44, 122, 62, 0.3)'},
                    {offset: 1, color: 'rgba(44, 122, 62, 0.1)'}
                ])
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 鄱阳湖湿地生态变化图
function initWetlandChart() {
    const chartDom = document.getElementById('wetlandChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['湿地面积（平方公里）', '候鸟数量（万只）', '水体优良率（%）']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        yAxis: [
            {
                type: 'value',
                name: '湿地面积',
                position: 'left',
                axisLabel: {
                    formatter: '{value} km²'
                }
            },
            {
                type: 'value',
                name: '候鸟数量',
                position: 'right',
                axisLabel: {
                    formatter: '{value} 万只'
                }
            },
            {
                type: 'value',
                name: '水体优良率',
                position: 'right',
                offset: 80,
                axisLabel: {
                    formatter: '{value}%'
                }
            }
        ],
        series: [
            {
                name: '湿地面积（平方公里）',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: 'rgba(44, 122, 62, 0.5)'},
                        {offset: 1, color: 'rgba(44, 122, 62, 0.1)'}
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [3850, 3900, 3950, 4000, 4020, 4030, 4040, 4050, 4060, 4070]
            },
            {
                name: '候鸟数量（万只）',
                type: 'line',
                stack: 'Total',
                yAxisIndex: 1,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: 'rgba(76, 154, 90, 0.5)'},
                        {offset: 1, color: 'rgba(76, 154, 90, 0.1)'}
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [45, 48, 52, 55, 58, 60, 63, 65, 68, 70]
            },
            {
                name: '水体优良率（%）',
                type: 'line',
                stack: 'Total',
                yAxisIndex: 2,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: 'rgba(76, 195, 247, 0.5)'},
                        {offset: 1, color: 'rgba(76, 195, 247, 0.1)'}
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [75, 78, 80, 82, 85, 87, 88, 90, 92, 94]
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 江西绿色产业产值增长图
function initGreenIndustryChart() {
    const chartDom = document.getElementById('greenIndustryChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['生态农业', '林下经济', '环保装备', '生态旅游']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 亿元'
            }
        },
        series: [
            {
                name: '生态农业',
                type: 'bar',
                data: [850, 920, 1050, 1200, 1350],
                itemStyle: {
                    color: '#2c7a3e'
                }
            },
            {
                name: '林下经济',
                type: 'bar',
                data: [320, 380, 450, 520, 600],
                itemStyle: {
                    color: '#4c9a5a'
                }
            },
            {
                name: '环保装备',
                type: 'bar',
                data: [280, 350, 420, 500, 580],
                itemStyle: {
                    color: '#7cb342'
                }
            },
            {
                name: '生态旅游',
                type: 'bar',
                data: [750, 820, 950, 1100, 1240],
                itemStyle: {
                    color: '#4fc3f7'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 生态数字孪生与智慧监测地图
function formatInfoGroup(items) {
    return items.map(function(item) {
        return `
            <div class="info-item">
                <span class="info-label">${item[0]}：</span>
                <span class="info-value">${item[1]}</span>
            </div>
        `;
    }).join('');
}

function renderMapInfo(region) {
    const mapInfo = document.getElementById('mapInfo');
    if (!mapInfo || !region) return;

    mapInfo.innerHTML = `
        <h3>${region.name}</h3>
        <p>${region.overview}</p>
        <div class="region-info">
            <h4>生态价值</h4>
            ${formatInfoGroup(region.metrics)}
            <h4>数字化监测</h4>
            ${formatInfoGroup(region.digital)}
        </div>
    `;
}

function buildMapSeriesData(regions) {
    return regions.map(function(region) {
        return {
            name: region.name,
            value: region.value,
            itemStyle: {
                areaColor: region.color,
                borderColor: '#ffffff'
            }
        };
    });
}

function buildMarkerData(regions) {
    return regions.map(function(region) {
        return {
            name: region.name,
            value: region.center.concat(region.value),
            itemStyle: {
                color: region.color
            }
        };
    });
}

function buildGeoMapOption(regions) {
    return {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                const score = Array.isArray(params.value) ? params.value[2] : params.value;
                return `${params.name}<br/>${APP_CONFIG.ecologicalMap.metricLabel}：${score || '--'}分`;
            }
        },
        visualMap: {
            min: 80,
            max: 95,
            left: 24,
            bottom: 80,
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#d8efe0', '#88c37f', '#2c7a3e']
            },
            textStyle: {
                color: '#2c3e2f'
            }
        },
        geo: {
            map: APP_CONFIG.ecologicalMap.mapName,
            roam: true,
            zoom: 1.1,
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 1.2,
                areaColor: '#e8f5e9'
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#b7ddb2'
                },
                label: {
                    color: '#16351f'
                }
            }
        },
        series: [
            {
                name: '江西生态地图',
                type: 'map',
                map: APP_CONFIG.ecologicalMap.mapName,
                geoIndex: 0,
                roam: true,
                data: buildMapSeriesData(regions)
            },
            {
                name: '重点区域',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                    scale: 4,
                    brushType: 'stroke'
                },
                symbolSize: 10,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#16351f'
                },
                itemStyle: {
                    shadowBlur: 12,
                    shadowColor: 'rgba(44, 122, 62, 0.35)'
                },
                data: buildMarkerData(regions)
            }
        ]
    };
}

function buildFallbackMapOption(regions) {
    const markerData = buildMarkerData(regions);

    return {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `${params.name}<br/>${APP_CONFIG.ecologicalMap.metricLabel}：${params.value[2]}分`;
            }
        },
        xAxis: {
            type: 'value',
            min: 113,
            max: 118.8,
            show: false
        },
        yAxis: {
            type: 'value',
            min: 24.6,
            max: 30.4,
            show: false
        },
        graphic: [
            {
                type: 'polygon',
                left: '15%',
                top: '8%',
                shape: {
                    points: [
                        [90, 10],
                        [240, 18],
                        [320, 72],
                        [338, 160],
                        [302, 250],
                        [220, 338],
                        [118, 360],
                        [52, 292],
                        [24, 186],
                        [42, 88]
                    ]
                },
                style: {
                    fill: 'rgba(44, 122, 62, 0.12)',
                    stroke: '#2c7a3e',
                    lineWidth: 2
                }
            }
        ],
        series: [
            {
                type: 'scatter',
                data: markerData,
                symbolSize: function(val) {
                    return Math.max(12, val[2] / 4);
                },
                label: {
                    show: true,
                    formatter: function(params) {
                        return `${params.name}\n${params.value[2]}分`;
                    },
                    position: 'right',
                    fontSize: 12,
                    color: '#21462c'
                },
                itemStyle: {
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    shadowBlur: 12,
                    shadowColor: 'rgba(44, 122, 62, 0.25)'
                }
            }
        ]
    };
}

function initEcologicalMap() {
    const chartDom = document.getElementById('ecologicalMap');
    if (!chartDom) {
        console.error('ecologicalMap element not found');
        return;
    }

    console.log('Initializing ecological map...');
    const myChart = echarts.init(chartDom);
    const regions = APP_CONFIG.ecologicalMap.regions;
    const regionMap = new Map(regions.map(function(region) {
        return [region.name, region];
    }));
    const geoJsonUrl = chartDom.dataset.geojson || APP_CONFIG.ecologicalMap.geoJsonUrl;

    console.log('GeoJSON URL:', geoJsonUrl);
    console.log('Regions data:', regions);

    renderMapInfo(regions[0]);

    console.log('Loading GeoJSON from:', geoJsonUrl);
    fetch(geoJsonUrl)
        .then(function(response) {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            if (!response.ok) {
                throw new Error('GeoJSON not found: ' + response.statusText);
            }
            return response.json();
        })
        .then(function(geoJson) {
            console.log('GeoJSON loaded successfully, features count:', geoJson.features.length);
            console.log('First feature:', geoJson.features[0]);
            try {
                echarts.registerMap(APP_CONFIG.ecologicalMap.mapName, geoJson);
                console.log('Map registered successfully');
                myChart.setOption(buildGeoMapOption(regions));
                console.log('Map option set successfully');
            } catch (error) {
                console.error('Error registering map:', error);
                myChart.setOption(buildFallbackMapOption(regions));
            }
        })
        .catch(function(error) {
            console.error('Error loading GeoJSON:', error);
            myChart.setOption(buildFallbackMapOption(regions));
        });

    myChart.on('click', function(params) {
        console.log('Map clicked:', params);
        const region = regionMap.get(params.name);
        if (region) {
            renderMapInfo(region);
        }
    });

    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 数据流动效果
function initDataStream() {
    const dataStream = document.getElementById('dataStream');
    if (!dataStream) return;

    const dataTypes = APP_CONFIG.ecologicalMap.streamItems;
    dataStream.innerHTML = '<h4>实时数据流</h4>';

    let index = 0;
    const appendStreamItem = function() {
        const streamItem = document.createElement('div');
        streamItem.classList.add('stream-item');
        streamItem.textContent = dataTypes[index];
        dataStream.appendChild(streamItem);

        if (dataStream.children.length > 5) {
            dataStream.removeChild(dataStream.children[1]);
        }

        index = (index + 1) % dataTypes.length;
    };

    appendStreamItem();
    appendStreamItem();
    appendStreamItem();
    setInterval(appendStreamItem, 2200);
}

// 碳汇价值模拟计算器
function initCarbonCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');
    const forestAreaInput = document.getElementById('forestArea');
    const protectionYearsInput = document.getElementById('protectionYears');
    const calculatorResult = document.getElementById('calculatorResult');
    
    calculateBtn.addEventListener('click', function() {
        const forestArea = parseFloat(forestAreaInput.value) || 0;
        const protectionYears = parseFloat(protectionYearsInput.value) || 1;
        
        if (forestArea <= 0) {
            calculatorResult.innerHTML = `
                <h3>计算结果</h3>
                <p>请输入有效的林地面积</p>
            `;
            return;
        }
        
        // 基于江西平均碳汇参数计算
        // 假设每亩林地每年固碳约0.32吨
        const annualCarbonSequestration = forestArea * 0.32;
        const totalCarbonSequestration = annualCarbonSequestration * protectionYears;
        
        // 假设当前碳价约85元/吨
        const carbonPrice = 85;
        const economicValue = totalCarbonSequestration * carbonPrice;
        
        calculatorResult.innerHTML = `
            <h3>计算结果</h3>
            <div class="result-item">
                <div class="result-label">林地面积</div>
                <div class="result-value">${forestArea.toFixed(0)} 亩</div>
            </div>
            <div class="result-item">
                <div class="result-label">保护年限</div>
                <div class="result-value">${protectionYears.toFixed(0)} 年</div>
            </div>
            <div class="result-item">
                <div class="result-label">年固碳量</div>
                <div class="result-value">${annualCarbonSequestration.toFixed(0)} 吨</div>
            </div>
            <div class="result-item">
                <div class="result-label">总固碳量</div>
                <div class="result-value">${totalCarbonSequestration.toFixed(0)} 吨</div>
            </div>
            <div class="result-item">
                <div class="result-label">经济价值</div>
                <div class="result-value">¥ ${economicValue.toFixed(0)} 元</div>
            </div>
        `;
    });
}

// 生态文明建设时间轴
function initTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    
    const timelineData = [
        {
            date: '2014',
            title: '列入首批生态文明先行示范区',
            description: '江西被列为全国首批生态文明先行示范区，开启生态文明建设新征程。',
            icon: 'fas fa-seedling'
        },
        {
            date: '2016',
            title: '成为首批国家生态文明试验区',
            description: '江西成为全国首批国家生态文明试验区，探索生态文明建设新模式。',
            icon: 'fas fa-award'
        },
        {
            date: '2020',
            title: '抚州获批“两山”实践创新基地',
            description: '抚州市成功获批国家“绿水青山就是金山银山”实践创新基地。',
            icon: 'fas fa-mountain'
        },
        {
            date: '2023',
            title: '发布《江西省生态产品总值核算技术规范》',
            description: '江西省发布全国首个省级生态产品总值核算技术规范，推动生态价值量化。',
            icon: 'fas fa-file-alt'
        },
        {
            date: '2024',
            title: '数字孪生生态监测系统上线',
            description: '江西省数字孪生生态监测系统正式上线，实现生态环境实时监测与智能分析。',
            icon: 'fas fa-digital-tachograph'
        }
    ];
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// 江西生态指标vs全国平均雷达图
function initRadarChart() {
    const chartDom = document.getElementById('radarChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {},
        legend: {
            data: ['江西', '全国平均']
        },
        radar: {
            indicator: [
                { name: '森林覆盖率', max: 70 },
                { name: '空气质量优良天数比例', max: 100 },
                { name: '地表水水质', max: 100 },
                { name: '单位GDP能耗下降率', max: 20 }
            ]
        },
        series: [{
            name: '生态指标对比',
            type: 'radar',
            data: [
                { 
                    value: [63.1, 95.5, 97.7, 15.8],
                    name: '江西',
                    areaStyle: {
                        color: 'rgba(44, 122, 62, 0.3)'
                    },
                    lineStyle: {
                        color: '#2c7a3e'
                    },
                    itemStyle: {
                        color: '#2c7a3e'
                    }
                },
                {
                    value: [23, 85, 83, 10],
                    name: '全国平均',
                    areaStyle: {
                        color: 'rgba(76, 195, 247, 0.3)'
                    },
                    lineStyle: {
                        color: '#4fc3f7'
                    },
                    itemStyle: {
                        color: '#4fc3f7'
                    }
                }
            ]
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 生态账本模拟计算器
function initEcologicalLedger() {
    const landAreaInput = document.getElementById('landArea');
    const landAreaValue = document.getElementById('landAreaValue');
    const depositBtn = document.getElementById('depositBtn');
    const ledgerResult = document.getElementById('ledgerResult');
    
    // 更新林地面积显示
    landAreaInput.addEventListener('input', function() {
        landAreaValue.textContent = this.value;
    });
    
    // 计算预期收益
    depositBtn.addEventListener('click', function() {
        const landArea = parseFloat(landAreaInput.value);
        
        // 模拟计算
        const annualIncome = landArea * 120; // 每亩年收益120元
        const loanAmount = landArea * 5000; // 每亩可抵押贷款5000元
        
        ledgerResult.innerHTML = `
            <h4>预期收益</h4>
            <div class="result-item">
                <div class="result-label">预期年生态收益：</div>
                <div class="result-value">¥ ${annualIncome.toFixed(0)} 元</div>
            </div>
            <div class="result-item">
                <div class="result-label">可抵押贷款额度：</div>
                <div class="result-value">¥ ${loanAmount.toFixed(0)} 元</div>
            </div>
            <p>通过“两山银行”的资源收储和市场化交易机制，您的生态资源可以转化为实际收益，实现生态价值的市场化。</p>
        `;
    });
}

// 鄱阳湖候鸟数量变化图
function initBirdChart() {
    const chartDom = document.getElementById('birdChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}年: {c}只'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}只'
            }
        },
        series: [{
            name: '白鹤数量',
            type: 'line',
            data: [30, 50, 120, 300, 800, 2000, 3500],
            smooth: true,
            lineStyle: {
                color: '#2c7a3e',
                width: 3
            },
            itemStyle: {
                color: '#2c7a3e'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: 'rgba(44, 122, 62, 0.3)'},
                    {offset: 1, color: 'rgba(44, 122, 62, 0.1)'}
                ])
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 退捕渔民转产就业比例图
function initFishermanChart() {
    const chartDom = document.getElementById('fishermanChart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['生态护渔', '生态旅游', '水产养殖', '其他']
        },
        series: [{
            name: '转产就业',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
                {value: 35, name: '生态护渔'},
                {value: 25, name: '生态旅游'},
                {value: 20, name: '水产养殖'},
                {value: 20, name: '其他'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                color: function(params) {
                    const colors = ['#2c7a3e', '#4c9a5a', '#7cb342', '#4fc3f7'];
                    return colors[params.dataIndex];
                }
            }
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 图像对比滑块
function mountSliderFallback(panel, title, description, themeClass) {
    const existingFallback = panel.querySelector('.slider-placeholder');
    if (existingFallback) return;

    const fallback = document.createElement('div');
    fallback.className = `slider-placeholder ${themeClass}`;
    fallback.innerHTML = `
        <div>
            <div>${title}</div>
            <div style="font-size: 1rem; margin-top: 10px;">${description}</div>
        </div>
    `;
    panel.insertBefore(fallback, panel.firstChild);
}

function bindSliderImage(panel, image, options) {
    if (!panel || !image) return;

    console.log('Loading image:', options.src);
    image.src = options.src;

    image.addEventListener('load', function() {
        console.log('Image loaded successfully:', options.src);
    });

    image.addEventListener('error', function() {
        console.error('Error loading image:', options.src);
        image.style.display = 'none';
        mountSliderFallback(panel, options.title, options.description, options.themeClass);
    });
}

function updateSliderPosition(slider, position) {
    const before = slider.querySelector('.slider-before');
    const handle = slider.querySelector('.slider-handle');
    const safePosition = Math.max(0, Math.min(1, position));

    before.style.width = `${safePosition * 100}%`;
    handle.style.left = `${safePosition * 100}%`;
}

function initImageSlider() {
    const slider = document.getElementById('imageSlider');
    if (!slider) return;

    const beforePanel = slider.querySelector('.slider-before');
    const afterPanel = slider.querySelector('.slider-after');
    const beforeImage = beforePanel.querySelector('img');
    const afterImage = afterPanel.querySelector('img');
    let isDragging = false;

    bindSliderImage(beforePanel, beforeImage, {
        src: slider.dataset.beforeSrc || APP_CONFIG.comparisonSlider.beforeImage,
        title: '昔日矿山',
        description: '请将实景图片放入 images/mining-before.jpg',
        themeClass: 'abandoned-mining'
    });

    bindSliderImage(afterPanel, afterImage, {
        src: slider.dataset.afterSrc || APP_CONFIG.comparisonSlider.afterImage,
        title: '今日绿肺',
        description: '请将实景图片放入 images/ecological-after.jpg',
        themeClass: 'ecological-park'
    });

    const setPositionFromClientX = function(clientX) {
        const sliderRect = slider.getBoundingClientRect();
        const position = (clientX - sliderRect.left) / sliderRect.width;
        updateSliderPosition(slider, position);
    };

    const startDrag = function(event) {
        isDragging = true;
        setPositionFromClientX(event.clientX);
        event.preventDefault();
    };

    slider.addEventListener('pointerdown', startDrag);

    window.addEventListener('pointermove', function(event) {
        if (!isDragging) return;
        setPositionFromClientX(event.clientX);
    });

    window.addEventListener('pointerup', function() {
        isDragging = false;
    });

    updateSliderPosition(slider, APP_CONFIG.comparisonSlider.initialPosition);
}

// 视频展示功能
function initVideoShowcase() {
    // 创建模态框元素
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'videoModal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-video-container">
                <iframe class="modal-video" id="modalVideo" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="modal-video-info" id="modalVideoInfo"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // 获取模态框元素
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoInfo = document.getElementById('modalVideoInfo');
    const closeBtn = videoModal.querySelector('.close');

    // 视频数据
    const videos = {
        1: {
            title: '矿山修复前后对比',
            url: 'https://www.chinanews.com.cn/sh/shipin/cns-d/2026/03-18/news1049300.shtml'
        },
        2: {
            title: '鄱阳湖生态改善',
            url: 'https://sthjt.jiangxi.gov.cn/jxssthjt/col/col42067/content/content_2028311543128526848.html'
        },
        3: {
            title: '空气质量改善',
            url: 'https://sthjt.jiangxi.gov.cn/jxssthjt/col/col42067/content/content_2028311543128526848.html'
        },
        4: {
            title: '绿色产业发展',
            url: 'https://www.chinanews.com.cn/sh/shipin/cns-d/2026/03-18/news1049300.shtml'
        }
    };

    // 抖音视频数据
    const douyinVideos = {
        douyin1: {
            title: '东江源头：矿山复绿生态美',
            url: 'https://v.douyin.com/oUlkxvTVFnw/',
            description: '推荐单位：江西省赣州市融媒体中心 | 承办单位：中华环保联合会环境与法制专业委员会',
            tags: ['#绿水青山就是金山银山', '#矿山复绿', '#美丽中国']
        },
        douyin2: {
            title: '《美丽江西·生态卷轴》',
            url: 'https://v.douyin.com/aoN_SqMY_10/',
            description: '2025年六五环境日江西省主场活动主题宣传片 | @生态环境部 @中国环境',
            tags: ['#六五环境日', '#美丽中国我先行']
        }
    };

    // 为视频项添加点击事件
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.dataset.videoId;
            const videoType = this.dataset.videoType;
            
            if (videoType === 'douyin') {
                // 抖音视频 - 在新窗口打开
                const videoUrl = this.dataset.videoUrl;
                if (videoUrl) {
                    window.open(videoUrl, '_blank');
                }
            } else {
                // 普通视频 - 在模态框中显示
                const video = videos[videoId];
                if (video) {
                    modalVideo.src = video.url;
                    modalVideoInfo.innerHTML = `<h4>${video.title}</h4>`;
                    videoModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });

    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modalVideo.src = '';
        videoModal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === videoModal) {
            modalVideo.src = '';
            videoModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}
