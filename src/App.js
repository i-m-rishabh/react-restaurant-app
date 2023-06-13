import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import List from './components/List.js';

function App() {
  const [orders, setOrders] = useState(localStorage.getItem('orders') ? [...(JSON.parse(localStorage.getItem('orders')))] : []);

  useEffect(()=>{
    localStorage.setItem('orders', JSON.stringify(orders));
  },[orders]);

  function handleAddOrer(id,price,dish,table){
    setOrders((orders)=>{
      return [
        ...orders,
        {
          id: id,
          price: price,
          dish: dish,
          table: table
        }
      ]
    })
  }
  function handleDelete(id){
    setOrders((orders)=>{
      return(
        orders.filter((order)=>{
        return order.id!==id;
      })
      )
      
    })
  }
  console.log(orders);
  return (
    <>
      <Form onAddOrder={handleAddOrer}/>
      <List orders={orders} onDelete={handleDelete}/>
    </>
  );
}

export default App;
