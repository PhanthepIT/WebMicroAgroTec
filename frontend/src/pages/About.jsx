import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white">
      <title>เกี่ยวกับเรา - Micro Agrotec</title>
      <Header />

      {/* Banner Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] mt-16 font-thai">
        <img
          src="/images/banner/banner_about.jpg"
          alt="แบนเนอร์เกี่ยวกับเรา"
          className="w-full h-full object-cover object-center rounded-md shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            เกี่ยวกับเรา
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6 md:p-10 text-gray-700 text-lg leading-relaxed font-thai">
        <p>
          <span className="font-bold text-blue-900">บริษัท ไมโคร อะโกรเทค จำกัด</span>{" "}
          ก่อตั้งในปี พ.ศ. 2562 ซึ่งเป็นบริษัทที่แยกสาขามาจาก บริษัท ไมโครไบโอเทค จำกัด
          ที่ก่อตั้งในปี 2534 เรามีความเชี่ยวชาญด้านจุลินทรีย์
          และเทคโนโลยีชีวภาพเป็นอย่างดี
        </p>

        <p className="mt-6">
          มนุษย์เรามีประสาทสัมผัสที่ไวต่อการรับรู้ ซึ่งส่วนใหญ่นั้น
          <span className="font-bold"> กลิ่น </span>
          จะเป็นสัมผัสที่เรารับรู้เป็นอย่างแรก จากกลิ่นเหม็นไม่พึงประสงค์ที่เกิดขึ้น
          ตามท่อระบายน้ำ อ่างล้างจาน อ่างล้างหน้า ท่อน้ำทิ้ง ชักโครก ซากสัตว์
          และขยะอินทรีย์ ซึ่งปัญหาเหล่านี้เกิดจากการหมักหมมและอุดตัน ทำให้เกิดกลิ่นเหม็น
        </p>

        <p className="mt-6">
          คนส่วนใหญ่มักเลือกใช้วิธีแก้ปัญหา เช่น
          <span className="font-bold"> การใช้สารเคมี </span>
          ในการสลายสิ่งอุดตัน ซึ่งสามารถใช้ได้ แต่ผู้ใช้ควรมีความรู้ในการใช้งาน
          และไม่ควรใช้บ่อย เพื่อไม่ให้เป็นอันตรายต่อตนเองและผู้อื่น
          ปัจจุบันมีการหันมาใช้
          <span className="font-bold"> จุลินทรีย์ </span>
          ในการแก้ปัญหามากขึ้น เนื่องจากสามารถตอบโจทย์ทั้งระยะสั้นและระยะยาว
          และยังปลอดภัยต่อคน สัตว์ และสิ่งแวดล้อม
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">ผลิตภัณฑ์ชีวภาพ</h2>
          <img src="/images/banner/imageabout01.jpg" alt="ผลิตภัณฑ์ชีวภาพ" className="w-full mt-4 rounded-lg shadow-lg" />
          <p className="mt-6">
            บริษัท ไมโคร อะโกรเทค จำกัด เป็นผู้นำในการผลิตและจำหน่ายสินค้าจุลินทรีย์
            ที่ครอบคลุมหลากหลายภาคส่วน ตั้งแต่ระดับครัวเรือนไปถึงโรงงานอุตสาหกรรม
            ด้วยความเชี่ยวชาญด้านจุลินทรีย์วิทยาและเทคโนโลยีชีวภาพ
            เราใส่ใจในทุกรายละเอียดเพื่อให้ได้ผลิตภัณฑ์คุณภาพและเหมาะกับความต้องการของลูกค้าทุกประเภท
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">บำบัดตะกอนชีวภาพ</h2>
          <img src="/images/banner/imageabout02.jpg" alt="บำบัดตะกอนชีวภาพ" className="w-full mt-4 rounded-lg shadow-lg" />
          <p className="mt-6">
            เรารับกำจัดกากอุตสาหกรรมด้วยวิธีการหมักทำปุ๋ยหรือสารปรับปรุงคุณภาพดิน รหัส 083
            ตามประกาศกระทรวงอุตสาหกรรม เรื่องการจัดการสิ่งปฏิกูลหรือวัสดุไม่ใช้แล้ว พ.ศ. 2548
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900">เครื่องกำจัดขยะอินทรีย์และผลิตก๊าซ</h2>
          <img src="/images/banner/imageabout03.jpg" alt="เครื่องกำจัดขยะอินทรีย์" className="w-full mt-4 rounded-lg shadow-lg" />
          <p className="mt-6">
            <span className="font-bold">Cowtec</span> คือ นวัตกรรมเทคโนโลยีชีวภาพที่สามารถกำจัดขยะอินทรีย์
            ให้เปลี่ยนเป็นปุ๋ยหมักและก๊าซชีวภาพ ลดการปลดปล่อยก๊าซเรือนกระจก ภายใน 24 ชั่วโมง
          </p>
          <p className="mt-4">
            <span className="font-bold">AD “Anaerobic Digestion”</span> คือหัวใจของ Cowtec
            เป็นกระบวนการย่อยสลายอินทรีย์วัตถุในสภาวะไร้ออกซิเจน โดยใช้จุลินทรีย์สายพันธุ์พิเศษที่คัดมาโดยเฉพาะ
            ทำให้เครื่อง Cowtec สามารถรับวัตถุดิบได้หลากหลาย และเหมาะกับทุกสภาพแวดล้อม
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
