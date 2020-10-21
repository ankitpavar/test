import React,{useState} from 'react'
import Total from './Total'

const Home = ({products}) => {

    const [qty, setQty] = useState(0);

    return (
        <>
           <table className="table">
               <thead>
               <tr>
                   <th>#</th>
                   <th>Product</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Amount</th>

               </tr>
               </thead>
               <tbody>
                   {products.map((product) => (
                       <tr key={product.id}>
                           <td>{product.id}</td>
                           <td>{product.product}</td>
                           <td>{product.price}</td>
                           <td><input type="text" onChange={(event) => setQty(event.target.value)}/></td>
                   <td>{product.price * qty}</td>
                       </tr>
                   ))}
               </tbody>
               </table> 
                    <Total total={products.reduce((acc,item) => acc + item.price * qty, 0)} />
        </>
    )
                   }


export default Home
