import styled from "styled-components";

const Main = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 20px; 
width: 80%
`
const Content = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`
const Input = styled.div`
display: flex;
align-items: center
`

const Movies = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 20px
`
const Title = styled.div`
display: flex;
justify-content: center
`

const Image = styled.img`


`

const Year = styled.div`

`

export const Styled = {
    Main,
    Input,
    Movies,
    Title,
    Year,
    Image,
    Content,
}