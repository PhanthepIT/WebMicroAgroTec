import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SiShopee } from "react-icons/si";
import { FaShieldHeart } from "react-icons/fa6";
import { FaLine } from "react-icons/fa6";



export default function LandingPage() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header className="py-6" />
      <div className='font-thai'>
      <title>ส้วมตัน ทำอย่างไรดี? สาเหตุ วิธีแก้ไข และตัวช่วยที่ได้ผลจริง!</title>

      {/* หัวข้อและรูปภาพ */}
      <section className="text-center py-10 mt-6 ">
        <h2 className="text-3xl font-bold text-gray-800">
          ส้วมตัน ทำอย่างไรดี? สาเหตุ วิธีแก้ไข และตัวช่วยที่ได้ผลจริง!
        </h2>
        <div className="flex justify-center mt-4">
          <img 
            src="/images/banner/web-10.gif" 
            alt="ส้วมตัน ทำอย่างไรดี? สาเหตุ วิธีแก้ไข และตัวช่วยที่ได้ผลจริง!" 
            className="w-[1080px] h-full"
          />
        </div>
      </section>

      {/* สาเหตุที่ทำให้ส้วมตัน */}
      <section className="py-10 px-6 max-w-3xl mx-auto ">
  <h3 className="text-2xl font-bold text-gray-800 text-center">
    สาเหตุที่ทำให้ส้วมตัน ท่อน้ำอุดตัน
  </h3>

  <div className="mt-6 grid grid-cols-2 sm:grid-cols-1 gap-6">
    {/* สาเหตุที่ 1 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src="/images/banner/Pipe.jpg" alt="ไขมันสะสมในท่อ" className="w-full h-48 object-cover rounded-lg" />
      <h4 className="text-xl font-semibold text-gray-800 mt-4">1. การสะสมของไขมันและเศษอาหาร</h4>
      <p className="text-gray-700 mt-2">
        สบู่ แชมพู และสารทำความสะอาดที่มีไขมัน เมื่อไหลลงท่อจะค่อย ๆ แข็งตัวและอุดตันภายในท่อ
      </p>
    </div>

    {/* สาเหตุที่ 2 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src="/images/banner/ToiletPaper.jpg" alt="กระดาษชำระอุดตัน" className="w-full h-48 object-cover rounded-lg" />
      <h4 className="text-xl font-semibold text-gray-800 mt-4">2. การทิ้งกระดาษชำระและสิ่งของลงในโถส้วม</h4>
      <p className="text-gray-700 mt-2">
        ทิชชู่เปียก สำลี และผ้าอนามัยไม่สามารถละลายน้ำได้ ทำให้เกิดการอุดตันภายในท่อ
      </p>
    </div>

    {/* สาเหตุที่ 3 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src="/images/banner/WaterScale.png" alt="คราบหินปูนในท่อ" className="w-full h-48 object-cover rounded-lg" />
      <h4 className="text-xl font-semibold text-gray-800 mt-4">3. คราบหินปูนและตะกรันน้ำ</h4>
      <p className="text-gray-700 mt-2">
        เมื่อใช้ห้องน้ำเป็นเวลานาน คราบหินปูนอาจสะสมในท่อ ทำให้น้ำไหลช้าลงและเกิดการอุดตัน
      </p>
    </div>

    {/* สาเหตุที่ 4 */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src="/images/banner/Toys.jpg" alt="สิ่งแปลกปลอมตกในท่อ" className="w-full h-48 object-cover rounded-lg" />
      <h4 className="text-xl font-semibold text-gray-800 mt-4">4. สิ่งแปลกปลอมตกลงไปในท่อ</h4>
      <p className="text-gray-700 mt-2">
        เศษอาหาร หรือของชิ้นเล็ก ๆ ที่ตกลงไป อาจทำให้ท่อตันและระบายน้ำไม่ได้
      </p>
    </div>
  </div>
</section>

<div className="flex flex-col items-center text-center p-6">
      {/* หัวข้อ */}
      <h2 className="text-3xl font-bold mb-4">
        หมดปัญหากวนใจ เพียงแค่ใช้{" "}
        <span className="text-4xl font-bold p-4 text-blue-600">BIO FOG</span>
      </h2>

      {/* รูปภาพ */}
      <img
        src="/images/banner/web-14.jpg"
        alt="รูปภาพตัวอย่าง"
        className="w-[1080px] h-full rounded-lg shadow-lg mt-6"
      />

      {/* ปุ่มไปยังร้านค้า */}
      <div className="flex gap-4 mt-6">
        {/* Shopee */}
        <a
          href="https://shopee.co.th/matgroup#product_list"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition"
        >
          <SiShopee className="w-6 h-6 mr-2" />
          ซื้อผ่าน Shopee
        </a>

        {/* Lazada */}
        <a
          href="https://www.lazada.co.th/mat-group/?q=Biofog&from=wangpu&langFlag=th&pageTypeId=2&spm=a2o4m.10453683.searchbar.0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition"
        >
          <FaShieldHeart className="w-6 h-6 mr-2" />
          ซื้อผ่าน Lazada
        </a>

        {/* Line */}
        <a
          href="https://shop.line.me/@mat.th/search?searchText=Biofog" // ใส่ลิงก์ไลน์ของคุณ
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition"
        >
          <FaLine className="w-6 h-6 mr-2" />
          ซื้อผ่าน LINE
        </a>
      </div>
    </div>


     
      {/* เพิ่มรูปภาพต่อท้ายหน้าหลังจาก Footer */}
<section className="py-10">
  <div className="flex justify-center">
  <a href="https://shop.line.me/@mat.th" target="_blank" rel="noopener noreferrer">
    <img 
      src="/images/banner/LineCon.gif" 
      alt="Line" 
      className="w-full max-w-3xl rounded-lg shadow-lg"
    />
    </a>
  </div>
</section>

{/* Section ใหม่เกี่ยวกับไมโคร อะโกรเทค */}
<section className="py-10 px-6 bg-gray-50">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      ไมโคร อะโกรเทค ผู้นำด้านการแก้ไขปัญหาสิ่งแวดล้อม
    </h2>
    <p className="text-lg text-gray-700 mb-6">
    <strong className="font-bold">ไมโคร อะโกรเทค</strong> ผู้นำด้านการแก้ไขปัญหาสิ่งแวดล้อมอย่างยั่งยืน ด้วยบริการครบวงจร (One Stop Service)
      โดยทีมงานผู้เชี่ยวชาญ พร้อมให้บริการผลิตและจำหน่ายจุลินทรีย์คุณภาพสูงที่ได้รับการวิจัยและรับรองมาตรฐานจากมหาวิทยาลัยและสถาบันชั้นนำของประเทศ
    </p>
    <div className="mt-6 mb-6">
      <img 
        src="/images/banner/web-09.jpg" 
        alt="ไมโคร อะโกรเทค" 
        className="mx-auto w-full max-w-4xl h-auto rounded-lg shadow-lg" 
      />
    </div>
    <p className="text-lg text-gray-700 mb-6">
    <strong className="font-bold">นวัตกรรมจุลินทรีย์ล้ำสมัย</strong> ผลิตภัณฑ์ของเรามีประสิทธิภาพเหนือกว่าหัวเชื้อทั่วไป โดยเฉพาะ "ไบโอฟอก" จุลินทรีย์ Pure Culture สกัดจากธรรมชาติ ผ่านกระบวนการเพาะเลี้ยงขั้นสูง ได้รับการยอมรับจากองค์กรชั้นนำในหลากหลายอุตสาหกรรม สามารถแก้ไขปัญหาสิ่งแวดล้อมได้อย่างมีประสิทธิภาพ ลดการใช้สารเคมีด้วยแนวทาง "ธรรมชาติบำบัดธรรมชาติ" ฟื้นฟูสิ่งแวดล้อมและชุมชนอย่างยั่งยืน
    </p>
    <p className="text-lg text-gray-700 mb-6">
    <strong className="font-bold">เชี่ยวชาญด้านการบำบัดน้ำเสีย</strong> ด้วยประสบการณ์กว่าสิบปี เราคัดสรรจุลินทรีย์คุณภาพสูงเพื่อช่วยขจัดกลิ่นไม่พึงประสงค์และฟื้นฟูแหล่งน้ำให้กลับมาสะอาดสดใส ครอบคลุมตั้งแต่บ้านเรือน อาคารสำนักงาน โรงงานอุตสาหกรรม ไปจนถึงแหล่งน้ำธรรมชาติ เช่น แม่น้ำและลำคลอง
    </p>
    <section className="py-12 ">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="flex flex-col gap-8">
    <img
        src="/images/banner/web-13.gif"
        alt="รูปภาพตัวอย่าง"
        className="w-[1080px] h-full rounded-lg shadow-lg mt-6"
      />
    

     

 
      
    </div>
  </div>
</section>

  </div>
</section>


<div className="relative">
  <img src="/images/banner/different-herbs.jpg" alt="image" className="w-full h-[350px] object-cover " />
  <div className="absolute inset-0 bg-black opacity-65"></div> {/* สร้างพื้นหลังที่มืดเพื่อให้ข้อความมองเห็นได้ชัด */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
    <div className="max-w-3xl w-full text-center">
      <p className="text-lg text-gray-200 mb-6 shadow-black">
        <strong className="font-bold text-gray-100 shadow-black"> มุ่งมั่นพัฒนาเพื่ออนาคต </strong> เราพิถีพิถันในทุกขั้นตอนการผลิต ควบคุมคุณภาพอย่างเคร่งครัด และพัฒนาอย่างต่อเนื่องเพื่อตอบสนองความต้องการที่หลากหลาย ล่าสุด เราได้พัฒนาจุลินทรีย์สูตรเฉพาะสำหรับบ่อเลี้ยงสัตว์น้ำ ช่วยเกษตรกรและผู้เพาะเลี้ยงสัตว์น้ำให้ดูแลระบบนิเวศได้อย่างมีประสิทธิภาพ รวมถึงผลิตภัณฑ์สำหรับฟาร์มปศุสัตว์ เพื่อลดสารตกค้างในอาหารของผู้บริโภค ทั้งหมดนี้ยังคงไว้ซึ่งแนวทางที่เป็นมิตรต่อสิ่งแวดล้อม
      </p>
      <p className="text-lg text-gray-200 shadow-black">
        <strong className="font-bold text-gray-100 shadow-black"> ปราศจากสารเคมี 100% </strong> เพื่อสมดุลที่ดีของธรรมชาติและสุขภาพที่ยั่งยืนของมนุษย์
      </p>
    </div>
  </div>
</div>











      </div>

      <Footer className="py-6" />
    </div>
  );
}
