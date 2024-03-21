import image1 from "/src/assets/one.jpg"
import image2 from "/src/assets/two.jpg"
import image3 from "/src/assets/three.jpg"
import image4 from "/src/assets/four.jpg"



export default function Products({src,productName,price,oldPrice}){
    
    // const products = [
    //     {   ProductImg:<img src={image1}></img>,
    //         ProductName:"XIAOMI Redmi 13C",
    //         ProductPrice:'125,150',
    //         ProductOldPrice:"140,000"
            
    //     },
    //     {   ProductImg:<img src={image2}></img>,
    //         ProductName:"XIAOMI Redmi 13C",
    //         ProductPrice:'125,150',
    //         ProductOldPrice:"235,000"
    //     },
    //     {   ProductImg:<img src={image3}></img>,
    //         ProductName:"XIAOMI Redmi 13C",
    //         ProductPrice:'125,150',
    //         ProductOldPrice:"838,765"
    //     },
    //     {   ProductImg:<img src={image4}></img>,
    //         ProductName:"XIAOMI Redmi 13C",
    //         ProductPrice:'125,150',
    //         ProductOldPrice:"400,000"
    //     }
    // ]
    return(
        <>
        {/* <div className="wrap">
        {products.map((product,index)=>{
           return <div className="eachWrap1" key={index}> {product.ProductImg} <p>{product.ProductName}</p> <h5>#{product.ProductPrice} </h5> <h6><s>{product.ProductOldPrice}</s></h6>  </div> 
        })}
        </div> */}
        <a href="">
        <div className="eachWrap1">
            <img src={src} alt="" />
            <p>{productName}</p>
            <h5>#{price}</h5>
            <h6><s>#{oldPrice}</s></h6>
        </div>
        </a>
        </>
    )
}