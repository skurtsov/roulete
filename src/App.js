import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [number,setNumber] = useState(Math.floor(Math.random() * 36 +1))
  const [colornum,setColornum] = useState('red')
  let newnumber=()=>{
    setTimeout(()=>{
    let tmp = Math.floor(Math.random() * 36 +1)
    console.log('new is '+tmp)
    setNumber(tmp)
    let tmpcolor =Math.floor(Math.random() * 2 +1)
    if(tmpcolor==1){
      setColornum('black')
    }
    else{
      setColornum('red')
    }}
    ,1000)
  }
  useEffect(()=>{
  newnumber()
  },[])
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)
  console.log(cash)
  const add_cash=(cc)=>{
    dispatch({type:"ADD_CASH",payload:cc})
  }
  const get_cash=(cc)=>{
    dispatch({type:"GET_CASH",payload:cc})
  }
    return (
    <div className="App">
      <div className="container">
          <div className={'number '+colornum}>{number}</div>
          <div className='button' onClick={()=>newnumber()}>Go</div>

          <h1>{cash}</h1>
     <button onClick={()=>add_cash(Number(prompt()))}>Добавить </button>
     <button onClick={()=>get_cash(Number(prompt()))}>Снять </button>
      </div>
    </div>
  );
}

export default App;
