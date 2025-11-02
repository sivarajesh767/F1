import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

const App=()=>{
    const [product, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakehttps://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.error('API error', err));},[]);
     
    return (
        <div className='app'>
            <Header/>
            <main>
                <Filters />
                    <ProductGrid products={products}/>
                
            </main>
            <Footer/>
        </div>
    )
  
    };
    export default App;
