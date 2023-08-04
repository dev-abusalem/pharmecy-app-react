import React, { useState } from 'react'
import { BsCalendarX, BsFillCalendar2XFill } from 'react-icons/bs';
import { FaLinode, FaUsers } from 'react-icons/fa';
import { GiMedicinePills, GiMedicines } from 'react-icons/gi';
import "./scss/mainsummary.scss"
const MainSummary = () => {
    const [hidewcm, setHideWCM] = useState(false);

    function handleWCMessage(){
        setHideWCM(!hidewcm)
    }
  return (
    <>
        <section className={hidewcm ? 'welcome__message_hide' : "" }>
            <div className="welcome__message_wrapper">
                <span>This is <strong>Admin</strong> User</span>
                <span onClick={handleWCMessage}>x</span>   
            </div>
        </section>
        <section>
            <div className="main_summary">
                <div className="row">
                    <div className="col-md-3">
                        <div className="total_customer">
                            <div className="card">
                                <div className="card-body ">
                                <div>
                                <FaUsers />
                                </div>
                                <div>
                                    <span>TOTAL CUSTOMER</span>
                                    <h6>78</h6>
                                </div>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Show Details</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                    <div className="total_medicine">
                            <div className="card">
                                <div className="card-body">
                                <div>
                                <GiMedicines />
                                </div>
                                <div>
                                    <span>TOTAL MEDICINE</span>
                                    <h6>78</h6>
                                </div>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Show Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="out_of_stock">
                            <div className="card">
                                <div className="card-body">
                                <div>
                                <FaLinode />
                                </div>
                                <div>
                                    <span>OUT OF STOCK</span>
                                    <h6>78</h6>
                                </div>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Show Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="expired_medicine">
                            <div className="card">
                                <div className="card-body">
                                <div>
                                <BsCalendarX />
                                </div>
                                <div>
                                    <span>EXPIRED MEDICINE</span>
                                    <h6>78</h6>
                                </div>
                                </div>
                                <div className="card-footer">
                                    <a href="/">Show Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MainSummary