import React, { Component } from 'react'
import { Line, Doughnut } from 'react-chartjs-2'

export default class LineChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: [
                    {
                        label: 'Total de denúncias por mês',
                        data: [120, 145, 119, 100, 150, 130],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 3
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{ position: 'relative' }} >
                <Line 
                    data = { this.state.data }
                    options = {{}}
                />
            </div>
        )
    }
}