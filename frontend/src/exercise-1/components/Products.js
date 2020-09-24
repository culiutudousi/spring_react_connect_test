import React from 'react';
import { Link, Route, Router, Switch, useParams } from 'react-router-dom';

const data = {
  "bicycle": {
    "id": 1,
    "name": "Bicycle",
    "price": 30,
    "quantity": 15,
    "desc": "Bicycle is Good"
  },
  "TV": {
    "id": 2,
    "name": "TV",
    "price": 40,
    "quantity": 16,
    "desc": "TV is good"
  },
  "pencil": {
    "id": 3,
    "name": "Pencil",
    "price": 50,
    "quantity": 17,
    "desc": "Pencil is good"
  }
};

const Products = () => (
  <div>
    <Switch>
      <Route exact path="/products" children={<ProductList />} />
      <Route exact path="/goods" children={<ProductList />} />
      <Route path="/products/:id" children={<Product />} />
    </Switch>
  </div>
);

const ProductList = () => {
  return (
    <div>
      <h3>All Products:</h3>
      {Object.values(data).map(product => (
        <p key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </p>
      ))}
    </div>
  );
};

const Product = () => {
  let { id } = useParams();
  console.log(id);
  let product = Object.values(data).filter(p => p.id == id)[0];
  console.log(product);

  return (
    <div>
      <h3>Product Details:</h3>
      <p>Name: {product.name}</p>
      <p>URL: /products/{product.id}</p>
    </div>
  );
};

export default Products;
