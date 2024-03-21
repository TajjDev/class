export default function Product({src,text,h,old,href}){
    return(
        <>
        <a href={href} target="child">
        <div className="eachWrap">
            <img src={src} alt="" />
            <p>{text}</p>
            <h5>#{h}</h5>
            <h6><s>#{old}</s></h6>
        </div>
        </a>
        </>
    )
}