import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        console.log('You clicked submit')
    }

    
    return ( 
        <div className="login-container">
            <div className="header">
                Don't have an account yet? 
                <button>
                    <Link to="/signup" className='link'>Sign up</Link>
                    </button>
                <Link to="/support" className='support'>Need help?</Link>
            </div>
            <div className="title col-2 mx-auto">
                Typeform
            </div>
            <div className="welcome col-2 mx-auto">
                Hello, who’s this?
            </div>
            <div className="content-form col-2 mx-auto">
                <div className='form-group'>
                        <label>Email</label>
                        <input 
                            type="email" 
                            className='form-control' 
                            placeholder="name@example.com" 
                            value={email} 
                            onChange={(event) => setEmail(event.target.value)} 
                        />
                </div>
                <div className='form-group'>
                        <label>Password</label>
                        <input 
                            type="password" 
                            className='form-control' 
                            placeholder="At least a 8 characters" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                </div>
                <Link to="/sign-up" className="forgot-password">Forget password?</Link>
                <div>
                    <button 
                    className='btn-submit' 
                    type='submit' 
                    onClick={(event)=> handleLogin(event)}>Log in to Typeform</button>
                </div>
                <div className='divider'>OR</div>
                <div>
                    <button className='btn-submit gmail '>Log in with Google</button>
                </div>
                <div>
                    <button className='btn-submit microsoft'>Log in with Microsoft</button>
                </div>
            </div>
        </div>
    );
}

export default Login;