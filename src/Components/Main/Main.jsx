import React, {useEffect} from 'react'
import './main.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

//Let me import the images so we dont have this error on the browser.
//Để mình nhập ảnh vào trình duyệt không bị lỗi này.
import img from '../../Assets/nhatrang.jpg';
import img2 from '../../Assets/danang.jpg';
import img3 from '../../Assets/phuyen.jpg';
import img4 from '../../Assets/vinhhalong.jpg';
import img5 from '../../Assets/phuquoc.jpg';
import img6 from '../../Assets/saigon.jpg';
import img7 from '../../Assets/7.jpg';
import img8 from '../../Assets/8.jpg';
import img9 from '../../Assets/9.jpg';


// Let me paste the array named data

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Nha Trang',
        location: 'Khánh Hòa',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$700',
        description: 'Nha Trang là một thành phố ven biển và là trung tâm chính trị, kinh tế, văn hóa, khoa học kỹ thuật và du lịch của tỉnh Khánh Hòa, Việt Nam.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Đà Nẵng',
        location: 'Đà Nẵng',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$600',
        description: 'Đà Nẵng là một thành phố trực thuộc trung ương, nằm trong vùng Duyên hải Nam Trung Bộ Việt Nam, là thành phố trung tâm và lớn nhất khu vực miền Trung.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Tuy Hòa',
        location: 'Phú Yên',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$700',
        description: 'Tuy Hòa là thành phố tỉnh lỵ của tỉnh Phú Yên, Việt Nam. Là đô thị trù phú nằm ở hạ nguồn Sông Ba, dòng sông lớn nhất miền Trung.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Vịnh Hạ Long',
        location: 'Quảng Ninh',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$800',
        description: 'Vịnh Hạ Long là một vịnh nhỏ thuộc phần bờ tây vịnh Bắc Bộ tại khu vực biển Đông Bắc Việt Nam, bao gồm vùng biển đảo của thành phố Hạ Long thuộc tỉnh Quảng Ninh.'
    },
    
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Phú Quốc',
        location: 'Kiên Giang',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$1100',
        description: 'Phú Quốc là một hòn đảo nằm trong vịnh Thái Lan và là đảo lớn nhất Việt Nam. Về hành chính, đảo Phú Quốc cùng với các đảo nhỏ hơn ở lân cận.'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Sài Gòn',
        location: 'Sài Gòn',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$840',
        description: 'Thành phố Hồ Chí Minh (thường được gọi là Sài Gòn) là một thành phố ở miền nam Việt Nam nổi tiếng với vai trò nòng cốt trong chiến tranh Việt Nam.'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$790',
        description: 'Quần thể di tích đền Angkor là một trong những kỳ quan thế giới và cũng là một địa điểm du lịch rất nổi tiếng. Thu hút hàng ngàn lượt khách tham quan.'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$900',
        description: 'Tāj Mahal là một lăng mộ nằm tại Agra, Ấn Độ. Hoàng đế Mogul Shāh Jahān; trong tiếng Ba Tư Shah Jahan có nghĩa là "chúa tể thế giới".'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'THƯ GIÃN, ĐẸP',
        fees: '$500',
        description: 'Bali là một tỉnh của Indonesia và là cực tây của Quần đảo Sunda Nhỏ hơn. Phía đông Java và phía tây Lombok, tỉnh bao gồm đảo Bali và một số đảo lân cận.'
    },
]
const Main = () => {

       //Lets create a react hook to add a scroll animation...
       useEffect(()=> {
        Aos.init({duration: 2000})
    },[])

    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Khám Phá Việt Nam
                </h3>
            </div>

            <div className="secContent grid">
                {/* So guys, here Me are going to use high ordfer array method(map) To do that we shall use a List of object in one array. I'm going to create an array named data and from that we shall .map() array to fetch each desitnation at once. I hope this will make sence to you! */}
                {/* Vì vậy, ở đây tôi sẽ sử dụng phương thức mảng bậc cao (bản đồ) 
                Để làm điều đó, chúng ta sẽ sử dụng Danh sách đối tượng trong một mảng. 
                Tôi sẽ tạo một mảng có tên là dữ liệu và từ đó chúng ta sẽ tạo mảng .map() 
                để tìm nạp từng điểm đến cùng một lúc. Tôi hy vọng điều này sẽ có ý nghĩa với bạn! */} 

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, 
                    description}) => {
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestiantion">
                                {/* Ở đây nó sẽ trả về id duy nhất từ ​​mảng bản đồ */}
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon'/>
                                    <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade} <small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        CHI TIẾT <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            
            </div>

        </section>
    )
}

export default Main