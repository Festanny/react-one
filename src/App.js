// import './App.css';
import {Main} from './Main';
import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {

  const [array, setArray] = useState(
      [{name: "Dima", years: 25}, {name: "Alina", years: 15}, {name: "Alexey", years: 18}, {name: "Maria", years: 29}]
  )

  const [count, setCount] = useState(0)
  const [usd, setUsd] = useState(0)

  const setNumber = () => {
    setCount(state => state + 1)
    setCount(state => state + 1)
  }

  useEffect(() => {
    const getUSD = async () => {
      const {data} = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
      console.log(data.Valute.USD.Value);
      setUsd(data.Valute.USD.Value);
    }


  getUSD();
  }, [])

  const deleteUser = () => {
    let filterUser = array.filter(item => item.years < 29)
      setArray(filterUser)
  }

  return (
    <div className="App">
      {array.map(item => (
          <Main name={item.name} years={item.years} />
      ))}
      {/*  <Main name='Dima' />*/}
      <Main  usd={usd}/>
      <button onClick={deleteUser} className='button__main'>Удалить самого старшего</button>
      <span className='span__main'>{count}</span>
    </div>
  );
}

export default App;
