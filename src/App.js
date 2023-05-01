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
  let goslot=()=>{
    console.log('ok')
    // for(let i =0;i<slot.length;i++){
    //  let newarr=slot
    //  console.log(slot[i])
    //  newarr= setmyslot(i)
    //  setSlot(newarr)

    // }
    
  }
//keyframes 
//0 \25496
//147 \25644
//294 \25801
//441 \25948
//588 \26095
  const [translateY_1, setTranslateY_1] = useState(0);
  const [translateY_2, setTranslateY_2] = useState(0);
  const [translateY_3, setTranslateY_3] = useState(0);
  const [translateY_4, setTranslateY_4] = useState(0);
  const [translateY_5, setTranslateY_5] = useState(0);


  const handleTranslateY = () => {
    let variaty =[Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5)]
    //is I Win
          let maxCount = 0;
          let num = null;
          
          for (let i = 0; i < variaty.length; i++) {
            let count = 0;
            for (let j = i + 1; j < variaty.length; j++) {
              if (variaty[i] === variaty[j]) {
                count++;
              }
            }
            if (count > maxCount) {
              maxCount = count;
              num = variaty[i];
            }
          }
          if((maxCount+1)>=3){
            alert('you win')
            add_cash(100)
          }
          else{
            get_cash(10)
          }
    //
    console.log(variaty)
    
    if(translateY_1 !=0){
    resetY()
  
    console.log('googo')
    setTimeout(() => {
      setTranslateY_1(-(keyframes[variaty[0]]));
      setTranslateY_2(-(keyframes[variaty[1]]));
      setTranslateY_3(-(keyframes[variaty[2]]));
      setTranslateY_4(-(keyframes[variaty[3]]));
      setTranslateY_5(-(keyframes[variaty[4]]));
    }, 2000);
  }
  else{
    setTranslateY_1(-(keyframes[variaty[0]]));
    setTranslateY_2(-(keyframes[variaty[1]]));
    setTranslateY_3(-(keyframes[variaty[2]]));
    setTranslateY_4(-(keyframes[variaty[3]]));
    setTranslateY_5(-(keyframes[variaty[4]]));
  }



  };
  const resetY = () => {

    setTranslateY_1(0);
    setTranslateY_2(0);
    setTranslateY_3(0);
    setTranslateY_4(0);
    setTranslateY_5(0);


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
      <Line translate={translateY_4}/>
      <Line translate={translateY_5}/>
  </div>
      <div className='btn' onClick={()=>handleTranslateY()}>Go</div>

          <h1>{cash}</h1>
          <h1>{anim}</h1>
    </div>
    </div>
  );
}

export default App;
