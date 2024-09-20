import React from 'react';
import "./Header.css"
import {Link, NavLink} from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { useDispatch} from "react-redux";
import {changeCategory} from "../store/slices/CategorySlice";
import {clearItems} from "../store/slices/ItemSlice"

export default function Header() {

    // const categories = ["mens", "womens", "items", "items", "items", "items"]
    const dispatch = useDispatch();
    
    const handleClickItem = () => {
        dispatch(clearItems());
        dispatch(changeCategory("items"));
    }

    const handleClickMen = () => {
        dispatch(clearItems());
        dispatch(changeCategory("mens"));
    }

    const handleClickWomen = () => {
        dispatch(clearItems());
        dispatch(changeCategory("womens"));
    }
    
    return (
        <>
            <header>
                <div className="logo_container">
                    <Link to="/shop/items" onClick={handleClickItem}><img className="myntra_home" src="/my_fashion_store_logo.svg" alt="Myntra Home" /></Link>
                </div>
                <div className="nav_bar">
                    <NavLink to="/shop/mens" className={(e) => {return e.isActive ? "red" : "c1"}} onClick={handleClickMen}>Men</NavLink>
                    <NavLink to="/shop/womens" className={(e) => {return e.isActive ? "red" : "c1"}} onClick={handleClickWomen}>Women</NavLink>
                    <NavLink to="/shop/items" className={(e) => {return e.isActive ? "red" : "c1"}} onClick={handleClickItem}>Kids</NavLink>
                    <NavLink to="/shop/items" className={(e) => {return e.isActive ? "red" : "c1"}} onClick={handleClickItem}>Home & Living</NavLink>
                    <NavLink to="/shop/items" className={(e) => {return e.isActive ? "red" : "c1"}} onClick={handleClickItem}>Beauty</NavLink>
                    <NavLink to="/shop/items" className={(e) => {return e.isActive ? "red" : "c1"}} onClick={handleClickItem}>Studio <sup>New</sup></NavLink>
                </div>
                <div className="search_bar">
                    <input className="search_input" placeholder="Search for products, brands and more" />
                </div>
                <div className="action_bar">
                    <a className="action_container" href='#'>
                        <IoPerson />
                        <span className="action_name">Profile</span>
                    </a>

                    <a className="action_container" href='#'>
                        <BsEmojiHeartEyesFill />
                        <span className="action_name">Wishlist</span>
                    </a>

                    <a className="action_container" href="/shop/bag">
                        <sup className="bag-item-count">0</sup><HiMiniShoppingBag />
                        <span className="action_name">Bag </span>
                    </a>
                </div>
            </header>

        </>
    )
}
