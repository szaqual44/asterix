import styled from "styled-components";

const unit = '10px';
const size = 2;


export const PrettierContainer = styled.div`

    min-width:800px;
    padding:50px;
    display:flex;
    flex-direction:column;
    gap:${unit};    
    backround:'coral';
    min-height:500px;    
    overflow:hidden;
`;

export const Row = styled.div`
    height: ${unit};
    gap: ${unit};
    display: flex;
    justify-content:center;    
    animation: load 1s 500ms forwards;       
    translate:-50px;
    &:nth-child(2n){
        translate:50px;
    }
    
    @keyframes load {
    100% {
        translate:0;
    }
}
`;




export const Cell = styled.div<{color?:string, size?:number}>`
    height: ${unit};
    height:100%;
    ${p => {
    if (p.size) return `width:calc(${p.size} * ${unit});`
    else return `width:calc(${size} * ${unit});`
}}
        
    ${p => {
    if (p.color) return `background-color:${p.color};`
    else return `background-color:grey;`
}}
    border-radius:1000px;
`;


