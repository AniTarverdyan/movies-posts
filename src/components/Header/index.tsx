import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputBase } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { moviesStore } from '../../mobx/moviesStore';
import Styled from "./style";
import { IFilterValue } from './type';

const Header: FC<IFilterValue> = ({ setFilterValue }, page) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        moviesStore.getMovies(page);
    }, [page]);


    const changeInputvalue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const filterMovies = () => {
        setFilterValue(inputValue);
    };

    const filtermMviesByEnterKey = (ev: any) => {
        if (ev.key === "Enter") {
            ev.preventDefault();
            filterMovies()
        }
    }
    return <Styled.Header>
        <Styled.Title >
            <NavLink to='/'>
                React Movie Posters
            </NavLink>
        </Styled.Title>
        {moviesStore.showSearchField ? (
            <Styled.Input>
                <InputBase
                    placeholder="Search"
                    onChange={changeInputvalue}
                    onKeyPress={filtermMviesByEnterKey}
                    value={inputValue}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={filterMovies}>
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Styled.Input>
        ) : ''

        }
    </Styled.Header>
};
export default Header;