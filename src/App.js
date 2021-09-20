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
import AdminRoute from './components/routes/AdminRoute'
import PrivateRoute from './components/routes/PrivateRoute'
import Profile from './pages/Profile'
import AddProduct from './pages/AddProduct'
import AddTopping from './pages/AddTopping'

function App() {
  localStorage.setItem('dataUser', JSON.stringify(dataUser));
  localStorage.setItem('DataProduct', JSON.stringify(DataProduct));
  localStorage.setItem('dataTopping', JSON.stringify(dataTopping));
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Row className='justify-content-md-center' >
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path='/product' exact component={DetailProduct} />
              <PrivateRoute path='/cartpage' exact component={CartPage} />
              <PrivateRoute path='/profile' exact component={Profile} />

              <AdminRoute path='/addproduct' exact component={AddProduct} />
              <AdminRoute path='/addtopping' exact component={AddTopping} />

              <Route component={NotFound} />
            </Switch>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
