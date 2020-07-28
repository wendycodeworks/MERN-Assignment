import React, {useState} from 'react'
import axios from 'axios'
import 'bulma'

const Signup = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    function signup() {
        if (userEmail && userPassword && userFirstName && userLastName && userPhone){
            axios.post(`https://shrouded-refuge-96179.herokuapp.com/auth/register`, {
                email: userEmail,
                password: userPassword,
                firstName: userFirstName,
                lastName: userLastName,
                phone: userPhone

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
             <div className="column is-mobile is-centered">
                <div className="column is-half">
                    <div className="signup">
                        {errorMessage}
                        
                    <form>
                    <div className="field">
                                <div className="control">
                                    <input 
                                    className="input is-medium is-rounded" 
                                    type="text"
                                    placeholder="First Name" 
                                    value={userFirstName}
                                    onChange={e => setUserFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input 
                                    className="input is-medium is-rounded" 
                                    type="text"
                                    placeholder="Last Name" 
                                    value={userLastName}
                                    onChange={e => setUserLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input 
                                    className="input is-medium is-rounded" 
                                    type="text"
                                    placeholder="0400 000 000" 
                                    value={userPhone}
                                    onChange={e => setUserPhone(e.target.value)} />
                                </div>
                            </div>
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
                            <button className="button is-block is-fullwidth is-primary is-medium is-rounded" 
                                type="submit" 
                                onClick={signup}>
                            Submit
                            </button>
                    </form>
                    
                    </div>
                </div>
                </div>   
            </div>
        )
}

export default Signup