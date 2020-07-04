import { Bar } from 'react-chartjs-2'
import React from 'react'

const Countrygraph = ({data}) => {
    const bar_data = {
        labels: [ 'Recovered', 'Confirmed', 'Deaths'],
        datasets: [
            {
                label:'People',
                backgroundColor: [
                    'rgba(120,255,132,0.2)',
                    'rgba(120,99,132,0.2)',
                    'rgba(225,99,132,0.2)',
                    'rgba(255,99,132,0.2)'],
                borderColor: 'rgba(255,255,255,1)',
                borderWidth: 2,
                hoverBackgroundColor: [
                    'rgba(120,255,132,1)',
                    'rgba(120,99,132,1)',
                    'rgba(225,99,132,1)',
                    'rgba(255,99,132,1)'],
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [data.TotalRecovered, data.TotalConfirmed, data.TotalDeaths]
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




