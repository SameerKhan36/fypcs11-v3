import React from 'react'
import DashboardCSS from './Dashboard.module.css';
import img1 from "../../assets/notification.png";

const Dashboard = () => {
    const openNav = () => {
        // if (
        //     document.getElementById("mySidebar") &&
        //     document.getElementById("main-cont")
        //   )
        //   {
        // document.getElementById('mySidebar').style.width = '250px';
        // document.getElementById('main-cont').style.marginLeft = '249px';
        // }
        console.log(document.getElementById("mySidebar"));
    }
    const closeNav = () => {
        // if (
        //     document.getElementById("mySidebar") &&
        //     document.getElementById("main-cont")
        //   ) {
        // document.getElementById('mySidebar').style.width = '0px';
        // document.getElementById('main-cont').style.marginLeft = '0px';
        // }
        console.log("closeNav")
    }
  return (
    <div><div id="mySidebar" className={DashboardCSS.sidebar}>
    <span>ELASTIC STACK</span>
    <a href="#" className={DashboardCSS.closebtn} onClick={closeNav()}>x</a>
    <div className={DashboardCSS.links}>
        <ul>
            <li>
                <a href="../Users/users.html">Users</a>
            </li>
            <li>
                <a href="../Data-Managemnt/data-management.html">Data Management</a>
            </li>
            <li>
                <a href="../Data-analysis/Data-analysis.html">Data Analysis</a>
            </li>
            <li>
                <a href="../Reports/Reports.html">Reports</a>
            </li>
        </ul>
</div>
</div>
<div className={DashboardCSS["main-container"]} id="main-cont">
    <div className={DashboardCSS.header}>
        <div className={DashboardCSS["search-box"]}>
            <div id="main" className={DashboardCSS.burger}>
                <span className={DashboardCSS.openBtn} onClick={openNav()}>☰</span>
            </div>
            <input type="text" placeholder="   search..." />
        </div>
        <div className={DashboardCSS["add-btn-and-icn"]}>
            <img src={img1} alt="" />
            <button>+ Add Data</button>
            <a href="../index.html">Logout</a>
        </div>
    </div>
</div></div>
  )
}


export default Dashboard