import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Line from './components/line.jsx';

function App() {
  const [slot,setSlot] = useState([1,2,3,1,5])
  const [keyframes,setKeyframes] = useState([25496,25644,25801,25948,26095])
  const [lastwin, setLastWin] = useState(0)
  const [stavka,setstavka] = useState('red')
  let q=0
  const [anim,setAnim]=useState(11)
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)
  console.log(cash)
  const add_cash=(cc)=>{
    dispatch({type:"ADD_CASH",payload:cc})
  }
  const get_cash=(cc)=>{
    dispatch({type:"GET_CASH",payload:cc})
  }
  const init_cash=(cc)=>{
    dispatch({type:"INIT_CASH",payload:cc})
  }
  ///User Balance
  let balance=async()=>{
  const response = await fetch("https://makemesites.com/slots/balance.php");
  const jsonData = await response.json();
  console.log(jsonData.balance);
  init_cash(jsonData.balance)
  }
  useEffect(() => {
   balance();
  }, []);

  ///
//keyframes 
//0 \25496
//147 \25644
//294 \25801
//441 \25948
//588 \26095
  const [translateY_1, setTranslateY_1] = useState(0);
  const [translateY_2, setTranslateY_2] = useState(0);
  const [translateY_3, setTranslateY_3] = useState(0);



  const Spin = (bet) => {
    get_cash(bet)
    let variaty =[Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5)]
    //is I Win
    if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==1){
      setTimeout(() =>
        add_cash(bet * 2), 5000)
        setLastWin(bet * 2)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==2){
      setTimeout(() => {
        add_cash(bet*3)
        setLastWin(bet * 3)

        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*4)
      }, 5000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==3){
      setTimeout(() => {
        add_cash(bet*4)
        setLastWin(bet * 4)

        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*5)
      }, 5000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==4){
      setTimeout(() => {
        add_cash(bet*5)
        setLastWin(bet * 5)

        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*6)
      }, 5000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==5){
      setTimeout(() => {
        add_cash(bet*6)
        setLastWin(bet * 6)

        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*7)
      }, 5000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==0){
      setTimeout(() => {
        add_cash(bet*7)
        setLastWin(bet * 7)

        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*8)
      }, 5000)
    }
    else if(variaty[0]==variaty[1] || variaty[1]==variaty[2]){
      setTimeout(() => {
        add_cash(bet*1,5)
        setLastWin(bet * 1.5)

        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*2)
      }, 5000)
    }
          //variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==0
    console.log(variaty)
    
    if(translateY_1 !=0){
    resetY()
      setTimeout(() => {
      setTranslateY_1(-(keyframes[variaty[0]]));
      setTranslateY_2(-(keyframes[variaty[1]]));
      setTranslateY_3(-(keyframes[variaty[2]]));

    }, 2000);
  }
  else{
    setTranslateY_1(-(keyframes[variaty[0]]));
    setTranslateY_2(-(keyframes[variaty[1]]));
    setTranslateY_3(-(keyframes[variaty[2]]));

  }



  };
  const resetY = () => {

    setTranslateY_1(0);
    setTranslateY_2(0);
    setTranslateY_3(0);



  };
let setmyslot=(index)=>slot.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return 5
      } else {
        // The rest haven't changed
        return c;
      }
    });
  
    return (
    <div className="App">
      <div className="container">
        <div className='slotbg'>
          <img src={require('./images/bckg.png')}/>
          </div>
        <div className='linecontainer'>
      <Line translate={translateY_1}/>
      <Line translate={translateY_2}/>
      <Line translate={translateY_3}/>
  </div>
  <div className='buttons'>
  <div className='btn' onClick={()=>Spin(10)}>Go stavka 10</div>
      <div className='btn' onClick={()=>Spin(50)}>Go stavka 50</div>
      <div className='btn btnmax' onClick={()=>Spin(100)}>Go stavka 100</div>
      {/* <div className='btn btnmax' onClick={()=>setInterval(()=>Spin(100),6000)}>Auto</div> */}
  </div>

<div className='results'>

<h1>Баланс: {cash}</h1>
          <h1>Последний выигрыш: {lastwin}</h1>
</div>

    </div>
    </div>
  );
}

export default App;
