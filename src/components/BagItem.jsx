import React from 'react';
import "./BagItem.css";

export default function BagItem() {
    const products = [
        {
        id: '002',
        image: './public/2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24
        }},

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},
        ,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},,

        {
            id: '002',
            image: './public/2.jpg',
            company: 'CUKOO',
            item_name: 'Women Padded Halter Neck Swimming Dress',
            original_price: 2599,
            current_price: 1507,
            discount_percentage: 42,
            return_period: 14,
            delivery_date: '10 Oct 2023',
            rating: {
                stars: 4.3,
                count: 24
        }},
      ];

      
    return (
        <>
        {products.map((item) => (

            <div className="bag-item-container">
                <div className="item-left-part">
                    <img className="bag-item-img" src={item.image} />
                </div>
                <div className="item-right-part">
                    <span className="company-name cc">{item.company}</span>
                    <span className="item-name cc">{item.item_name}</span>
                    <div className="price-container cc">
                        <span className="current-price">Rs. {item.current_price}</span>
                        <span className="original-price">Rs. {item.original_price}</span>
                        <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
                    </div>
                    <div className="return-period cc">
                        <span className="return-period-days">{item.return_period} days</span> return available
                    </div>
                    <div className="delivery-details cc">
                        Delivery by
                        <span className="delivery-details-days">{item.delivery_date}</span>
                    </div>
                </div>

                <div className="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
            </div>
        ))}
        </>
    )
}
