import { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-content">
                        <p className="title">
                            Membuat pokat kocok
                        </p>
                        <p className="subtitle">
                            - Andre Pratama -
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo