import React, { useState } from "react";
import "./scss/leftsidebar.scss";
import { AiFillHome, AiOutlineRetweet, AiFillSetting } from "react-icons/ai";
import { GrGroup, GrServices } from "react-icons/gr";
import { IoBook } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { BsBank2, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { GiStockpiles } from "react-icons/gi";
import { FaPills, FaIdCard, FaHandHoldingUsd } from "react-icons/fa";
import { HiUserGroup, HiOutlineCode, HiCurrencyDollar } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import avater from "../assets/images/avater.jpg";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  const [isActiveCustomar, setisActiveCustomar] = useState(false);
  const [arrow, setArrow] = useState(true);

  const [isActiveMedicine, setisActiveMedicine] = useState(false);
  const [arrowMedicine, setMedicineArrow] = useState(true);

  function handleCustomarDropdown() {
    setisActiveCustomar(!isActiveCustomar);
    setArrow(!arrow);
  }

  function handleMedicineDropdown() {
    setisActiveMedicine(!isActiveMedicine);
    setMedicineArrow(!arrowMedicine);
  }

  return (
    <section>
      <div className="dashboard_menu_wrapper">
        <ul className="dahboard_first_menu">
          <div className="dashboard_user">
            <img src={avater} alt="avater" />
            <div className="dash_user_info">
              <h4>John Doe</h4>
              <Link to="/">example@company.com</Link>
            </div>
          </div>
          <li>
            <AiFillHome />
            <Link to="/">Dashboard</Link>
          </li>
          <li onClick={handleCustomarDropdown}>
            <GrGroup />
            <Link to="#">Customar</Link>
            {arrow ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </li>
          <ul
            className={`${
              !isActiveCustomar ? "activeDropdown" : ""
            } dashboarddropdown`}
          >
            <li>
              <Link to="/customar/add">Add Customar</Link>
            </li>
            <li>
              <Link to="/customar/list">Customar List</Link>
            </li>
            <li>
              <Link to="/customar/credit">Credit Customar</Link>
            </li>
            <li>
              <Link to="/customar/paid">Paid Customar</Link>
            </li>
          </ul>

          <li>
            <HiUserGroup />
            <Link to="#">Manufacturer</Link>
          </li>

          <li onClick={handleMedicineDropdown}>
            <FaPills />
            <Link to="#">Medicine</Link>
            {arrowMedicine ? <IoIosArrowForward /> : <IoIosArrowDown />}
          </li>

          <ul
            className={`${
              !isActiveMedicine ? "activeDropdown" : ""
            } dashboarddropdown`}
          >
            <li>
              <Link to="/medicine/add">Add Medicine</Link>
            </li>
            <li>
              <Link to="/medicine/list">Medicine List</Link>
            </li>
            <li>
              <Link to="/medicine/cate/add">Add Category</Link>
            </li>
            <li>
              <Link to="/medicine/cate/list">Category List</Link>
            </li>

            <li>
              <Link to="/medicine/type/add">Add Type</Link>
            </li>

            <li>
              <Link to="/medicine/type/list">Type List</Link>
            </li>

            <li>
              <Link to="/medicine/unit/add">Add Unit</Link>
            </li>

            <li>
              <Link to="/medicine/unit/list">Unit List</Link>
            </li>
          </ul>

          <li>
            <TiShoppingCart />
            <Link to="/">Purchase</Link>
          </li>
          <li>
            <FaHandHoldingUsd />
            <Link to="/">Invoice</Link>
          </li>
          <li>
            <AiOutlineRetweet />
            <Link to="/">Return</Link>
          </li>
          <li>
            <GiStockpiles />
            <Link to="/">Stock</Link>
          </li>
          <li>
            <BsBank2 />
            <Link to="/">Bank</Link>
          </li>
          <li>
            <BsFillCreditCard2FrontFill />
            <Link to="/">Accounts</Link>
          </li>
          <li>
            <FaIdCard />
            <Link to="/">Human Dept.</Link>
          </li>
          <li>
            <IoBook />
            <Link to="/">Report</Link>
          </li>
          <li>
            <HiCurrencyDollar />
            <Link to="/">Tax</Link>
          </li>
          <li>
            <GrServices />
            <Link to="/">Service</Link>
          </li>
          <li>
            <ImSearch />
            <Link to="/">Search</Link>
          </li>
          <li>
            <FiSettings />
            <Link to="/">App Settings</Link>
          </li>
          <li>
            <HiOutlineCode />
            <Link to="/">Custom Code</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
