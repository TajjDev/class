import React from "react";
import "./App.css"
// import Product from "./components/Products";
// import image1 from "./assets/one.jpg"
// import image2 from "./assets/two.jpg"
// import image3 from "./assets/three.jpg"
// import image4 from "./assets/four.jpg"
import image1 from "/src/assets/one.jpg"
import image2 from "/src/assets/two.jpg"
import image3 from "/src/assets/three.jpg"
import image4 from "/src/assets/four.jpg"

import Products from "/Users/Tajudeen/Documents/conditional rendering/src/components/Class";
import Product from "./components/Products";

export default function OnlineStore(){
  const products = [
    {   ProductImg:image1,
        ProductName:"XIAOMI Redmi 13C",
        ProductPrice:'125,150',
        ProductOldPrice:`140,000`
        
    },
    {   ProductImg:image2,
        ProductName:"XIAOMI Redmi 13C",
        ProductPrice:'125,150',
        ProductOldPrice:"235,000"
    },
    {   ProductImg:image3,
        ProductName:"XIAOMI Redmi 13C",
        ProductPrice:'125,150',
        ProductOldPrice:"838,765"
    },
    {   ProductImg:image4,
        ProductName:"XIAOMI Redmi 13C",
        ProductPrice:'125,150',
        ProductOldPrice:"400,000"
    }
]
  return(
    <>
    
    <h2>PRODUCT ON SALE</h2>
    {/* <div className="wrap">
    {/* <h3>List of attendee</h3>
    <ol>
     {collection.map((list,index)=> {return(
      
        <li key={index}>{list}</li>

      )})}
      </ol> */}
      {/* <Product href={ "https://www.jumia.com.ng/xiaomi-redmi-13c-6.74-4gb-ram128gb-rom-android-12-blue-269352795.html"} src={image1} old={"140,000"} text={"XIAOMI Redmi 13C"} h={"125,150"}></Product>
      <Product href={"https://www.jumia.com.ng/xiaomi-redmi-12-6.79-8gb-ram256-gb-rom-android-13-midnight-black-253241413.html"} src={image2} old={"235,000"} text={"XIAOMI Redmi 12"} h={"214,400"}></Product>
      <Product href={"https://www.jumia.com.ng/apple-iphone-13-6.1-4gb-ram-128gb-rom-ios-15-black-279353643.html"} src={image3} old={"838,765"} text={"Apple ihone 13"} h={"698,970"}></Product>
      <Product href={"https://www.jumia.com.ng/samsung-galaxy-a05-6.7-4gb-ram64gb-rom-android-13-black-290189086.html"} src={image4} old={"400,000"} text={"Samsung Galaxy A05"} h={"118,000"}></Product>
      </div>
       */} 
       <div className="wrap">
       {
        
        products.map((product,index)=>{
          return(
            <div>
            <Products key={index}  src={product.ProductImg} price={product.ProductPrice} productName={product.ProductName} oldPrice={product.ProductOldPrice}/>
            </div>
          )
        })
       }
       </div>
    </>
  )
}