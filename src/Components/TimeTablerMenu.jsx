import React from 'react'
import { useState } from 'react';
import "./Style/TimeTablerMenu.css"


import { HiMiniSquares2X2, HiCalendar,HiTableCells,HiOutlineArrowLeftStartOnRectangle, HiArrowTurnDownLeft} from "react-icons/hi2";
import { BiDoorOpen } from "react-icons/bi";
import { FaChartLine, FaUserLock} from "react-icons/fa6";
import { BsClipboardData } from "react-icons/bs";
import { GrSystem } from "react-icons/gr";
import { RiAdminLine } from "react-icons/ri";

import NUST from "../assets/Image/Polytechnic_of_Namibia_logo.png";



const TimeTablerMenu = () => {

  const [showAdvanceMenu, setShowAdvanceMenu] = useState(true);    
    


  const toggleSystemManageBtn = ()=>{
      setShowAdvanceMenu(showAdvanceMenu ? false : true)
  }




  return (
    <div className='TimeTablerMenu'>
        <menu>
            <div className='logoContainer'>
              <img src={NUST} alt='NUST-Logo'/>
            </div>

            <section className='menuButtons'>

              {/* This are the basic button navigation */}
              { showAdvanceMenu && (
                <>
                  <section className='iconContainer'>
                    <i><HiMiniSquares2X2 /></i>
                    <button className='menuBtn'>Overview</button>
                  </section>
                
                  <section className='iconContainer'>
                    <i><HiCalendar/></i>
                    <button className='menuBtn'>Event Management</button>
                  </section>
                
                  <section className='iconContainer'>
                    <i><BiDoorOpen/></i>
                    <button className='menuBtn'>Room</button><br/>
                  </section>
                  
                  <section className='iconContainer'>
                    <i><HiTableCells/></i>
                    <button className='menuBtn'>Timetabling</button><br/>
                  </section>
                  
                  <section className='iconContainer'>
                    <i><FaChartLine/></i>
                    <button className='menuBtn'>Reports & Statistics</button><br/>
                  </section>                  
                
                </>
                )}

              {/* The second buttons for enhance features */}
              { !showAdvanceMenu && (
                <>
                  <section className='iconContainer'>
                    <i><FaUserLock/></i>
                    <button className='menuBtn'>Permissions</button><br/>
                  </section>
                  
                  <section className='iconContainer'>
                    <i><BsClipboardData/></i>
                    <button className='menuBtn'>Export Data</button><br/>
                  </section>
                
                  <section className='iconContainer'>
                    <i><GrSystem/></i>
                    <button className='menuBtn'>Integration</button><br/>
                  </section>
                
                </>
              )}
            </section>

            <div className='bottomButton'>  
              <section className='innerButtonContainer'>
                <div className='outerContainer'>
                  <button className='menuBtn toggleBtn' onClick={toggleSystemManageBtn}>
                    <span className="btnIcon">
                      {showAdvanceMenu ? <HiArrowTurnDownLeft /> : <RiAdminLine />}
                    </span>
                    <span className="btnText">
                      {showAdvanceMenu ? "Back" : "System Management"}
                    </span>
                  </button>

                </div>
              </section>

              <section className='innerButtonContainer'>
                <div className='outerContainer'>
                  <i><HiOutlineArrowLeftStartOnRectangle /></i>
                  <button className='menuBtn'>Sign Out</button>  
                </div>
              </section>
            </div>
        </menu>
    </div>
  )
}

export default TimeTablerMenu