import React, {useEffect, useState} from "react";
import './main.css'
import {useDispatch, useSelector} from "react-redux";

import {Repo} from "./repo/Repo";
import {getRepos} from "./actions/repos";
import {setCurrentPage} from "../reducers/reposReducer";
import {createPages} from "../utils/pagesCreator";


export const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)

    const [searchValue, setSearchValue] = useState('')

    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)


    useEffect(() => {
            dispatch(getRepos(searchValue, currentPage, perPage))
        },
        [currentPage])

    function searchHandler(e) {
        dispatch(setCurrentPage(1))
        let inp = e.target.value
        setSearchValue(inp)
        dispatch(getRepos(searchValue, currentPage, perPage))
    }



    return (
        <div>
            <div className={'search'}>
                <input value={searchValue} onChange={searchHandler} type={'text'} placeholder={'Input repo name'} className='search-input'/>
                {/*<button className="search-btn">Search</button>*/}
            </div>

            {
                isFetching === false
                    ?
                repos.map(repo => <Repo repo={repo}/>)
                    :
                    <div className={'fetching'}>

                    </div>
            }
            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>

        </div>
    )

};
