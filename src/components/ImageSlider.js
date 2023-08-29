import React, { useEffect } from 'react';

class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title : ["Header 1", "Header 2", "Header 3", "Header 4"],
        content : ["Lorem ipsum proin gravida", "Lalala lalalla aalalalala", "Doobi boodi doo", "Shalala shalala doom"]
      }
    }
      
    render() {
      const className = 'item level' + this.props.level;
      const item = this.props.id-1;
      const id = "slide" + this.props.id.toString();
      return(
        <div className={className} id={id}>
          <h1>{this.state.title[item]}</h1>
          <p>{this.state.content[item]}</p>
        </div>
      );
    }
  }
  
  class Slider extends React.Component {
    constructor(props){
      super(props);  
      this.state = {
              items: this.props.items,
              active: 0,
              direction: ''
          }
      this.moveRight = this.moveRight.bind(this)
      this.moveLeft = this.moveLeft.bind(this);
    }
    
    generateItems() {   
      var items = [];
      var level;
      for (var i = this.state.active -1; i < this.state.active + 2; i++) {
        var index = i;    
        
        if (i < 0) {
          index = this.state.items.length + i;
        } else if (i >= this.state.items.length) {
          index = i % this.state.items.length; 
        }
        
        level = -(this.state.active - i);
        
        items.push(<Item key={index} id={this.state.items[index]} level={level} />);
        
      }
      return items;  
   }
    
    moveLeft(){
      var index = this.state.active;
      index < 1 ? index = this.state.items.length - 1 : index--;
      this.setState({
        active:index,
        direction: 'left'
      });
    }
    
    moveRight(){
      var index = this.state.active;
      index >= 3 ? index = 0 : index++;
      this.setState({
        active:index,
        direction: 'right'
      });
    }
    
    render(){
      const index = this.state.active;
      const level = index - 1;
      return (
        <div id="container">
          {this.generateItems()}
          <button id="left" onClick={this.moveLeft}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
          <button id="right" onClick={this.moveRight}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>
      );
    }
    
  }
    
  var items = [1, 2, 3, 4]
  ReactDOM.render(<Slider items={items} active={1}/>, document.getElementById('slider'));