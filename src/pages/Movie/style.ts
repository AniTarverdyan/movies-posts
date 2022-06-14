import styled from "styled-components";

const MovieContent = styled.div`
margin: 40px;
`

const Title = styled.h2`
position: relative;
left: 450px;
`

const Poster = styled.img`
width: 80%;
padding: 0 20px;
display: flex !important;
justify-content: flex-start !important;
margin: 80px;
`

export const Style = {
    MovieContent,
    Title,
    Poster
}