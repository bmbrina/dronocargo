import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import * as Routes from './routes'

const App = () => (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/shipments" component={Routes.Shipments} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )

export default App

