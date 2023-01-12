import $ from 'jquery'; 
import SignUpCSS from "./SignUp.module.css";
import img1 from "../../assets/add-user.png";

const SignUp = () => {
    const signUp = () => {
        const username = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;
        if (username === "" || password === "" || email === "" || confirmPassword === "") {
            alert("Please enter full details")
        }
        else if (password != confirmPassword) {
            alert("Password does not match");
        }
        else {
            const userDetail = {
                userName: username,
                email: email,
                passWord: password,
                confirmPassword: confirmPassword,
            }
            // localStorage.setItem("userDetail", JSON.stringify(userDetail) )
            $.ajax({
                type: "POST",
                url: "http://localhost:4000/api/signup",
                data: userDetail,
                crossDomain: true,
                success: function (res) {
                    console.log("Your data is: ", res);
                    alert("Registered Successfully")
                    window.open("../SignIn/login.html", "_self");
                    },
                error: function () {
                    console.log("error");
                    },
                });
            }
    
            // document.getElementById('signup').addEventListener('submit', function new_event(event) {
                // event.preventDefault();
        };

  return (
    <div className={SignUpCSS["main-container"]}>
        <div className={SignUpCSS["sign-up-container"]}>
            <div className={SignUpCSS["sign-up-title"]}>
                <img src={img1} alt=""/>
                <span>Sign up</span>
            </div>
            <form className={SignUpCSS["signup-form"]}>
                <div className={SignUpCSS["resizing-input-fields"]}>
                    <label for="">Email</label>
                    <input type="email" id="email"/>
                </div>
                <div className={SignUpCSS["resizing-input-fields"]}>
                    <label for="" >Username</label>
                    <input type="text" id="username"/>
                </div>
                <div className={SignUpCSS["resizing-input-fields"]}>
                    <label for="">Password</label>
                    <input type="password" id ="password"/>
                </div>
                <div className={SignUpCSS["resizing-input-fields"]}>
                    <label for="">Confirm Password</label>
                    <input type="password" id="confirm-password"/>
                </div>
                <div className={SignUpCSS.checkbox}>
                 <input type="checkbox"/>  Accept terms and conditions
                </div>
                <div className={SignUpCSS["signup-btn"]}>
                    <input type="button" name="" value="Sign up" onClick={signup => signUp(signup)}/>               
                </div>
                <div className={SignUpCSS["back-to-login"]}>
                <a href="/">Back to Main</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp