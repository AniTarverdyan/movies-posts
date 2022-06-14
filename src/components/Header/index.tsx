import { Divider, IconButton, InputBase } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Styled } from "./style";
import SearchIcon from '@mui/icons-material/Search';


const Header: FC = ({ setFilterValue }: any) => {
    const [inputValue, setInputValue] = useState('');

    const goToHomePage = (e: any) => {
        window.location.reload(false);
        e.preventDefault()
    }

    const changeInputvalue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const filterMovies = () => {
        setFilterValue(inputValue)
    }


    return <Styled.Header>
        <Styled.Title onClick={goToHomePage}>
            React Movie Posters
        </Styled.Title>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
            <InputBase
                placeholder="Search"
                onChange={changeInputvalue}
                onKeyPress={(ev) => {
                    if (ev.key === "Enter") {
                        ev.preventDefault();
                        filterMovies()
                    }
                }}
                value={inputValue}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={filterMovies()}>
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </div>


    </Styled.Header>
};
export default Header;