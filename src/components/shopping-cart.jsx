import React, { Component } from 'react'

class ShoppingCart extends Component {
    state = { 
        items: [
            {
                amount: 1,
                name: 'Tomaten',
                price: 2.9
            },
            {
                amount: 1,
                name: 'Äpfel',
                price: 4.9
            }
        ]
    }

    render() { 
        return <div className='shopping-cart'>
            <h2>Warenkorb</h2>
            { this.state.items.map(item => <div key={item.name}>{ item.amount }x { item.name } { item.price }€</div>)}
        </div>;
    }
}
 
export default ShoppingCart;