import React, { Component } from 'react'

import { Polar } from 'react-chartjs-2'

export default class PolarClass extends Component {
    constructor(props) {
        super(props)

        const randomColor = () => {
            const rgb = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
            return rgb
        }

        this.state = {
            data: {
                labels: ['Osório', 'Atlântida Sul', 'Borússia', 'Estrada do Mar', 'Palmital',
                        'Parque de Rodeios', 'Parque Eólico', 'Passinhos'],
                datasets: [
                    {
                        data: [120, 145, 119, 100, 150, 130, 129, 34],
                        backgroundColor: [
                            randomColor(), randomColor(), randomColor(), randomColor(),
                            randomColor(), randomColor(), randomColor(), randomColor()
                        ],
                        borderWidth: 1
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div style={{ position: 'relative', hidden: 'none'}} >
                <Polar 
                    data = { this.state.data }
                    options = {{}}
                />
            </div>
        )
    }
}
