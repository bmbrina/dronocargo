import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Routes from './routes'

const App = () => (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/shipments" component={Routes.Shipments} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )

export default App

