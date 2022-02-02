import "./Login.css"
import { auth, provider } from "./firebase"
import { login } from "./features/userSlice"
import { useDispatch } from "react-redux"
import { Button } from '@material-ui/core'

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {

        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <div className="login_container">
                <img alt="gmail_logo" src="https://drive.google.com/uc?export=download&id=1LvRaWDvcVanWVK39uCumA73TAnssOH6g" />

            </div>
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
