import "./HomeItems.css"
import { useSelector, useDispatch } from "react-redux";
import React, { useState,useEffect } from 'react';
import { fetchItems } from '../store/slices/ItemSlice';



export default function HomeItems() {

    const dispatch = useDispatch();                                                          //4.
    const { data, isLoading, isError } = useSelector((state) => state.items);                //5.
    const category = useSelector((state) => state.currentCategory.category)


    useEffect(() => {                                                                        //6.
        console.log("Selected category:", category);
        if (isLoading === false && isError === false && data.length === 0) {
            dispatch(fetchItems(category));
        }
    }, [isLoading, isError, data, dispatch, category]);


    const [products, setProducts] = useState([]);                                            //7.


    useEffect(() => {                                                                        //8.
        if (isLoading === false && isError === false && data.length > 0) {
          setProducts(data);
        }
      }, [data, isLoading, isError]);

      

    return (
        <>


            <div id='main_content'>
                <center>
                    {products.map((item) => (
                        <div className="item-container" key={item.id}>
                            <img className="item-image" src={item.image} alt="item image" />
                            <div className="rating">
                                {item.rating.stars} ⭐ | {item.rating.count}
                            </div>
                            <div className="company-name">{item.company}</div>
                            <div className="item-name">{item.item_name}</div>
                            <div className="price">
                                <span className="current-price">Rs {item.current_price}</span>
                                <span className="original-price">Rs {item.original_price}</span>
                                <span className="discount">({item.discount_percentage}% OFF)</span>
                            </div>
                            <button className="btn-add-bag" onClick={() => console.log("add to bag button")}>Add to Bag</button>
                        </div>
                    ))}

                </center>

            </div>
        </>
    )
}
