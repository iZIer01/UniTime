import React from 'react'
import { useState } from 'react'

import styles from "./Style/TimeTablerHeader.module.css"

import ProfileImg from "../assets/Image/profile.jpg";
import { FaBell,FaSearch} from "react-icons/fa";



export const TimeTablerHeader = () => {
    
    const [searchBox, setSearchBox] = useState("");

  return (
    <div className={styles.headerContainer}>
        <header className={styles.TimeTablerHeader}>
            <section className={styles.welcomeMessageContainer}>
                <h1>Welcome, John!</h1>
                <span>Last seen: </span>
            </section>
            <section className={styles.iconContainer}>

                <section className={styles.searchContainer}>
                    <input
                        type='text'
                        id='searchBox'
                        name='searchBox'
                        value={searchBox}
                        placeholder='Search here...'
                        onChange={(e)=>{
                            setSearchBox(e.target.value)
                        }}
                    />
                    <i className={styles.searchIcon}><FaSearch/></i>
                </section>         

                <i className={styles.bellIcon}><FaBell/></i>
                <div className={styles.profileContainer}>
                        <img src={ProfileImg}/>
                </div>
            </section>
        </header>
    </div>
  )
}

export default  TimeTablerHeader;
