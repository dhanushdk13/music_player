import React from 'react'
import "../styles.css/LeftMenu.css";

import {FaSpotify, FaEllipsisH} from "react-icons/fa"
import {BiSearchAlt} from "react-icons/bi"
import {Menu} from "./Menu";
import{MenuList} from "./MenuList";

function LeftMenu() {
  return (
    <div className='leftMenu'>
       <div className='logoContainer'>
          <i><FaSpotify/></i>
          <h2>BeatZ</h2>
          <i><FaEllipsisH/></i>
       </div>
       <div className='searchBox'>
          <input type="text" placeholder='Search...'/>
          <i className='searchIcon'>
            <BiSearchAlt/>
          </i>
        </div>

        <Menu title={'Menu'} menuObject={MenuList}/>

    </div>
  )
}

export  {LeftMenu}