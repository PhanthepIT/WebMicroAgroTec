import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { FaGoogle } from "react-icons/fa";
//import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { overrideStyle } from '../../utils/utils';
import { seller_register, messageClear } from '../../store/Reducers/authReducer';
import toast from 'react-hot-toast';



const Register = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {loader,successMessage,errorMessage} = useSelector(state => state.auth)

    const  [state, setState] = useState ({
        name: "",
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(seller_register(state))
    }

    useEffect(() => {
        
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
          }
        
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
          }

    },[successMessage,errorMessage])




    return (
        <div className='min-w-screen min-h-screen bg-[#ecfeff] flex justify-center items-center'>
            <div className='w-[350px] text-[#000000] p-2'>
                <div className='bg-white p-4 rounded-md shadow-2xl'>
                    <h2 className='text-xl text-center mb-3 font-bold'>Micro Agrotec</h2>
                    <p className='text-sm text-center mb-3 font-medium'>Please register your account</p>

                    <form onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="name">Name</label>
                            <input onChange={inputHandle} value={state.name} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="text" name='name' placeholder='Name' id='name' required />
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandle} value={state.email} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="email" name='email' placeholder='Email' id='email' required />
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password</label>
                            <input onChange={inputHandle} value={state.password} className='px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' type="password" name='password' placeholder='Password' id='password' required />
                        </div>



                        <button disabled={loader ? true : false} className="bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
            {
              loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle}/> : 'Sign Up'
            }
            </button>

                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>Already Have an account ? <Link className='font-bold' to="/login">Sign In</Link></p>
                        </div>

 

      
                    </form>
                </div>

            </div>
            
        </div>
    );
};

export default Register;