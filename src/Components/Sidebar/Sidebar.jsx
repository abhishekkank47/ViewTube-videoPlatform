import React, { useContext } from 'react'
import "./Sidebar.css";
import home from  "../../assets/home.png"
import gameIcon from  "../../assets/game_icon.png"
import automobiles from  "../../assets/automobiles.png"
import sports from  "../../assets/sports.png"
import entertainment from  "../../assets/entertainment.png"
import tech from  "../../assets/tech.png"
import music from  "../../assets/music.png"
import blogs from  "../../assets/blogs.png"
import news from  "../../assets/news.png"
import jack from  "../../assets/cameron.png"
import simon from  "../../assets/simon.png"
import tom from  "../../assets/tom.png"
import megan from  "../../assets/megan.png"
import cameron from  "../../assets/cameron.png"
import { sidebarShowContext } from '../../Context/SidebarContext';

const Sidebar = () => {

  const [sidebar, setSidebar ]= useContext(sidebarShowContext)

  return (
    
    <div className={`sidebar ${sidebar? " ":"small-sidebar"}`}>
        <ul className='shortcut-link'>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={home} alt='home-Img'/> <p>Home</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={gameIcon} alt='game-Img'/> <p>Game</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={automobiles} alt='Automobiles-Img'/> <p>Automobiles</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={sports} alt='Sports-Img'/> <p>Sports</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={entertainment} alt='Entertainment-Img'/> <p>Entertainment</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={tech} alt='Technology-Img'/> <p>Technology</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={music} alt='Music-Img'/> <p>Music</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={blogs} alt='Blogs-Img'/> <p>Blogs</p>
          </li>
          <li className='side-link' style={{listStyle:"none"}}>
            <img src={news} alt='News-Img'/> <p>News</p>
          </li>
        </ul>
        <hr/>
        <div className='subscribed-list'>
          <h3>Subscribed</h3>
          <div className='side-link'>
            <img src={jack} alt="name"/> <p>Name</p>
          </div>
          <div className='side-link'>
            <img src={simon} alt="name"/> <p>Name</p>
          </div>
          <div className='side-link'>
            <img src={tom} alt="name"/> <p>Name</p>
          </div>
          <div className='side-link'>
            <img src={megan} alt="name"/> <p>Name</p>
          </div>
          <div className='side-link'>
            <img src={cameron} alt="name"/> <p>Name</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar