import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbars/Header';
import Home from './pages/Home';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DetailProduct from './pages/DetailProduct'
import CartPage from './pages/CartPage'
import NotFound from './pages/NotFound'

import { Container, Row } from 'react-bootstrap'
import dataUser from './data/datauser.json'
import DataProduct from './data/DataProduct'
import dataTopping from './data/topping.json'
import dataTransaction from './data/transaction.json'
import AdminRoute from './components/routes/AdminRoute'
import PrivateRoute from './components/routes/PrivateRoute'
import Profile from './pages/Profile'
import AddProduct from './pages/AddProduct'
import AddTopping from './pages/AddTopping'
import Transactions from './pages/Transactions'
import moduleName from './data/transaction.json'

function App() {
  localStorage.setItem('dataUser', JSON.stringify(dataUser));
  localStorage.setItem('DataProduct', JSON.stringify(DataProduct));
  localStorage.setItem('dataTopping', JSON.stringify(dataTopping));
  localStorage.setItem('dataTransaction', JSON.stringify(dataTransaction));
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Row className='justify-content-md-center' >
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path='/product/:id' exact component={DetailProduct} />
              <PrivateRoute path='/cart' exact component={CartPage} />
              <PrivateRoute path='/profile' exact component={Profile} />

              <AdminRoute path='/addproduct' exact component={AddProduct} />
              <AdminRoute path='/addtopping' exact component={AddTopping} />
              <AdminRoute path='/transaction' exact component={Transactions} />

              <Route component={NotFound} />
            </Switch>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
