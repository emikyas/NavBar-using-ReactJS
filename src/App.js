import './App.css';
import React, { Component } from 'react';

import Home from './components/home';
import Posts from './components/posts';
import NavBar from './components/navBar';
import Products from './components/products';
import NotFound from './components/notFound';
import ProductForm from './components/productForm';
import ProductDetails from './components/productDetails';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  
  
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        <div className="content">
          <Switch>

            <Route path="/posts" component={Posts} />
            <Route path="/products/:id" component={ProductForm} />
            <Route path="/products" component={Products} />
            <Route path="/" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />

          </Switch>
        </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
