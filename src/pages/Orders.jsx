import React from 'react'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'
import orders from '../assets/JsonData/orders.json'



const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Orders = () => {
  return (
    <div>
            <h2 className="page-header">
                Orders
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                        <Table
                                limit='10'
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={orders}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Orders;