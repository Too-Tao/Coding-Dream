// content api 共享状态机制
// react-redux 基于它
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './context'
import Header from './Header'

class App extends Component {
  render(){
    return(
      <Provider value={{title: 'React In Patterns'}}>
        <Header />
      </Provider>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))