import styled from "styled-components";
import {Colors} from "./variables.styles";

const headerHeight = '10rem'

export const mainSideMargin = '3rem';

// animation:slidein${p=>p.slidein+String(p.id)} 2s forwards;
// @keyframes slidein${p=>p.slidein+String(p.id)} {
//     100% {
//     ${({slidein}) => {
//         if (slidein === 'left') return "transform: translateX(20%);"
//         if (slidein === 'right') return "transform: translateX(-10%);"
//         return ''
//     }
// }



export const MainContainer=styled.div`
    height:100vh;    
     

`
// background:url(/src/common/styles/bgPattern.jpg);
export const Overlay=styled.div`
   // position:absolute;
   // top:0;
   // left:0;
   // width:100%;
   // height:100%;

   background: ${Colors.bodyBGRBA};
`

export const Main = styled.main`

`;

export const HeaderContainer = styled.header`
    position: sticky;
    left: 0;
    top: 0;
    height: ${headerHeight};
    background-color:${Colors.navBG};
    z-index:100;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    //TODO: change
    width:100vw;
    border-bottom:2px solid ${Colors.navLink};
`

export const ContainerWithShadow = styled.div`  
  margin:  0;
  padding: 0; 
`;

export const Section = styled.div`
    display:flex;  
    width:100%;

`
// height: ${({height})=> {
// if (height) return height
// else return '0'
// }}

export const FirstBlock = styled.div`
    width:100%;
    display:flex;      
    justify-content: center;
    align-items: center;

`

export const Block = styled.div`
    display:flex;  
    width:100%; 
`
// ${(props)=>{
//     if (props.direction==='column') return `
//     display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// margin:10rem 0;
// padding:0 5rem;
// `
// }}

export const ImgContainer = styled.div`
    width:100%;
    height:100%;
`
export const TextContainer = styled.div`
    width:100%;
    height:100%;
    padding: 0 5rem; 
    margin:5rem 0 ;
    text-align: justify;           

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}    
`

export const Img = styled.img`
    width:100%;
    object-fit:cover;    
`

export const Bar = styled.div`
    width:100%;
    height:150px;
    background:${Colors.separationBar1};
`