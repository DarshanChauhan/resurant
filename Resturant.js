import React, {useState} from 'react';
import "./style.css"; 
import menu from "./menuAPI";
import MenuCard from './MenuCard'; 
import navbar from './Navbar';

const Resturant = () => {
    const [menuData ,setMenuData] = useState(menu);
    
    return <>
    <MenuCard menuData ={menuData}/>
     </>;
} ;
export default Resturant;
