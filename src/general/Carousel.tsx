import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import * as I from '../common/styles/images.styles'

export const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const imgPath=`src/common/images/carousel/`
    const imgList = [1,2,3,4,5,6]


    return <>
        <Carousel activeIndex={index} onSelect={handleSelect} >
            {imgList.map(img=>(
                <Carousel.Item key={img} interval={1000}>
                    <I.CarouselSingleImage src={`${imgPath}${img}.jpg`} alt={'img'}/>
                </Carousel.Item>
            ))}


        </Carousel>
    </>
}