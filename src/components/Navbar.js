import React, {Component} from "react";
import { FaAlignJustify } from "react-icons/fa"
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
 export default class Navbar extends React.Component{
     state = {
         isOpen : false,
     }
     hadleToggle = () =>{
          this.setState({
              isOpen:!this.state.isOpen
          })
     }

     render(){
         return (
             <nav className ="navbar">
                 <div className="nav-center">
                     <div className="nav-header">
                        <Link to ="/">
                             <img src = {logo} alt ="Logo"></img>
                        </Link> 
                        <button onClick= {this.hadleToggle} type="button" className ="nav-btn"> 
                            <FaAlignJustify></FaAlignJustify>
                        </button>   
                     </div>
                     <ul className ={this.state.isOpen? "nav-links show-nav": "nav-links"}>
                        <li>
                            <Link to ="/"> Home</Link>
                        </li>
                        <li>
                            <Link to ="/rooms"> Rooms</Link>
                        </li>
                     </ul>
                 </div>
             </nav>
                  
         );
     }
 }