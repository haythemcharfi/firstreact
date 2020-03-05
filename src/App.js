import React, { Component } from 'react';
import "./App.css"
const menu = [{name:"Home"},{name:"Services",value:["For entrepreur ","For Students", "For  hobbyists"]},{name : "Contact"}]
class App extends Component {
  state = { 
    display : false
   }
 Show =()=> {
   console.log("show")
   this.setState({
     display:!this.state.display
   })
 }
  render() {
    return ( 
      <div className="total">
      
      {menu.map((el,i)=><div  key= {i}>
            {el.value ? <div>
              
             <p onClick={this.Show} >  {el.name}</p>
                {el.value.map((el)=><ul className={ this.state.display ? "display" : "hide"}>
                <li className="border">{el}</li>
                </ul>)}
            </div>:
            <div>
              {el.name}
              </div>}
    </div>)}
          
      </div>);
  }
}
 
export default App;