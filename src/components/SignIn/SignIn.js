// import React from 'react';
import $ from 'jquery'; 
import classes from './SignIn.module.css';
import img1 from "../../assets/add-user.png";
import img2 from "../../assets/show.png";


const SignIn = () => {
    const login = () => {    

        $.ajax({
            type: "GET",
            url: "http://localhost:4000/api/login",
            crossDomain: true,
            success: function (res) {                
                let userNameInputValue = document.querySelector("#username").value
                let passWordInputValue = document.querySelector("#password").value
                let userDetail = JSON.parse(localStorage.getItem("userDetail"));
                if (userNameInputValue === res.username && passWordInputValue === res.password) {
                    window.open("../Dashboard/dashboard.html","_self");
                } else if (userNameInputValue ==="" || passWordInputValue ===""){
                    alert("Please enter username and password")
                }
                else if (!userDetail){
                    alert('Please Sign Up First')
                }
                else if (userNameInputValue === userDetail.userName && passWordInputValue === userDetail.passWord){
                    localStorage.setItem("username", userNameInputValue)
                    window.open("../Dashboard/dashboard.html","_self");
                }
                else {
                    alert("Incorrect Username or Password")
                }
    
            },
            error: function () {
                console.log("error");
            },
        });
    }
    
    return (
        
    <div className={classes["main-container"]}>
        <div className={classes["login-container"]}>
            <div className={classes["login-title"]}>
                <img src={img1} alt="" />
                <span>Login</span>
            </div>
            <form className={classes["login-form"]}>
                <div className={classes["resizing-input-fields"]}>
                    <label for="">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className={classes["resizing-input-fields"]}>
                    <label for="">Password</label>
                    <input type="password" id="password" />
                    <img src={img2} alt="" />
                </div>
                <div className={classes["login-btn"]}>
                    <input type="button" name="" value="Login" onClick={login()}/>
                </div>
                <div className={classes["back-to-signup"]}>
                <a href="../index.html">Back to Main</a>
                <a href="../SignUp/signup.html">Create an Account</a>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignIn;