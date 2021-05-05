import styled from 'styled-components';

export const Back = styled.img`
    height:400px;
    width:100%;
    display: list-item;
    @media (max-width: 765px) {
        height:500px;
  }
`;
export const BackImg = styled.div`
    position:absolute;
    left:0;
    z-index:0;
    @media (max-width: 767px){
        display:none;
    }
`;

export const Logo = styled.img`
     width:150px;
     margin-bottom:2px;
`;

export const Copyright =styled.p`
    display:flex;
    flex-wrap:wrap;
    color:white;
    text-align:left;
    margin: 0.4rem 3rem;
    @media (max-width: 767px){
    text-align:center;
    }
`; 