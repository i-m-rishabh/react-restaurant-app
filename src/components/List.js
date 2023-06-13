import Table from './Table.js';

const List = (props) => {
    let table1 = props.orders.filter((order)=>{
        return order.table==='table1';
    });
    let table2 = props.orders.filter((order)=>{
        return order.table==='table2';
    });

    let table3 = props.orders.filter((order)=>{
        return order.table==='table3';
    });
    function handleDelete(id){
        props.onDelete(id);
    }
    return(
        <>
            <Table orders={table1} table='table 1' onDelete={handleDelete}/>
            <Table orders={table2} table='table 2' onDelete={handleDelete}/>
            <Table orders={table3} table='table 3' onDelete={handleDelete}/>
        </>
    )
}

export default List;