import React from 'react';



const ChangePassword = () => {
    return (
        <div className='p-4 bg-white'>
            <h2 className='text-xl text-slate-600 pb-5'>เปลี่ยนรหัสผ่าน</h2>

        <form>
            <div className='flex flex-col gap-1 mb-2'>
                <label htmlFor="old_password">รหัสผ่านเก่า</label>
            <input className='outline-none px-3 py-1 border rounded-md text-slate-600' type="password" name="old_password" id="old_password"  placeholder='รหัสผ่านเก่า'/>
            </div>

            <div className='flex flex-col gap-1 mb-2'>
                <label htmlFor="new_password">รหัสผ่านใหม่</label>
            <input className='outline-none px-3 py-1 border rounded-md text-slate-600' type="password" name="new_password" id="new_password"  placeholder='รหัสผ่านใหม่'/>
            </div>

            <div className='flex flex-col gap-1 mb-2'>
                <label htmlFor="confirm_password">ยืนยันรหัสผ่าน</label>
            <input className='outline-none px-3 py-1 border rounded-md text-slate-600' type="password" name="confirm_password" id="confirm_password"  placeholder='ยืนยันรหัสผ่าน'/>
            </div>
            <div>
                <button className='px-8 py-2 bg-[#24a1da] shadow-lg hover:shadow-blue-500/30 text-white rounded-md'>แก้ไขรหัสผ่าน</button>
            </div>


        </form>

        </div>
    );
};

export default ChangePassword;