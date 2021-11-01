import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import * as Routes from './routes'

const App = () => (
    <div className="App">
      <BrowserRouter basename="/dronocargo">
        <Header />
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/shipments"/>
          )}/>
          <Route exact path="/shipments" component={Routes.Shipments} />
          <Route path="/shipment/:id" component={Routes.ShipmentDetails} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )

export default App

