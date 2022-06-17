import styled from "styled-components";

const Main = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 10px; 
width: 100%;
`

const Content = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`

const Movies = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 15px;
width: 300px;
height: 700px;
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
font-weight: bolder;
font-size: 25px;
cursor: pointer;
width: 300px;
word-wrap: break-word;
color: cadetBlue;
:hover {
    text-decoration: underline
}
`

const Image = styled.img`
border-radius: 2%;
height: 500px;
`

const Year = styled.div`
margin: 10px;
align-items: center;
`

const Pages = styled.div`
margin: 25px;
`

export const Styled = {
    Main,
    Movies,
    Title,
    Year,
    Image,
    Content,
    Pages
}