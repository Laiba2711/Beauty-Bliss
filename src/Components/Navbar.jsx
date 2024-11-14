import { Component } from "react";
import './NavbarStyles.css';
import { MenuData } from "./MenuData";

class Navbar extends Component{
    state= {clicked : false};
    handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav  className="NavbarItems">
              <div className="header">
         <img src="logo1.JPG" alt=""  height="120px"/>
     <div className="menuicons"
     onClick={this.handleClick}>
     <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}
     aria-hidden="true"></i>
     </div>
         
         <ul className="menu">
            {MenuData.map((item, index) => {
                return(
                    <li 
                     key={index}>
                <a href={item.url}
                className={item.cName}> 
                    <i className={item.icon}></i>
                    
                     {item.title}
                    </a>
            </li>
                )})
            } 
         </ul>
              </div>
              
              <div class="topnav">
              <div className="menu">
  <a class="active" href="#home">ALL</a>
  <a href="#about">FACES</a>
  <a href="#contact">EYES</a>
  <a href="#contact">LIPS</a>
  </div>
  <div class="search-container">
            <input type="text" id="searchBar" placeholder="Type to search..."  onchange="searchData()"  />
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
        <div className="cart">
        <i class="fa fa-shopping-cart" ></i>
        </div>
  
  



              </div>

            </nav>
            

        )
    }
}
export default Navbar;