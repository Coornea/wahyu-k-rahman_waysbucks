import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navbars/Header'
// import Home from './pages/Home'
import './styles/styles.css';
import DetailProduct from './pages/DetailProduct'

function App() {
  return (
    <div className="App">
      <Header />
      <DetailProduct />
    </div>
  );
}

export default App;
