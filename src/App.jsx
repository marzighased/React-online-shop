import React, { Component } from 'react'
import Navbar from './components/navbar'
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                   <Navbar/>
                   <div className='main-container'>
                        <div className='product-container'>
                            <Product onAdd={addItem(1, 'Tomaten', 2.99)} image="tomatos.jpg" title="Tomaten" description="Füge Tomaten zu deinem Warenkorb hin."/>
                            <Product image="cucumbers.jpg" title="Gurken" description="Füge Gurken zu deinem Warenkorb hin."/>
                            <Product image="apples.jpg" title="Äpfel"  description="Füge Äpfel zu deinem Warenkorb hin."/>
                            <Product image="birne.jpg" title="Birnen"  description="Füge Birne zu deinem Warenkorb hin."/>
                        </div>
                        <ShoppingCart/>
                   </div>
               </React.Fragment>;
    }
}
 
export default App;