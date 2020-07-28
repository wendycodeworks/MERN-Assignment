import React, {useState} from 'react'
import axios from 'axios'
import 'bulma'

const Login = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    function login() {
        if (userEmail && userPassword){
            axios.post(`https://shrouded-refuge-96179.herokuapp.com/auth/login`, {
                email: userEmail,
                password: userPassword
            })
            .then((res) => {
              console.log(res)
            }) .catch((error) => {
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
                    <form>
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
                            <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit" onClick={login}>
                            Login
                            </button>
                    </form>
                    
                    </div>
                </div>
                </div>   
            </div>
        )
}

export default Login