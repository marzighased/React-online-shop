import React, { Component } from 'react'
import Navbar from './components/navbar'
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = { 
        items: []
    } 

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        
        let existingItem = this.state.items.find(item => item.name == name);
        if(existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount,
                name,
                price
            });
        }    
        this.setState({ items: currentItems})
    }

    render() { 
        return <React.Fragment>
                   <Navbar/>
                   <div className='main-container'>
                        <div className='product-container'>
                            <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} image="tomatos.jpg" title="Tomaten" description="Füge Tomaten zu deinem Warenkorb hin."/>
                            <Product onAdd={() => this.addItem(1, 'Gurken', 1.99)} image="cucumbers.jpg" title="Gurken" description="Füge Gurken zu deinem Warenkorb hin."/>
                            <Product onAdd={() => this.addItem(1, 'Äpfel', 3.99)} image="apples.jpg" title="Äpfel"  description="Füge Äpfel zu deinem Warenkorb hin."/>
                            <Product onAdd={() => this.addItem(1, 'Birnen', 4.99)} image="birne.jpg" title="Birnen"  description="Füge Birne zu deinem Warenkorb hin."/>
                        </div>
                        <ShoppingCart items={this.state.items}/>
                   </div>
               </React.Fragment>;
    }
}
 
export default App;