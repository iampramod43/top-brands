import React, { useEffect, useState } from 'react'
import db from './firebase'
function ProductList() {


    const [items, setItems] = useState([]);

    useEffect(() => {
        db.collection('items').onSnapshot(snapshot => {
            setItems(snapshot.docs.map((doc) => (
              {
                id: doc.id,
                data: doc.data(),
              }
            )));
          });
    }, []);

    return (
        <div className="productList">
            {items.map((item) => (
        <div className="item">

          <h1>{item.data.title}</h1>
          <h2>{item.data.description}</h2>
          <img src={item.data.imageUrl} alt=""/>
        </div>
      ))}
        </div>
    )
}

export default ProductList
