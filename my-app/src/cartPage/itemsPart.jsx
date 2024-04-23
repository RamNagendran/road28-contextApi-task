import React, { useContext } from "react";
import { cartProvider } from "../App";
import { Rating } from 'react-simple-star-rating'

export default function ItemsPart() {
    const { cartItems, incrementer, decrementer } = useContext(cartProvider);

    return (
        <div  style={{ padding: "25px", borderRight: "1px solid lightgrey", overflow: "auto", flexWrap: "wrap", width: "70%", height: "100%" }}>
            {
                cartItems.map((items, index) => {
                    return (
                        <div key={index} style={{ marginBottom: "30px", borderTop: "1px solid lightgrey", padding: "10px" }} className="d-flex flex-column align-items-start">
                            <div style={{ display: "flex" }} className="w-100" >
                                <img style={{ marginRight: "8px", borderRadius: "8px", border: "4px solid lightgrey", padding: "5px" }} src={items?.thumbnail} height={150} width={150} />
                                <div style={{ width: "100%" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
                                        <div>
                                            <span style={{ fontSize: "14px", fontWeight: 600, color: "lightgrey", marginRight: "5px" }}>BRAND:</span>
                                            <span style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}>{items?.brand}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: "14px", fontWeight: 600, color: "lightgrey", marginRight: "5px" }}>CATEGORY:</span>
                                            <span style={{ fontSize: "14px", fontWeight: 600, color: "#000", textTransform: "capitalize" }}>{items?.category}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: "14px", fontWeight: 600, color: "lightgrey", marginRight: "5px" }}>TITLE:</span>
                                        <span style={{ fontSize: "14px", fontWeight: 600, color: "#000", textTransform: "capitalize" }}>{items?.title}</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: "11px", fontWeight: 600, color: "lightgrey", marginRight: "5px" }}>DESCRIPTION:</span>
                                        <span className="text-truncate" style={{ fontSize: "11px", fontWeight: 500, color: "#b8b8b8" }}>{items?.description}</span>
                                    </div>
                                    <div >
                                        <span style={{ fontSize: "14px", fontWeight: 600, color: "lightgrey", marginRight: "5px" }}>RATINGS:</span>
                                        <Rating readonly initialValue={items.rating} size={20} allowFraction />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} >
                                        <span className="text-truncate" style={{ fontSize: "14px", fontWeight: 600, color: items.stock === 0 ? "red" : "green" }}>Only {items.stock} left...</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: "14px", fontWeight: 600, color: "lightgrey", marginRight: "5px" }}>PRICE:</span>
                                        <span style={{ fontSize: "14px", fontWeight: 600, color: "#000" }}>${items?.price} /-</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} >
                                        <button style={{ fontSize: "18px", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", cursor: !(items.quantity > 0) ? "not-allowed" : "pointer", height: "20px", width: "20px", background: "none", border: "1px solid #000" }} disabled={!(items.quantity > 0)} onClick={() => decrementer(items.id)} >-</button>
                                        <div style={{ margin: "0px 10px", border: "1px solid #000", height: "20px", width: "20px", fontSize: "14px", color: "#000", display: "flex", alignItems: "center", justifyContent: "center" }} >{items.quantity}</div>
                                        <button style={{ fontSize: "18px", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", height: "20px", width: "20px", background: "none", border: "1px solid #000" }} onClick={() => incrementer(items.id)} >+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}