import React, {Component} from "react";
import {Memu_list} from "./menulist";
import { Link } from 'react-router-dom';
import "./nav.css";
import "./respon.css";

class Navbar extends Component{
    state = {actives : false}
    active_menu = () =>{this.setState({actives: !this.state.actives})}
    render(){
        return(
            <nav>
                <li className="menu_mb"><a onClick={this.active_menu}><i class={this.state.actives ? "fas fa-window-close":"fas fa-bars"}></i></a></li>
                <span className="blur_bg"></span>
                 
                <ul className={this.state.actives? "menu-links active": "menu-links"}>
                {
                    Memu_list.map((list,idex)=>{
                        return(
                            <li key = {list.title}>
                                <Link className={list.Class} to={list.Url}>{list.title}</Link>
                            </li>
                       )
                    })
                } 
                        
                </ul>
                
            </nav>
            
        )
    }
}
export default Navbar;