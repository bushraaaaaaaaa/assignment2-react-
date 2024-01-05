import { Product1 } from "./product1"
import { Product2 } from "./product2"
import { Product3 } from "./product3"
import { Product4 } from "./product4"

const Section4=()=>{
    return(
        <>
      <center>
            <h1 className="m-4">BEST SELL</h1>
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
             

 

        
        </>
    
    )
}
export {Section4}