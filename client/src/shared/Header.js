import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./scss/header.scss";
import {FaBell} from "react-icons/fa"
import {BsFillExclamationTriangleFill} from "react-icons/bs"
import {TbUserCircle} from "react-icons/tb"

const Header = () => {

  const [showAccount, setShowAccount] = useState(false);

  const handleOpenAccount = () =>{
    setShowAccount(!showAccount)
  }

  const navigate = useNavigate()
  function handleLogout(){
    localStorage.removeItem('token');
   setTimeout(()=>{
    navigate("/login");
   },2000)
  }


  const storedUserInfo = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(storedUserInfo);

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="brand">
                <a href="/"><h3>CAREMEDICINE</h3></a>
              </div>
            </div>
            <div className="col-md-2 text-right">
              <div className="notification_wrapper">
                <div className="row">
                <div className="col-md-4">
                  <a href="/" className="expaire">
                  <FaBell style={{fontSize:"22px"}} />
                  <span>0</span>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="/" className="expaire">
                    <BsFillExclamationTriangleFill style={{fontSize:"22px"}} />
                    <span>0</span>
                  </a>
                </div>
                <div className="col-md-4 mt-1">
                  <a onClick={handleOpenAccount} href="#" className="expaire">
                    <TbUserCircle style={{fontSize:"25px"}} />
                  </a>
                  <div className="col-md-3">
          
                </div>
                </div>
                </div>
              </div>
            </div>

            <div className={showAccount ? "" : "hide_myaccount_by_click"}>
            <div className="my_profile_header mt-1">
              <div className="card-headers">
                <h3 style={{textTransform:'capitalize'}}>{userInfo.name}</h3>
              </div>
              <div className="card-bodys">
                <a style={{fontSize:'18px' , textDecoration:'underline'}} href="/">{userInfo.email}</a><br/>
                <a style={{fontSize:'18px'}} href="/">My Account</a>
              </div>
              <div className="card-footers">
                <a style={{fontSize:'18px'}} onClick={handleLogout} href="/">Logout</a>
              </div>
          </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;
