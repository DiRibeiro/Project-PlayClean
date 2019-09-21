import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

export default class BarChart extends Component {
    constructor(props) {
        super(props)
        
        const randomColor = () => {
            const rgb = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
            return rgb
        }

        this.state = {
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                datasets: [
                    {
                        label: 'Total de denúncias por mês',
                        data: [120, 145, 119, 100, 150, 130, 129, 34],
                        backgroundColor: [
                            randomColor(),
                            randomColor(),
                            randomColor(),
                            randomColor(),
                            randomColor(),
                            randomColor(),
                            randomColor(),
                            randomColor(),
                            randomColor()
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
                <Bar 
                    data = { this.state.data }
                    options = {{}}
                />
            </div>
        )
    }
}