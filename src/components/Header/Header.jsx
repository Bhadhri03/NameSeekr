import React from 'react';
import './Header.css';

function Header(props){

    return (
    <div className='head-container'> 
    <img src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png'
         alt='header-img' className={`head-img ${ props.isEx? 'head-img-expanded':'head-img-contracted'}`} />
    <h1 className={`head-text ${ props.isEx? 'head-text-expanded':'head-text-contracted'}`}>Name Seekr!</h1>  
    </div>
    );
}
export default Header;