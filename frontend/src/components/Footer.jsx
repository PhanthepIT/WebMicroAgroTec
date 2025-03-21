import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const Footer = () => {

    const navigate = useNavigate() 
    const {userInfo} = useSelector(state => state.auth) 
    const {card_product_count,wishlist_count} = useSelector(state => state.card) 


    return (
        <footer className='bg-[#f3f6fa] font-thai'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>
                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                    <div className='flex flex-col gap-3'>
                        <img className='w-full h-full' src="https://micro-agrotec.com/images/logo.png" alt="logo" />
                        <ul className='flex flex-col gap-2 text-slate-600'>
                            <li>ที่อยู่ :  78/518 หมู่ที่ 9 ตำบลละหาร อำเภอบางบัวทอง จ.นนทบุรี 11110</li>
                            <li>โทรศัพท์ : 063 920 4296</li>
                            <li>อีเมล : microgroup.mat@gmail.com</li>
                        </ul> 
                    </div> 
                </div>

                <div className='w-5/12 lg:w-8/12 sm:w-full'>

                <div className='flex justify-center sm:justify-start sm:mt-6 w-full py-9'>
                        <div>
                <h2 className='font-bold text-lg mb-2'>หน้าทั้งหมด</h2>
                <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                    <ul className='flex flex-col gap-2 text-slate-600 text-sm font-semibold'>
                        <li>
                            <Link to='/'>หน้าแรก</Link>
                        </li>
                        <li>
                            <Link to='/shops'>ร้านค้า</Link>
                        </li>
                        <li>
                            <Link to='/about'>เกี่ยวกับเรา</Link>
                        </li>
                        <li>
                            <Link to='/contact'>ติดต่อเรา</Link>
                        </li>
                    </ul>

                    

                </div>
                        </div> 
                    </div> 

                </div>


                <div className='w-4/12 lg:w-full lg:mt-6 py-9'>
                <div className='w-full flex flex-col justify-start gap-5'>


                        <ul className='flex justify-start items-center gap-6'>
  <li className='flex flex-col items-center'>
    <a
      className='w-[38px] h-[38px] hover:bg-[#272362] hover:text-white flex justify-center items-center bg-white rounded-full'
      target="_blank"
      href="https://web.facebook.com/profile.php?id=61555246499001&_rdc=1&_rdr#"
    >
      <FaFacebookF />
    </a>
    <span className='text-sm font-semibold mt-2'>Bio MAT</span>
  </li>
  <li className='flex flex-col items-center'>
    <a
      className='w-[38px] h-[38px] hover:bg-[#4cc844] hover:text-white flex justify-center items-center bg-white rounded-full'
      target="_blank"
      href="https://shop.line.me/@mat.th"
    >
      <FaLine />
    </a>
    <span className='text-sm font-semibold mt-2'>MICRO AGROTEC TH</span>
  </li>
  <li className='flex flex-col items-center'>
    <a
      className='w-[38px] h-[38px] hover:bg-[#000000] hover:text-white flex justify-center items-center bg-white rounded-full'
      target="_blank"
      href="https://www.tiktok.com/@biombt"
    >
      <FaTiktok />
    </a>
    <span className='text-sm font-semibold mt-2'>MatThailand</span>
  </li>
  <li className='flex flex-col items-center'>
    <a
      className='w-[38px] h-[38px] hover:bg-[#000000] hover:text-white flex justify-center items-center bg-white rounded-full'
      target="_blank"
      href="https://www.tiktok.com/@biombtthailand12"
    >
      <FaTiktok />
    </a>
    <span className='text-sm font-semibold mt-2'>Bio.mbt</span>
  </li>
</ul>


                </div> 
            </div> 

            </div>

            <div className='w-[90%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center'>
                <span>Copiright @ 2025 All Rights Reserved </span>
            </div>


            <div className='hidden fixed md-lg:block w-[50px] h-[110px] bottom-3 right-2 bg-white rounded-full p-2'>
        <div className='w-full h-full flex gap-3 flex-col justify-center items-center'>
        <div onClick={() => navigate(userInfo ? '/card' : '/login') }  className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
            <span className='text-xl text-blue-900'><FaCartShopping/></span>
            {
                card_product_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                    {
                        card_product_count
                    }
                </div>
            }


        </div>

        <div  onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login') } className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
            <span className='text-xl text-blue-900'><FaHeart/></span>
            {
                wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                    {
                       wishlist_count 
                    }
                </div>
            }

        </div>

        </div>
    </div>

            

        </footer>
    );
};

export default Footer;
