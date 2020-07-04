import { Bar } from 'react-chartjs-2'
import React from 'react'

const Countrygraph = ({data}) => {
    const bar_data = {
        labels: ['Confirmed', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: 'KKORONA',
                backgroundColor: [
                    'rgba(120,99,132,0.2)',
                    'rgba(120,255,132,0.2)',
                    'rgba(225,99,132,0.2)',
                    'rgba(255,99,132,0.2)'],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: [
                    'rgba(120,99,132,1)',
                    'rgba(120,255,132,1)',
                    'rgba(225,99,132,1)',
                    'rgba(255,99,132,1)'],
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [data.TotalConfirmed, data.TotalRecovered, data.TotalDeaths]
            }
        ]
    };
    return (
        <div style={{ 'width': "80%", 'margin': 'auto' }}>
            <Bar
                data={bar_data}
                options={{
                    maintainAspectRatio: true
                }}
            />
        </div>
    )
}

export default Countrygraph




