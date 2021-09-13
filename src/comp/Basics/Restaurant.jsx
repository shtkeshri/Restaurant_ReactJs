import React, {useState} from 'react'
import "./style.css";
import menu from "./menu";
import MenuCard from './menuCard';
import Nav from "./Nav";
const uniqueList = [
  ...new Set(
    menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Restaurant = () => {

  const [menuData, setmenuData] = useState(menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem= (category) => {
    const updatedList= menu.filter((e)=>
    {
      return e.category=== category;
    });

    setmenuData(updatedList);
  }
   return(
   <>
   <Nav filterItem={filterItem} menuList={menuList} />
   <MenuCard menuData={menuData}/>
   </> 
   );
};

export default Restaurant
