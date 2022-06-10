import styled from "styled-components";

const Main = styled.div`
display: flex;

`

const Input = styled.input`
display: flex;
justify-content: center;
margin: 20px;
width: 400px;
height: 20px
`

const Movies = styled.div`
display: inline-block;
position: relative;
width: 400px;
height: 400px;
vertical-align: middle;
padding: 5px;

`
const Title = styled.div`
margin: 10px;
`

const Image = styled.img`
display: flex;
justify-content: space-between;
`

const Year = styled.div`
margin: 10px
`

export const Styled = {
    Main,
    Input,
    Movies,
    Title,
    Year,
    Image,
}