import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Line from './line.jsx';
import ControlSpin from './controlspin';
import useSound from 'use-sound'
import mySound from '../sounds/spin.mp3' // Your sound file path here
import myWinSound from '../sounds/win.mp3' // Your sound file path here
import myPressSound from '../sounds/press.mp3' // Your sound file path here
import Web3 from 'web3';

function ThreeSlots() {
  const [slot,setSlot] = useState([1,2,3,1,5])
  let requestAccount =()=>{
    console.log('ok');
    if(window.ethereum){
      console.log('detected')
    }
  }
  const web3 = new Web3(window.ethereum);

const contractAddress = '0x89B09d38C1fAc571917A81798F5233cc5cD5629A';
const contractAbi = [
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_recipient",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "pay",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

const paymentContract = new web3.eth.Contract(contractAbi, contractAddress);

async function pay() {
  const accounts = await web3.eth.requestAccounts();
  const amount = web3.utils.toWei('0.02', 'ether'); 
  const result = await paymentContract.methods.pay().send({ from: accounts[0], value: amount, gasLimit: '100000' });
  console.log(result);
  console.log('ok');
  add_cash(100);
  updateBallance(100)
}
  const [startframes,setStartFrames]=useState([0,147,294,441,588])
  const [keyframes,setKeyframes] = useState([25496,25644,25801,25948,26095])
  const [lastwin, setLastWin] = useState(0)
  const [stavka,setstavka] = useState('red')
  //sounds
  const [playSound] = useSound(mySound)
  const [PlayWinSound] = useSound(myWinSound)
  const [PressSound] = useSound(myPressSound)
//
  const [anidur,setAnidur]= useState(3)

  let q=0
  const [anim,setAnim]=useState(11)
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)
  console.log(cash)
  const add_cash=(cc)=>{
    dispatch({type:"ADD_CASH",payload:cc})
    setTimeout(() => {
      updateBallance(cash)
  }, 6000)
  }
  const get_cash=(cc)=>{
    dispatch({type:"GET_CASH",payload:cc})
    setTimeout(() => {
      updateBallance(cash-cc)
  }, 6000)
  }
  const init_cash=(cc)=>{
    dispatch({type:"INIT_CASH",payload:cc})
  }

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

  ///User Balance
  let balance=async()=>{
    const response = await fetch("https://makemesites.com/slots/balance.php");
    const jsonData = await response.json();
    console.log(jsonData.balance);
    init_cash(jsonData.balance)
    }
    useEffect(() => {
     balance();
     //setInterval(()=>updateBallance(cash),1000);
    }, []);
  

  const Spin = (bet) => {
    if(cash<=0){
      pay()
      return false
    }
    PressSound()
    setTimeout(playSound(),100)
    get_cash(bet)

    let variaty =[Math.floor(Math.random() * 5),Math.floor(Math.random() * 5),Math.floor(Math.random() * 5)]
    //is I Win
    if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==1){
      setTimeout(() =>
        add_cash(bet * 2), 3000)
        setLastWin(bet * 2)
        PlayWinSound()
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==2){
      setTimeout(() => {
        add_cash(bet*3)
        setLastWin(bet * 3)
        PlayWinSound()
        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*4)
      }, 3000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==3){
      setTimeout(() => {
        add_cash(bet*4)
        setLastWin(bet * 4)
        PlayWinSound()


        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*5)
      }, 3000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==4){
      setTimeout(() => {
        add_cash(bet*5)
        setLastWin(bet * 5)
        PlayWinSound()


        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*6)
      }, 3000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==5){
      setTimeout(() => {
        add_cash(bet*6)
        setLastWin(bet * 6)
        PlayWinSound()


        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*7)
      }, 3000)
    }
    else if(variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==0){
      setTimeout(() => {
        add_cash(bet*7)
        setLastWin(bet * 7)
        PlayWinSound()


        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*8)
      }, 3000)
    }
    else if(variaty[0]==variaty[1] || variaty[1]==variaty[2]){
      setTimeout(() => {
        add_cash(bet*1,5)
        setLastWin(bet * 1.5)
        PlayWinSound()

        console.log('You win:'+variaty[0]+variaty[1]+variaty[2]+'is:'+bet*2)
      }, 3000)
    }
          //variaty[0]==variaty[1]&& variaty[1]==variaty[2]&&variaty[2]==0
    console.log(variaty)
    
    if(translateY_1 <-1000){   
      setTranslateY_1(-(startframes[variaty[0]]));
      setTranslateY_2(-(startframes[variaty[1]]));
      setTranslateY_3(-(startframes[variaty[2]]));
      console.log('tr reset'+translateY_1)

  }
  else{
    setTranslateY_1(-(keyframes[variaty[0]]));
    setTranslateY_2(-(keyframes[variaty[1]]));
    setTranslateY_3(-(keyframes[variaty[2]]));
    console.log('tr normal'+translateY_1)
  }
  //set new balance


  };
  const resetY = () => {
    setAnidur(0);
    setTranslateY_1(0);
    setTranslateY_2(0);
    setTranslateY_3(0);
   // setAnidur(3)



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
    let updateBallance=(qnt)=>{
      // var xml = new XMLHttpRequest();
      //   xml.open("GET", "https://makemesites.com/slots/setbalance.php?bal="+qnt, false);
      //   xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //   xml.send();
      //   alert('updated'+qnt)
      var xml = new XMLHttpRequest();
      xml.onreadystatechange = function() {
          if (xml.readyState === 4 && xml.status === 200) {
              alert('updated ' + qnt);
          }
      };
      xml.open("GET", "https://makemesites.com/slots/setbalance.php?bal=" + qnt, true);
      xml.send();
    }
    
    return (
    <div className="App">
         <div className="bgwrapperthree">
      <div className="container container-overlay">
       
        {/* <div className='slotbg'>
          <img src={require('./images/bckg.png')}/>
          </div> */}
        <div className='linecontainer'>
          <div className='animationgreed'>
            <div className='animcolumn animationcolumn_1'>
          <div className='gridel grid_1_1'></div>
          <div className='gridel grid_1_2'></div>
          <div className='gridel grid_1_3'></div>
          </div>
          <div className='animcolumn animationcolumn_2'>
          <div className='gridel grid_2_1'></div>
          <div className='gridel grid_2_2'></div>
          <div className='gridel grid_2_3'></div>
          </div>
          <div className='animcolumn animationcolumn_3'>
          <div className='gridel grid_3_1'></div>
          <div className='gridel grid_3_2'></div>
          <div className='gridel grid_3_3'></div>
          </div>
          </div>
      <Line anidur={anidur} translate={translateY_1}/>
      <Line anidur={anidur} translate={translateY_2}/>
      <Line anidur={anidur} translate={translateY_3}/>
  </div>
  <ControlSpin Spin={Spin} mybalance={cash}/>

    </div>
    </div>
    </div>
  );
}

export default ThreeSlots;
