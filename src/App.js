import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import country_list from './Countries'


const SelectCountry = ({country, setCountry}) => (
  <select value={country} onChange={e => {console.log('selection changed')
  return (setCountry(e.target.value))}}>
    {country_list.map(c=><option key={c}>{c}</option>)}
  </select>
)

// const Bar = ({data}) => {
//   const canvasRef = useRef()
//   useEffect(() => {
//     console.log('im updated')
//     const myCanvas = canvasRef.current
//     new Chart(myCanvas, {
//       type: 'bar',
//       data: {
//         labels: ['Confirmed', 'Recovered', 'Critical', 'Deaths'],
//         datasets: [{
//           label: '# of People',
//           data: [data.confirmed, data.recovered, data.critical, data.deaths],            
//           borderWidth: 1
//         }]
//       },
//     });
//   }, [data])
  
//   return (
//     <div className="canvas" width={400} height={400} style={{'width':'800px',' height':'800px'}}>
//       <canvas ref={canvasRef} id="myChart" ></canvas>
//     </div>
//     )
// }

function App() {
  const [country, setCountry] = useState('Pakistan')
  const [data, setData] = useState({ country: '', confirmed: '', recovered: '', critical: '', deaths: '' })
  const bar_data = {
    labels: ['Confirmed', 'Recovered', 'Critical', 'Deaths'],
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
        data: [data.confirmed, data.recovered, data.critical, data.deaths]
      }
    ]
  };  
  
  
  useEffect(() => {
    const getData = async() => {
    await axios.get('https://covid-19-data.p.rapidapi.com/country', {
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API
      },
      params: {
        "name": country
      }
    }).then((response) => {
      setData(response.data[0])
      console.log(response)
    })
      .catch((error) => {
        console.log(error)
      })}
      getData();
  }, [country]) 
  

  return (
    <div className="App">
      <h1>{data.country}</h1>
      <ul>
        <li>Confirmed: {data.confirmed}</li>
        <li>Recovered: {data.recovered}</li>
        <li>Critical: {data.critical}</li>
        <li>Deaths: {data.deaths}</li>
      </ul>  
      <SelectCountry country={country} setCountry={setCountry}/>
      <div style={{'width':"800px"}}>
        <Bar
            data={bar_data}
            width={900}
            height={500}
            options={{
              maintainAspectRatio: false
            }}
          />
      </div>
    </div>
  );
}

export default App;
