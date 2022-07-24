import React from "react";
import {Link} from "react-router-dom"
import './Header.scss';


const Header = () => {

    const isLoggedIn = true 

  return (
    <div className="header">
      <div className="header-container flex sp-bw">
       <div className="header-container-left">
          <Link className="link-text" to="/home">
              <div className="header-container-left-text">Medassist</div>
          </Link>
        </div>

       <div className="header-container-middle flex">
        <div className="header-container-middle-exercise">
            <Link className="link-text" to="/exercise">
                <div className="header-link">Exercise</div>
            </Link>
                 </div>

             <div className="header-container-middle-diet">
                  <Link className="link-text" to= "/diet">
                      <div className="header-link">Diet</div>
                    </Link>
                   </div>

                     <div className="header-container-middle-medicine">
                        <Link className="link-text" to= "/medicine">
                              <div className="header-link">Medicine</div>
                                </Link>
                                  </div>
                                      </div>

                   <div className="header-container-right flex">
                 {
                       isLoggedIn ?

            <div className="header-container-right-login">
                    <Link className="link-text" to="/profile/:id">
                                <div className="auth-link">UserName</div>
                                        </Link>
                                </div>
            :
                <>
                    <div className="header-container-right-login">
                                <Link className="link-text" to="/login">
                                            <div className="auth-link">Login</div>
                                                        </Link>
                                                        </div>

                                <div className="header-container-right-signup">
                                            <Link className="link-text" to="/signup">
                                                        <div className="auth-link">Signup</div>
                                                                            </Link>
                                                                                </div>
                                                                            </>
                                                                        }
                                                                        </div>
                                                                        </div>
                                                                        </div>
  )}
                                                        

export default Header
