import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/shared/Layout';
import Products from './components/Products/Products';
import RecentOrders from './components/RecentOrders'; 
import products from './db/data';
import TransactionChart from './components/TransactionChart';
import Detail from './components/Products/Detail';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState(''); 

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ newPrice, company }) => {
          if (selected === "0-50") return newPrice >= 0 && newPrice <= 50;
          if (selected === "50-100") return newPrice > 50 && newPrice <= 100;
          if (selected === "100-150") return newPrice > 100 && newPrice <= 150;
          if (selected === "150+") return newPrice > 150;
          return company === selected;
        }
      );
    }

    return filteredProducts;
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout query={query} handleSearch={handleSearch} />}>
          <Route index element={<Dashboard />} />
          <Route
            path="products"
            element={
              <Products
                result={result}
                handleChange={handleChange}
                handleClick={handleClick}
              />
            }
          />

          <Route path="products/:slug" element={<Detail />} />


          <Route path="orders" element={<RecentOrders />} />
          <Route path="transactions" element={<TransactionChart />} />
        </Route>
        <Route path="login" element={<div>this is login page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
