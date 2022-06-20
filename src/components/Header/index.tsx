import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputBase } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { store } from '../../mobx/store';
import Styled from "./style";
export interface IFilterValue {
    setFilterValue: (inputValue: string) => void,
}
const Header: FC<IFilterValue> = ({ setFilterValue }, page) => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        store.getMovies(page);
    }, [page]);

    const goToHomePage = () => {
        navigate('/');
    }

    const changeInputvalue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const filterMovies = () => {
        setFilterValue(inputValue);
    };

    return <Styled.Header>
        <Styled.Title onClick={goToHomePage}>
            React Movie Posters
        </Styled.Title>
        {store.showSearchField ? (
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
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={filterMovies}>
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </div>
        ) : ''

        }
    </Styled.Header>
};
export default Header;