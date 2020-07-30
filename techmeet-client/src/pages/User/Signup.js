import React, {useState, useContext} from 'react'
import axios from 'axios'
import 'bulma'
import UserContext from "../../context/UserContext";

const Signup = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const { userContext, setUserContext } = useContext(UserContext);

    function signup() {
        if (userEmail && userPassword && userFirstName && userLastName && userPhone){
            axios.post(`https://shrouded-refuge-96179.herokuapp.com/auth/register`, {
                email: userEmail,
                password: userPassword,
                firstName: userFirstName,
                lastName: userLastName,
                phoneNumber: userPhone

            })
            .then((res) => {
                alert("Successfully created!")
                setUserContext({
                    token: res.data.token,
                    user: res.data.firstName,
                    _id: res.data._id
                });
            }) .catch((error) => {
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
                        <h1 className="title">Signup</h1>
                                
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
                                    <button className="button is-block is-fullwidth is-info is-medium is-rounded" onClick={signup} >
                                    Submit
                                    </button>
                        </div>
                    <div className="column is-4"></div>                    
            </div>
        </div>
        )
    }


export default Signup
