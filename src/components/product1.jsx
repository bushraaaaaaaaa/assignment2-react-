import React from 'react'

const Product1 = (props) => {
  return (
    <>
<div className="col">
            <img src="https://template.hasthemes.com/daxone/daxone/assets/images/product/pro-hm1-1.jpg" className="img-fluid" alt="" />
            <div className="section4b">
 <p className="text-secondary">chair</p>
<a href="">Golden Easy spot chair</a>
<p>{props.price}</p>
                </div>
                </div>
    </>
  )
}

export  {Product1}