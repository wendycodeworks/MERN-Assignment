import React from 'react'
import axios from 'axios'

const Login = () => {


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
        <button onClick={Login}>Login</button>
    </div>
</form>

</div>
    )
}