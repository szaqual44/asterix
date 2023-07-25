import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import * as I from '../common/styles/images.styles'
import * as F from "../common/styles/forms.styles";

export const CarouselComponent = () => {
    const [index, setIndex] = useState<number>(0 as number);

    const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
    };

    const imgPath=`/assets/carousel/`
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