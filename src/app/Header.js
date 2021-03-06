import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="data:image/jpeg;base64,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" alt=""/>
            </div>
            <div className="header__right">
                <p>Products</p>
                <p>Wishlist</p>
                <p>cart</p>
                <p>Avatar</p>
            </div>
        </div>
    )
}

export default Header
