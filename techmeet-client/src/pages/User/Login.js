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
                console.log(userContext)
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
                <div className="columns is-mobile">
                    <div className="column is-4"></div>
                        <div className="column is-4 has-text-centered mt-6">
                        
                        {errorMessage}
                        <h1 className="title">Login</h1>
                 
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
                            <button className="button is-block is-fullwidth is-info is-medium is-rounded" onClick={login}>
                                Submit
                            </button>
                            {isLoggedIn && <Redirect to="/" />}
                        </div>
                    <div className="column is-4"></div>                    
            </div>
        </div>
        )
}

export default Login
