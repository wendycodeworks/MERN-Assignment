import React from 'react'
import axios from 'axios'

const Login = () => {

    function userlogin() {
        axios.post(url/auth/login)
        .then()
    }
    return(
<div>
    
<form method="post" action="/login">
    <div>
        <label>Email</label>
        <input type="text" name="email" />
    </div>
    <div>
        <label>Password</label>
        <input type="password" name="password" />
    </div>
    <div>
        <button onClick={userlogin}>Login</button>
    </div>
</form>

</div>
    )
}

export default Login