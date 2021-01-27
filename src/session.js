import { useState } from "react";
import Axios from "axios";

function Session() {
    const [userNameReg, setUserNameReg] = useState('')
    const [userNameReg, setUserNameReg] = useState('')

    return(
        <div className="session"> 
            <div className="registration">
                <h1>Registartion</h1>
                <label type="text" onChange={(event) => {
                  setUserNameReg(event.target.value);
                }}>Name</label>

                <input type="text"/>
                <label type="text">Email</label>
                <input type="text"/>
                <label type="text">Password</label>
                <input type="password"/>
                <button>Register</button>
            </div>

            <div className="login">
                <h1>LogIn</h1>
                <input type="text" placeholder="Email..."/>
                <input type="password" placeholder="Password..."/>
                <button>Login</button>
            </div>
        </div>
    )

}

import default Session