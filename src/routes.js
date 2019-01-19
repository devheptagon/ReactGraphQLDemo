import React from 'react'
import Home from './components/home/home'
import ProductList from './components/listing/product-list'
import { Route } from "react-router-dom"

export const Routes = <React.Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/product-list/:page" component={ProductList} />
</React.Fragment>