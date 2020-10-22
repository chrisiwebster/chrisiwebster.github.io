import React from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';


export class NavBar extends React.Component{
    render() {
        return (
            <nav>
                <ul className="navigation">
                    {MenuItems.map((item, index) => {// This loops through the Menu items array and returns a listed item
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
         </nav>
            
        )
    }
}

export default NavBar;