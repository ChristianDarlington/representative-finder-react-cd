import {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../config'

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUpUser = (e) => {
        e.preventDefault()
        console.log('signing up....')
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log(response.user))
      .catch(err => alert(err.message))
    }

    return(
        <div className="sign-up-container">
            <h1>Sign Up</h1>
            <form onSubmit={(e) => signUpUser(e)}>
                <label className="form-label">
                    Email:&nbsp;
                    <input
                        name="email"
                        type="text"
                        className="form-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <label className="form-label">
                    Password:&nbsp;
                    <input
                        name="password"
                        type="password"
                        className="form-input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button
                    className="submit-btn"
                    type="submit"
                >   
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default SignUp