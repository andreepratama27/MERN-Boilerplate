import { Component } from 'react'
import { Link } from 'react-router-dom'
import style from 'Style/style.scss'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props

        return (
            <div className="apps-wrapper">
                <nav className="navbar is-warning">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            Personal Notes
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    { children }
                </div>
            </div>
        )
    }
}

export default App