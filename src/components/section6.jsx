import React from 'react'
import { Product1 } from "./product1"
import { Product2 } from "./product2"
import { Product3 } from "./product3"
import { Product4 } from "./product4"
import { Product5 } from './product5'
import { Product6 } from './product6'
import { Product7 } from './product7'
import { Product8 } from './product8'
const Section6 = () => {
  return (
    <>
     <center>
            <h1 className="m-4">ALL PRODUCTS</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, harum.</p>
         </center>
        <div className="container-fluid">
            <div className="row shop">
                
<Product1 price="$250"/>
<Product2 price="$250"/>
<Product3 price="$250"/>
<Product4 price="$250"/>



            </div>
            </div>
            <div className="container-fluid">
            <div className="row shop">
<Product5 price="$250"/>
<Product6 price="$250"/>
<Product7 price="$250"/>
<Product8 price="$250"/>

            </div>
            </div>
    
    </>
  )
}

export  {Section6}