import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

    //Lets create a react hook to add a scroll animation...
      useEffect(()=> {
        Aos.init({duration: 2000})
    },[])


    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>GIỮ LIÊN LẠC</small>
                        <h2>Với chúng tôi</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Nhập Email của bạn' />
                        <button data-aos="fade-up" className="btn flex" type='submit'>
                          GỬI  <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className="icon"/>
                                Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Travel.com là một trang web du lịch trực tuyến cho đặt chỗ, được thành lập vào năm 1996. Công ty được vận hành bởi Booking Holdings, có có trụ sở tại Hoa Kỳ, và là nguồn lợi nhuận chính của tập đoàn này. Travel.com có trụ sở tại Amsterdam, Hà Lan.
        
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon"/>
                            <AiFillYoutube className="icon"/>
                            <AiFillInstagram className="icon"/>
                            <FaTripadvisor className="icon"/>
                            
                        </div>

                    </div>


                    <div className="footerLinks grid">

                        {/* GroupOne */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                DỊCH VỤ
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>


                        </div>

                        {/* Group Two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                ĐỐI TÁC
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                               Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>


                        </div>


                        {/* Group Three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                ĐỊA ĐIỂM
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Nha Trang
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                               Hà Nội
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Phú Quốc
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Phú Yên
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                               Quảng Ninh
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                         <small>BEST TRAVEL WEBSITE THEME</small>
                         <small>COPYRIGHTS RESERVED - KVT 2022</small>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer