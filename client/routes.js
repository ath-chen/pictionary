import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Learn, HomePage} from './components'

//COMPONENT
class Routes extends Component {
  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/learn" component={Learn} />
      </Switch>
    )
  }
}

export default Routes
