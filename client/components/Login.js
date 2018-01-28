import { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="login-wrapper">
                        <div className="field">
                            <label htmlFor="" className="label">Email</label>
                            <div className="control">
                                <input type="text" className="input" placeholder="Type email" />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="" className="label">Password</label>
                            <div className="control">
                                <input type="text" className="input" placeholder="Type password" />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-warning">
                                    Login
                                </button>
                            </div>
                            <div className="control">
                                Dont have an account?
                                &nbsp;
                                <Link to="/register">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login