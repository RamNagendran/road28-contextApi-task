import { createContext, useEffect, useState } from 'react'
import CartPage from './cartPage';

export const cartProvider = createContext();


function App() {
  const [cartItems, setCartItems] = useState([
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2020/02/iphone-9-concept-1582009239.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://images-cdn.ubuy.co.in/646fa80aa41d0f16c4001881-new-in-sealed-box-apple-iphone-x-256gb.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.png?height=474&width=711&fit=bounds",
      "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://image.oppo.com/content/dam/oppo/product-asset-library/specs/beta/f19-black-blue-sliver-1920.png",
      "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://m.media-amazon.com/images/I/61jJeZBliWL._AC_UF894,1000_QL80_DpWeblab_.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
    }
  ])

  function qtyIncrementer(id) {
    setCartItems(cartItems.map((items) => {
      if (items.id == id) {
        items.quantity++;
      }
      return items;
    }))
  }

  function qtyDecrementer(id) {
    setCartItems(cartItems.map((items) => {
      if (items.id == id) {
        items.quantity--;
      }
      return items;
    }))
  }



  return (
    <div style={{height:"90vh"}} >
      <div style={{ textAlign: "center", color: "#000", fontSize: "25px" }}>My Cart Page</div>
      <cartProvider.Provider value={{cartItems, incrementer: qtyIncrementer, decrementer: qtyDecrementer}}>
        <CartPage />
      </cartProvider.Provider>
    </div>
  )
}

export default App
