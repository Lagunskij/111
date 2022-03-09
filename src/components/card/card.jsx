import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getContributors, getCurrentRepo} from "../actions/repos";
import './card.css'

export const Card = (props) => {

    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({owner: {}})
    const [contributors, setContributors] = useState([])

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])

    return (
        <div>
            <button onClick={() => props.history.goBack()}>BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt={'avatar'}/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) =>
                <div>{index + 1}. {c.login}
                </div>
            )}
        </div>
    );
};
