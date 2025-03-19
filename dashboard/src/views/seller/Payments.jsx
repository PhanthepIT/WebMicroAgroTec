import React, { forwardRef, useEffect, useState } from 'react';
import { TbCurrencyBaht } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import { get_seller_payment_details, messageClear, send_withdrowal_request } from '../../store/Reducers/PaymentReducer';
import toast from 'react-hot-toast';
import moment from 'moment';

function handleOnWheel({ deltaY }){
    console.log('handleOnWheel',deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props}/>
))


const Payments = () => {

    const dispatch = useDispatch()
    const {userInfo } = useSelector(state => state.auth)

    const {successMessage, errorMessage,loader,pendingWithdrows,   successWithdrows, totalAmount, withdrowAmount, pendingAmount,
        availableAmount, } = useSelector(state => state.payment)

        const [amount,setAmount] = useState(0)


    const sendRequest = (e) => {
        e.preventDefault()
        if (availableAmount - amount > 10) {
            dispatch(send_withdrowal_request({amount, sellerId: userInfo._id }))
            setAmount(0)
        } else {
            toast.error('Insufficient Balance')
        }
    }


    const Row = ({ index, style }) => {
        return(
            <div style={style} className='flex text-sm font-medium '>
                <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>{pendingWithdrows[index]?.amount} Baht</div>
                <div className='w-[25%] p-2 whitespace-nowrap'><span className='py-[1px] px-[5px] bg-slate-200 text-sky-500 rounded-md text-sm'>{pendingWithdrows[index]?.status}</span></div>
                <div className='w-[25%] p-2 whitespace-nowrap'> {moment(pendingWithdrows[index]?.createdAt).format('LL')} </div>  
            </div>
        )
    }



    const Rows = ({ index, style }) => {
        return (
        <div style={style} className='flex text-sm text-black font-medium'>
        <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
        <div className='w-[25%] p-2 whitespace-nowrap'>{successWithdrows[index]?.amount} Baht</div>
        <div className='w-[25%] p-2 whitespace-nowrap'>
            <span className='py-[1px] px-[5px] bg-slate-200 text-green-600 rounded-md text-sm'>{successWithdrows[index]?.status}</span>
         </div>
        <div className='w-[25%] p-2 whitespace-nowrap'> {moment(successWithdrows[index]?.createdAt).format('LL')} </div>  
            </div>
        )
    }





    useEffect(() => {
        dispatch(get_seller_payment_details(userInfo._id))
    },[])

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    },[successMessage,errorMessage])



    return (
        <div className='px-2 md:px-7 py-5 '>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5'>
            
                            <div className='flex justify-between items-center p-5 bg-[#ffffff] rounded-md gap-3 shadow-xl'>
                                <div className='flex flex-col justify-start items-start text-[#0f172a]'>
                                    <h2 className='text-2xl font-bold'>฿{totalAmount}</h2>
                                    <span className='text-sm font-bold'>Total Sales</span>
                                </div>
            
                                <div className='w-[40px] h-[47px] rounded-full bg-[#84cc16] flex justify-center items-center text-xl'>
                                <TbCurrencyBaht className='text-[#ecfccb] shadow-lg'/>
                                </div>
                            </div>
            
                            <div className='flex justify-between items-center p-5 bg-[#ffffff] rounded-md gap-3 shadow-xl'>
                                <div className='flex flex-col justify-start items-start text-[#0f172a]'>
                                    <h2 className='text-2xl font-bold'>฿{availableAmount}</h2>
                                    <span className='text-sm font-bold'>Available Amount</span>
                                </div>
            
                                <div className='w-[40px] h-[47px] rounded-full bg-[#eab308] flex justify-center items-center text-xl'>
                                <TbCurrencyBaht className='text-[#fef9c3] shadow-lg'/>
                                </div>
                            </div>
            
                            <div className='flex justify-between items-center p-5 bg-[#ffffff] rounded-md gap-3 shadow-xl'>
                                <div className='flex flex-col justify-start items-start text-[#0f172a]'>
                                    <h2 className='text-2xl font-bold'>฿{withdrowAmount}</h2>
                                    <span className='text-sm font-bold'>WithDrawal Amount</span>
                                </div>
            
                                <div className='w-[40px] h-[47px] rounded-full bg-[#f97316] flex justify-center items-center text-xl'>
                                <TbCurrencyBaht className='text-[#ffedd5] shadow-lg'/>
                                </div>
                            </div>
            
                            <div className='flex justify-between items-center p-5 bg-[#ffffff] rounded-md gap-3 shadow-xl'>
                                <div className='flex flex-col justify-start items-start text-[#0f172a]'>
                                    <h2 className='text-2xl font-bold'>฿{pendingAmount}</h2>
                                    <span className='text-sm font-bold'>Pending Amount</span>
                                </div>
            
                                <div className='w-[40px] h-[47px] rounded-full bg-[#ef4444] flex justify-center items-center text-xl'>
                                <TbCurrencyBaht className='text-[#fee2e2] shadow-lg'/>
                                </div>
                            </div>
                        </div>


                        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4'>

                        <div className='bg-[#ffffff] text-[#111827] rounded-md p-5 shadow-xl'>
    <h2 className='text-lg'>Send Request</h2>
    <div className='pt-5 mb-5'>
        <form onSubmit={sendRequest}>
            <div className='flex gap-3 flex-wrap'>
                <input onChange={(e) => setAmount(e.target.value)} value={amount} min='0' type="number" className='px-3 py-2 md:w-[75%] focus:border-slate-500 outline-none bg-[#ffffff] border border-slate-700 rounded-md text-[#111827]' name='amount' />
                <button disabled={loader} className='bg-blue-900  hover:shadow-blue-500/40 hover:shadow-md text-white rounded-md px-7 py-2'>{loader ? 'loading..' : 'Submit'}</button>

            </div>
        </form> 
    </div>
                           

                                <div>
                                    <h2 className='text-lg pb-4'>Pending Request</h2>


                                                        <div className='w-full overflow-x-auto'>
                                                            <div className='flex bg-[#e5e5e5] uppercase text-xs font-bold min-w-[340px] rounded-md'>
                                                                <div className='w-[25%] p-2'>No</div>
                                                                <div className='w-[25%] p-2'>Amount</div>
                                                                <div className='w-[25%] p-2'>Status</div>
                                                                <div className='w-[25%] p-2'>Date</div>
                                                            </div>
                                                            {
                                                                <List
                                                                style={{ minWidth : '340px' }}
                                                                className='List'
                                                                height={350}
                                                                itemCount={pendingWithdrows.length}
                                                                itemSize={35}
                                                                outerElementType={outerElementType}
                                                                >
                                                                    {Row}
                                    
                                                                </List>
                                                            }
                                                        </div>
                                </div>
                            </div>


                            <div className='bg-[#ffffff] rounded-md p-5 shadow-xl'> 
                                <div>
                                    <h2 className='text-lg pb-4'>Success WithDrawal</h2>


                                                        <div className='w-full overflow-x-auto text-black'>
                                                            <div className='flex bg-[#e5e5e5] uppercase text-xs font-bold min-w-[340px] rounded-md'>
                                                                <div className='w-[25%] p-2'>No</div>
                                                                <div className='w-[25%] p-2'>Amount</div>
                                                                <div className='w-[25%] p-2'>Status</div>
                                                                <div className='w-[25%] p-2'>Date</div>
                                                            </div>
                                                            {
                                                                <List 
                                                                style={{ minWidth : '340px' }}
                                                                className='List'
                                                                height={350}
                                                                itemCount={successWithdrows.length}
                                                                itemSize={35}
                                                                outerElementType={outerElementType}
                                                                >
                                                                    {Rows}
                                    
                                                                </List>
                                                            }
                                                        </div>
                                </div>
                            </div>


                        </div>
        </div>
    );
};

export default Payments;