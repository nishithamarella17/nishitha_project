import React,{ useState, useEffect }from 'react'
import './style.css'
import { useDispatch } from "react-redux";
import { userLogin } from '../actions/dashBoardAction';
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

const Login = (props) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = props
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userLogin())
    }, [])
    
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting Name ${mail} ${password}`)
        console.log(user)
        console.log(mail, user.username, password , user.password)
        if(mail === user.username && password === user.password){
          props.history.push('/dashBoard')
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Invalid Email or Password',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return(
        <div className="limiter">
		<div className="container-login">
			<div className="wrap-login">
				<form onSubmit={handleSubmit} className="login-form">
					<span className="login-form-title">
						Welcome
					</span>

					<div className="wrap-input" >
						<input className="input" type="text" value={mail} onChange={e => setMail(e.target.value)} />
						<span className="focus-input" data-placeholder="Email"></span>
					</div>

					<div className="wrap-input" data-validate="Enter password">
						<input className="input" type="password" name="pass" value={password} onChange={e => setPassword(e.target.value)}/>
						<span className="focus-input" data-placeholder="Password"></span>
					</div>

					<button type="submit" className="login-button">
                        Login
                    </button>
				</form>
			</div>
		</div>
	</div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user,
  })

export default connect(mapStateToProps)(Login)