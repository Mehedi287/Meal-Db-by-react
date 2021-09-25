import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        < >
            <div >
                <h1 className="title">Well come to Our resturent</h1>
            </div>
            <div className="serch-container">
                <input onChange={props.haldelSerch} type="text" placeholder="serch-meal" name="" id="" />
                <button >serch</button>
            </div>
        </>

    );
};

export default Header;