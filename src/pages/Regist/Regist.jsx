import "./Regist.css"
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom"

const Regist = () => {
    const navigate = useNavigate()

    return (
        <div className="Regist-container">
            <div className="Regist-wrapper">

                <form action="">
                    <h1>Sign In</h1>
                    <h4>Create Your Account</h4>
                    <div className="Regist-input-box">
                        <input type="email" name="email" id="email" placeholder='Email' required />
                        <IoMdMail className='icon' />
                    </div>
                    <div className="Regist-input-box">
                        <input type="password" name="username" id="username" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="Regist-input-box">
                        <input type="password" name="password" id="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="Regist-signup">
                        <button type='submit'>Sign In</button>
                        <label>Already Have Account? <p onClick={() => navigate("/login")}>Login</p></label>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Regist;