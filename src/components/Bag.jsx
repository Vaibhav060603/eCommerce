import React from 'react'
import "./Bag.css";
import Footer from './Footer';
import Header from './Header';
import BagSummary from './BagSummary';
import BagItem from './BagItem';

export default function Bag({item}) {
    return (
        <>
        <div id='id-whole-bag'>

            <div className='bag-items-container'>
              <BagItem />
            </div>

            <div className='bag-summary-container'>
              <BagSummary />
            </div>
        </div>





        
            

        </>
    )
}
