import { useContext, useEffect, useState } from "react"
import { cartProvider } from "../App"

export default function TotalPrice() {
    const {cartItems} =  useContext(cartProvider);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const res = cartItems.reduce((a, b) => {
            return (b.price * b.quantity) + a
        }, 0)
        setTotalPrice(res)
    }, [cartItems])


    return (
        <div style={{display:"flex", flexDirection:"column", padding:"10px", width:"30%", height:"100%"}} >
            <div style={{fontSize:"14px", color:"#000"}} >Order Summary</div>
            <div style={{marginTop:"10px", background:"rgb(240 240 240)", height:"30%", overflow:"auto"}} >
                {
                    cartItems.map((items) => {
                        return (
                            <div style={{display:items.quantity === 0 ? "none" : "flex", alignItems:"center", justifyContent:"space-between", width:"100%", fontSize:"14px", color:"#000", margin:"10px 0px"}} >
                                <div>
                                    <span style={{fontSize:"12px", marginRight:"8px", fontWeight:900}} >{items.quantity}x</span>
                                    <span style={{textTransform:"capitalize", fontWeight:500}} >{items.title}</span>
                                </div>
                                <div>${(items.quantity * items.price)}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{width:"100%", borderBottom:"1px solid lightgrey", height:"0px", margin:"20px 0px"}} ></div>
            <div style={{display:"flex", flexDirection:"column"}} >
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" }} >
                    <span style={{fontSize:"14px", color:"#000", fontWeight:800}} >PRODUCTS TOTAL PRICE:</span>
                    <span style={{fontSize:"14px", color:"#000", fontWeight:800}} >${totalPrice} /-</span>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" }} >
                    <span style={{fontSize:"14px", color:"#000", fontWeight:800}} >TAX:</span>
                    <span style={{fontSize:"14px", color:"#000", fontWeight:800}} >$5 /-</span>
                </div>
            </div>
            <div style={{width:"100%", borderBottom:"1px solid lightgrey", height:"0px", margin:"20px 0px"}} ></div>
            <div style={{display:"flex", flexDirection:"column"}} >
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between" }} >
                    <span style={{fontSize:"20px", color:"#000", fontWeight:800}} >ORDER TOTAL:</span>
                    <span style={{fontSize:"20px", color:"#000", fontWeight:800}} >$ {totalPrice + 5} /-</span>
                </div>
            </div>
            <div style={{width:"100%", borderBottom:"1px solid lightgrey", height:"0px", margin:"20px 0px"}} ></div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center", width:"100%", overflow:"hidden"}} >
               <input style={{height:"35px", width:"100%", background:"rgb(232 232 232)", border:"1px solid lightgrey", padding:"5px", color:"#000"}} placeholder="ADD COUPON CODE HERE..." />
               <button style={{marginTop:"10px", height:"50px", width:"100%", background:"#ffb732", border:"1px solid #ffb732", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff"}} >CHECKOUT</button>
            </div>
        </div>
    )
}