import SignUpCSS from "./SignUp.module.css";
import img1 from "../../assets/add-user.png";

function SignUp() {
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
                    <input type="button" name="" value="Sign up" onclick="signUp()"/>               
                </div>
                <div className={SignUpCSS["back-to-login"]}>
                <a href="../index.html">Back to Main</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp