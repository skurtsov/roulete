import React, { useEffect } from 'react';
import { useDispatch, useSelector,dispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactDOM from 'react-dom';
import '../scss/main.css';
import Sidebar from './Sidebar';

function Main() {
    const dispatch = useDispatch()

    const init_cash=(cc)=>{
        dispatch({type:"INIT_CASH",payload:cc})
      }

      const cash = useSelector(state=>state.cash)
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
    const images = [
        require('../images/1.png'),
        require('../images/slots1.png'),
        require('../images/3.png'),
        // Добавьте остальные URL изображений
      ];
    return (
        <div class="mainmenu">
               <Sidebar/>
                    <h1>Main {cash}</h1>
                    <Carousel swipeable={true} emulateTouch={true} showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true} axis='horizontal'>
                    <div>
                    <img src={require('../images/1.png')} />
                    <a href="/slots">
                    <div className="buttonborder buttonmenu" >
                            <div className="button" >
                            Play
                            </div>
                            <div className="lineq">
                            <div className="linerotate"></div>
                            </div>
                            </div>
                    </a>
                </div>
                <div>
                    <img  src={require('../images/2.png')} />
                    <a href="/slots">
                    <div className="buttonborder buttonmenu" >
                            <div className="button" >
                            Play
                            </div>
                            <div className="lineq">
                            <div className="linerotate"></div>
                            </div>
                            </div>
                    </a>
                </div>
                <div>
                    <img  src={require('../images/3.png')} />
                    <a href="/slots">
                    <div className="buttonborder buttonmenu" >
                            <div className="button" >
                            Play
                            </div>
                            <div className="lineq">
                            <div className="linerotate"></div>
                            </div>
                            </div>
                    </a>
                </div>
            </Carousel>
        </div>
    );
}

export default Main;
