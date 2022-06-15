import styled from "styled-components";

const MovieContent = styled.div`
margin: 5px
`


const Title = styled.h2`
height: 40px;
width: 80%;
display: flex;
justify-content: center;
`

const Poster = styled.img`
position: relative;
right: 280px;
width: 500px;
height: 700px;
margin-top: 80px;
`

const Content = styled.div`
margin-top: 80px;
`

const Item = styled.div`
margin: 20px 30px;
padding: 20px;
width: 100%;
height: auto;
background-color: hsla(0,0%,86.7%,.151);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: last baseline;

`
const Div = styled.div`
margin: 10px;
display: flex;
align-items: center;
`

const ItemContent = styled.span`
margin: 10px 60px;
`
export const Styled = {
    Title,
    Poster,
    Content,
    Item,
    ItemContent,
    MovieContent,
    Div
}