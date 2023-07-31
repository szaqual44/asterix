import styled from 'styled-components';
import {Colors} from './variables.styles';


export const Anim = styled.div`
  animation:slidein${(p) => (`${p.dir}${p.id}`)} 2s forwards;
  width:100%;
  height:100%;

  @keyframes slidein${(p) => (`${p.dir}${p.id}`)} {
      0% {
        transform: translateX(200%);
       }
      100% {
        ${(p) => {
    if (p.dir === 'right') return "transform: translateX(0);"
}
}
`;

export const MainContainer = styled.div`
  height: 100vh;
`;
// background:url(/src/common/styles/bgPattern.jpg);
export const Overlay = styled.div`
  background: ${Colors.bodyBGRBA};
`;

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  top: 0;

  background-color: ${Colors.navBG};
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 2rem 10rem;
  // border-bottom: 4px solid ${Colors.navLink};
`;

interface SectionStyle {
    direction?: string;
    height?: string;
}

export const Section = styled.div<SectionStyle>`
  display: flex;
  width: 100%;
  ${(props) => {
    if (props.dir === 'column')
        return `
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                // padding:0 5rem;
            `;
    else return '';
}}
  
    ${(props) => {
    if (props.height)
        return `
               height:${props.height}
            `;
    else return '';
}}
`;

export const CenterBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

`;

export const NameBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const LetsTalkHeader = styled.div`
    display:flex;
    justify-content:center;
    padding:2rem;
    width:100%;
    background: rgb(249,112,255);
    background: linear-gradient(90deg, rgba(249,112,255,1) 19%, rgba(86,196,254,0.9809173669467787) 80%);
`;


export const BackgroundGif = styled.div`
    height: 100vh;
    width: 100vw;
    padding:0;
    margin:0;
    background-size: cover;
    background-image:url('/assets/bghome.gif');
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
`;
export const CarouselContainer = styled.div`
  padding: 5rem;
  background: ${Colors.white};
`;
export const TextContainer = styled.div`
    width:100%;
    height:100%;
    padding: 15rem 5rem;    
    text-align: justify;           
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}    
`;
export const ElementContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
`;
export const LogoContainer = styled.div`
    display: flex;
`;
export const Img = styled.img<{ objectFit?: string }>`
  width: 100%;

  ${(props) => {
    if (props.objectFit)
        return `
              object-fit: ${props.objectFit};
            `;
    else return 'object-fit: cover;';
}}
    
`;


export const Svg = styled.img<{size?:string,color?:string}>`
  object-fit: contain;
  height: 100px;
  width:10rem;
  
    ${(props) => {
    if (props.color === 'white')
        return `
              filter: invert(98%) sepia(22%) saturate(90%) hue-rotate(316deg) brightness(116%) contrast(100%);
            `;
    if (props.color === 'primary')
        return `
               filter: invert(67%) sepia(67%) saturate(6993%) hue-rotate(234deg) brightness(104%) contrast(101%);
            `;
    else return '';
}}

      ${(props) => {
    if (props.size === 'small')
        return `
              width:6rem;
            `;
    else return '';
}}
 

  
`;

export const PuzzelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  margin: 5rem 0;
`;

export const Bar = styled.div`
  width: 100%;
  height: 150px;
  background: ${Colors.separationBar1};
`;

export const ServicesBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom:100px;
  background-color: ${Colors.white};
`;

export const ConctactBlock = styled.div`
 background-image:url('/assets/bghome.gif');
 width: 100%;
`;

export const ContactStyling = styled.div`
  background-color: ${Colors.primaryBG};
  color: ${Colors.black};
`;

export const AboutStyling = styled.div`
  background-color: ${Colors.primaryBG};
  color: ${Colors.aboutText};
  padding:60px 0;
`;
export const ServicesStyling = styled.div`
  background-color: ${Colors.primaryBG};
  color: ${Colors.aboutText};
  padding:60px 0;
`;

export const ContactDataContainer = styled.div<{justify?:string}>`
    display:flex;
    justify-content:center;
    width:100%;
    padding:0 20rem;
        ${(props) => {
    if (props.justify === 'start')
        return `
              justify-content:start;
            `;
    else return '';
}}
`;

export const Rights = styled.div`
  width: 100%;
  height: 50px;
  background: ${Colors.black};
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 2rem;
`;
