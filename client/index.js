import { render } from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from 'Component/App'
import TodoContainer from 'Container/TodoContainer'
import LoginContainer from 'Container/LoginContainer'
import RegisterContainer from 'Container/RegisterContainer'

const Apps = () => {
  return (
    <Router>
      <App>
        <Route exact path="/" component={TodoContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
      </App>
    </Router>
  )
}

render(<Apps />, document.getElementById('app-container'))
