import React from 'react';
const Header =()=>(
    <header className='header'>
        <div className='logo'>Brand</div>
        <nav className='nav'>
            <a href='/'>Home</a>
            <a href='/shop'>Shop</a>
            <a href='/about'>About</a>
        </nav>
        <input type="text" placeholder="search.." className='search-bar'/>


    </header>
)
export default Header;
