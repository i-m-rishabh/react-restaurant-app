
const Table = (props) => {

    return (
        <>
            <h3>{props.table}</h3>
            <ul>
                {
                    props.orders.map((order) => {
                        return (
                            <>
                                <li>
                                    {`${order.price} ${order.dish} ${order.table}`}
                                </li>
                                <button onClick={()=>{props.onDelete(order.id)}}>delete</button>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Table;