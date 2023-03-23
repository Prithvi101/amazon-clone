import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; function Header() {
    return (
        <div className='header'>
            <img
                className="header__logo"
                src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695' />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" ></SearchIcon>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__option1">Hello Guest</span>
                    <span className="header__option2">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__option1">Return</span>
                    <span className="header__option2">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__option1">Your</span>
                    <span className="header__option2">Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCartIcon></ShoppingCartIcon>
                    <span className="header__option1 header__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header