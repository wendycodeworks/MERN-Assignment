import React, {useState, useContext} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import 'bulma'
import UserContext from "../../context/UserContext";
const Login = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { userContext, setUserContext } = useContext(UserContext);

    function login() {
        if (userEmail && userPassword){
            axios.post(`https://shrouded-refuge-96179.herokuapp.com/auth/login`, {
                email: userEmail,
                password: userPassword
            })
            .then((res) => {
                setUserContext({
                    token: res.data.token,
                    user: res.data.firstName,
                    _id: res.data._id
                })
                alert("You're logged in and ready to go!")
                setIsLoggedIn(true)
            }) 
             
            .catch((error) => {
              console.log(error)
            })
          } else {
            setErrorMessage("Required values!")
          }
    }

    return( 
            <div>
             <div className="hero is-fullheight">
                <div className="hero-body has-text-centered">
                    <div className="login">
                        {errorMessage}
                 
                            <div className="field">
                                <div className="control">
                                    <input 
                                    className="input is-medium is-rounded" 
                                    type="text"
                                    placeholder="hello@example.com" 
                                    value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input 
                                    className="input is-medium is-rounded" 
                                    type="text"
                                    placeholder="**********" 
                                    value={userPassword}
                                    onChange={e => setUserPassword(e.target.value)} />
                                </div>
                            </div>
                        <br />
                            <button className="button is-block is-fullwidth is-primary is-medium is-rounded" onClick={login}>
                            Login
                            </button>
                            {isLoggedIn && <Redirect to="/" />}

                    </div>
                </div>
                </div>   
            </div>
        )
}

export default Login
