import styled from "styled-components";

const Header = styled.div`
display: flex;
height: 80px;
width: 100%;
background-color: cadetBlue;
position: fixed;
z-index: 1;
`

const Title = styled.h2`
color: currentColor;
align-items: center;
margin:  20px;
cursor: pointer;
font-weight: lighter;
`

export default {
    Header,
    Title,
};
