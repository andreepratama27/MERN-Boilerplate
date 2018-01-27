import { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="login-wrapper">
                        <div className="field">
                            <label htmlFor="" className="label">Name</label>
                            <div className="control">
                                <input type="text" className="input" placeholder="Type Name" />
                            </div>
                        </div>
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
                                    Register
                                </button>
                            </div>
                            <div className="control">
                                Already have an account?
                                &nbsp;
                                <Link to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register