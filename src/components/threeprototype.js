import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Line from './components/line.jsx';

function App() {
  const [slot,setSlot] = useState([1,2,3,1,5])
  const [keyframes,setKeyframes] = useState([25496,25644,25801,25948,26095])

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
    let variaty =[]
    //is I Win
    let seed = Math.floor(Math.random() * 100 + 1)
    if(seed < 65){
      let one=Math.floor(Math.random() * 5)
      let two=Math.floor(Math.random() * 5)
      let three=Math.floor(Math.random() * 5)
      if(one ==two && two==three){
         one=Math.floor(Math.random() * 5)
         two=Math.floor(Math.random() * 5)
         three=Math.floor(Math.random() * 5)
      }
      else{
       variaty =[one,two,three]
      }
    }
    else if(seed<80){
      variaty =[0,0,0]
      add_cash(bet*1.5)
      console.log('you win')
    }
    else if(seed<90){
      variaty =[1,1,1]
      add_cash(bet*2)
      console.log('you win')
    }
    else if(seed<95){
      variaty =[2,2,2]
      add_cash(bet*3)
      console.log('you win')


    } else if(seed<99){
      variaty =[3,3,3]
      add_cash(bet*5)
      console.log('you win')


    }
 
    ////
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
        <div className='linecontainer'>
      <Line translate={translateY_1}/>
      <Line translate={translateY_2}/>
      <Line translate={translateY_3}/>
  </div>
      <div className='btn' onClick={()=>Spin(10)}>Go stavka 10</div>
      <div className='btn' onClick={()=>Spin(50)}>Go stavka 50</div>
      <div className='btn btnmax' onClick={()=>Spin(100)}>Go stavka 100</div>
      <div className='btn btnmax' onClick={()=>setInterval(()=>Spin(100),6000)}>Auto</div>

          <h1>{cash}</h1>
    </div>
    </div>
  );
}

export default App;
