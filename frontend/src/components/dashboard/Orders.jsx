import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { get_orders } from '../../store/reducers/orderReducer';

const Orders = () => {
    const [state, setState] = useState('all')
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const {userInfo} = useSelector(state => state.auth)
    const { myOrders } = useSelector(state => state.order)
    useEffect(() => {
        dispatch(get_orders({status:state, customerId:userInfo.id}))
    },[state])

    const redirect = (ord) => {
        let items = 0;
        for (let i = 0; i < ord.length; i++) {
            items = ord.products[i].quantity + items; 
        }
        navigate('/payment',{
            state: {
                price: ord.price,
                items,
                orderId: ord._id 
            }
        }) 
    }



    return (
        
        <div className='bg-white p-4 rounded-md font-thai'>
            <title>คำสั่งซื้อ - Micro Agrotec</title>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold text-slate-600'>คำสั่งซื้อของฉัน</h2>
                <select className='outline-none px-3 py-1 border rounded-md text-slate-600' value={state} onChange={(e) => setState(e.target.value)} >
                    <option value="all">[สถานะคำสั่งซื้อ]</option>
                    <option value="placed">จัดส่งแล้ว</option>
                    <option value="pending">รอดำเนินการ</option>
                    <option value="cancelled">ยกเลิกแล้ว</option>
                    <option value="warehouse">อยู่คลังสินค้า</option>
                </select> 
            </div>

            

            <div className='pt-4'>
            <div className='relative overflow-x-auto rounded-md'>
<table className='w-full text-sm text-left text-gray-500'>
    <thead className='text-xs text-gray-700 uppercase bg-gray-200'>
        <tr>
            <th scope='col' className='px-6 py-3'>หมายเลขคำสั่งซื้อ</th>
            <th scope='col' className='px-6 py-3'>ราคา</th>
            <th scope='col' className='px-6 py-3'>สถานะการจ่ายเงิน</th>
            <th scope='col' className='px-6 py-3'>สถานะคำสั่งซื้อ</th>
            <th scope='col' className='px-6 py-3'>กิจกรรม</th> 
        </tr>
    </thead>
        <tbody>
        {
                myOrders.map((o,i) => <tr className='bg-white border-b'>
                <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>#{o._id}</td>
                <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o.price} บาท</td>
                <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o.payment_status }</td>
                <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o.delivery_status}</td>
                <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>
                    <Link to={`/dashboard/order/details/${o._id}`}><span className='bg-blue-200 text-blue-800 text-md font-semibold mr-2 px-3 py-[2px] rounded'>รายละเอียด</span></Link>

                    {
                       o.payment_status !== 'paid' && <span onClick={() => redirect(o)} className='bg-blue-200 text-blue-800 text-md font-semibold mr-2 px-3 py-[2px] rounded cursor-pointer'>ชำระเงิน</span> 
                    }

                    
                </td> 
            </tr>

)
} 

        </tbody>

</table>

        </div>

            </div>

        </div>
    );
};

export default Orders;