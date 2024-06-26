import  { ReactElement, useCallback, useState } from 'react'

import { Column } from 'react-table'
import { Link } from 'react-router-dom'
import TableHoc from '../../components/admin/TableHoc'
import AdminSide from '../../components/admin/adminSide'
interface DataType{
  user : string,
  amount :number,
  discount : number,
  quantity : number,
  status: ReactElement,
  action : ReactElement
}
const columns:Column<DataType>[]=[{
  Header:"User",
  accessor:"user"  
},
{
  Header:"Amount",
  accessor:"amount"
},
{
  Header:"Discount",
  accessor:"discount"
},
{
  Header:"Quantity",
  accessor:"quantity"
},
{
  Header:"Status",
  accessor:"status"
},
{
  Header:"Action",
  accessor:"action"
}]
const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
  },
];
const Transaction = () => {
  const [data] =  useState(arr)
  const Table = useCallback(
  TableHoc<DataType>(columns,data,"dashboardProductTable","Transaction",true)
  ,[])
  return (
    <div className='adminContainer'>
        <AdminSide/>
        <main>{Table()}</main>
    </div>
  )
}

export default Transaction