import React, { Component } from 'react'

import { Doughnut } from 'react-chartjs-2'

export default class DoughnutClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                labels: ['Centro', 'Borrucia', 'Glória', 'Caconde', 'Emboaba', 'Mariápolis', 'Palmital'],
                datasets: [
                    {
                        data: [120, 145, 119, 100, 150, 130, 129],
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)',
                            'rgba(115, 29, 21)'
                        ],
                        borderWidth: 1
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{ position: 'relative' }} >
                <Doughnut 
                    data = { this.state.data }
                    options = {{}}
                />
            </div>
        )
    }
}
