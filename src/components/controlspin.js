import '../App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';


function ControlSpin(props) {
     const [bet,setBet]= useState(1)
     const [minusactive,setMinusActive]=useState(true)
     const [plusactive,setPlussActive]=useState(true)
 let upbet=()=>{
    if(bet+1<11){
        setBet(bet+1)
        }
 }
 let downbet=()=>{
    if(bet-1>0){
    setBet(bet-1)
    }
    console.log(bet)
 }

    return (
    <div className='bottom'>
  
        <div className='mybalance'>
            <p>Balance: {props.mybalance}$</p>
        </div>
      <div className='gospin'>
      </div>
      <div className="buttonborder">
    <div className="button" onClick={()=>props.Spin(bet)}>
      SPIN
    </div>
    <div className="lineq">
    <div className="linerotate"></div>
    </div>
</div>
<div className='mybet'>
            <p>Bet: {bet}$</p>
            <div className='controlbet'>
            <div className='upbet' onClick={()=>upbet()}>+</div>
            <div className='downbet'  onClick={()=>downbet()}>-</div>
            </div>

        </div>
    </div>
  );
}

export default ControlSpin;

//wisnia
//160
//912
//razn 752