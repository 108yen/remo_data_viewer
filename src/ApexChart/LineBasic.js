import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Chart } from '../styled/apexchart'

class LineBasic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    toolbar: {
                        autoSelected: 'pan',
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Temperature',
                    align: 'center',
                    style: {
                        fontSize: '20px',
                        fontWeight: 'lighter'
                    }
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            }
        }
    }



    render() {
        return (
            <Chart>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </Chart>
        );
    }
}
export default LineBasic;