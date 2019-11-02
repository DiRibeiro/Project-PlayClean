import React from 'react'
import {  Doughnut } from 'react-chartjs-2'

const DoughnutComponent = props => {
    return (
        <div style={{ position: 'relative' }} >
            < Doughnut 
                data = {{
                    labels: props.labels,
                    datasets: [
                        {
                            data: props.data,
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
                }}
                options = {{}}
            />
        </div>
    )
}

export default DoughnutComponent