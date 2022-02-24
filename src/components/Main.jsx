import React, {useEffect} from "react";
import  './main.css'
import {useDispatch, useSelector} from "react-redux";

import {Repo} from "./repo/Repo";
import {getRepos} from "./actions/repos";


export const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)

    useEffect(() => {
            dispatch(getRepos())
        },
        [dispatch])


    return (
        <div>

            {repos.map(repo => <Repo repo={repo}/>)}

        </div>
    )

};
