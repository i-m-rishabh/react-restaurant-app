import { useState } from "react";

const Form = (props) => {
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [dish, setDish] = useState('');
    const [table, setTable] = useState('table1');
    
    function submitHandler(e){
        e.preventDefault();
        // console.log(id,price,dish,table);
        props.onAddOrder(id,price,dish,table);
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="orderId">order id</label>
                <input type="number" name="" id="orderId" 
                    onChange={(e)=>{setId(e.target.value)}}
                />

                <label htmlFor="orderPrice">order Price</label>
                <input type="number" name="" id="orderPrice" 
                    onChange={(e)=>{setPrice(e.target.value)}}
                />

                <label htmlFor="orderDish">order dish</label>
                <input type="text" name="" id="orderDish" 
                    onChange={(e)=>{setDish(e.target.value)}}
                />

                <label htmlFor="orderTable">chose table</label>
                <select name="" id="orderTable"
                    onChange={(e)=>{setTable(e.target.value)}}
                >
                    <option value="table1">table 1</option>
                    <option value="table2">table 2</option>
                    <option value="table3">table 3</option>
                </select>

                <button type="submit">add order</button>
            </form>
        </>
    );
}

export default Form;