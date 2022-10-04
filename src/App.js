import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Switch from 'react-router-dom';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
  
const App = () => {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productid" exact element={<ProductDetail />} />
          <Route path="*">Not Found 404</Route>
      </Routes>
      </Router>
    </div>
  )
}
export default App