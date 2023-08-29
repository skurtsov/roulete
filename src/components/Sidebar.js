import React, { useEffect } from 'react';
import { useDispatch, useSelector,dispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactDOM from 'react-dom';
import '../App.css';

function Sidebar() {
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
        <div>
        <div className="layout has-sidebar fixed-sidebar fixed-header">
        <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
          <a id="btn-collapse" className="sidebar-collapser"><i className="ri-arrow-left-s-line"></i></a>
          <div className="image-wrapper">
            <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
          </div>
          <div className="sidebar-layout">
            <div className="sidebar-header">
              <div className="pro-sidebar-logo">
                <div>P</div>
                <h5>Pro Sidebar</h5>
              </div>
            </div>
            <div className="sidebar-content">
              <nav className="menu open-current-submenu">
                <ul>
                  <li className="menu-header"><span> GENERAL </span></li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-vip-diamond-fill"></i>
                      </span>
                      <span className="menu-title">Components</span>
                      <span className="menu-suffix">
                        <span className="badge primary">Hot</span>
                      </span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Grid</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Layout</span>
                          </a>
                        </li>
                        <li className="menu-item sub-menu">
                          <a href="#">
                            <span className="menu-title">Forms</span>
                          </a>
                          <div className="sub-menu-list">
                            <ul>
                              <li className="menu-item">
                                <a href="#">
                                  <span className="menu-title">Input</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="#">
                                  <span className="menu-title">Select</span>
                                </a>
                              </li>
                              <li className="menu-item sub-menu">
                                <a href="#">
                                  <span className="menu-title">More</span>
                                </a>
                                <div className="sub-menu-list">
                                  <ul>
                                    <li className="menu-item">
                                      <a href="#">
                                        <span className="menu-title">CheckBox</span>
                                      </a>
                                    </li>
                                    <li className="menu-item">
                                      <a href="#">
                                        <span className="menu-title">Radio</span>
                                      </a>
                                    </li>
                                    <li className="menu-item sub-menu">
                                      <a href="#">
                                        <span className="menu-title">Want more ?</span>
                                        <span className="menu-suffix">&#x1F914;</span>
                                      </a>
                                      <div className="sub-menu-list">
                                        <ul>
                                          <li className="menu-item">
                                            <a href="#">
                                              <span className="menu-prefix">&#127881;</span>
                                              <span className="menu-title">You made it </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-bar-chart-2-fill"></i>
                      </span>
                      <span className="menu-title">Charts</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Pie chart</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Line chart</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Bar chart</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-shopping-cart-fill"></i>
                      </span>
                      <span className="menu-title">E-commerce</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Products</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Orders</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">credit card</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-global-fill"></i>
                      </span>
                      <span className="menu-title">Maps</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Google maps</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Open street map</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                       <i className="ri-paint-brush-fill"></i>
                      </span>
                      <span className="menu-title">Theme</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Dark</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Light</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-header" ><span> EXTRA </span></li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-book-2-fill"></i>
                      </span>
                      <span className="menu-title">Documentation</span>
                      <span className="menu-suffix">
                        <span className="badge secondary">Beta</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-calendar-fill"></i>
                      </span>
                      <span className="menu-title">Calendar</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-service-fill"></i>
                      </span>
                      <span className="menu-title">Examples</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            </div>
            </aside>
            </div>
            </div>
    );
}

export default Sidebar;
