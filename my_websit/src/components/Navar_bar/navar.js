import React,{Component} from 'react';
import {Menu_item} from './menu';
import {Button} from '../button';
import './navar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    state = { clicked: false }
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked });
    }
    render(){
        return(
            <nav className = "Navbar_style">
                <h1 className = "nav-logo">TOR<i class="fab fa-react"></i></h1>
                <div className ="menu-icon" onClick = {this.handleClick}>
                <i class={this.state.clicked ? "fas fa-window-close":"fas fa-bars"}></i> 
                </div>
                <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
                    {Menu_item.map((item,idex)=>{
                        return(
                            <li key={item.title}>
                                <Link onClick = {this.handleClick} className = {item.ClassN} to ={item.Url}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Button  onClicks ={() => {alert("test")}}>Sing up</Button>
        </nav>
        )
    }
}
export default Navbar;