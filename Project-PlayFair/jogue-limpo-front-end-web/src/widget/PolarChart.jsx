import React, { Component } from 'react'

import { Polar } from 'react-chartjs-2'

export default class PolarClass extends Component {
    constructor(props) {
        super(props)

        const randomColor = () => {
            const rgb = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
            return rgb
        }

        this.state = {
            data: {
                labels: props.labels,
                datasets: [
                    {
                        data: props.data,
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
