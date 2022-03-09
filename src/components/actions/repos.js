import axios from "axios";
import {setFetchError, setIsFetching, setRepos} from "../../reducers/reposReducer";


export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {

    if (searchQuery === "") {
        searchQuery = "stars:%3E1"
    }

    return async (dispatch) => {
        try {
            dispatch(setIsFetching(false))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&per_page=${perPage}&page=${currentPage}`)
            dispatch(setRepos(response.data))
        } catch (e) {
            dispatch(setFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout(() => {
                dispatch(setFetchError(false))
            }, 2000)
        }

    }
}


export const getCurrentRepo = async (userName, repoName, setRepo) => {

    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
    setRepo(response.data)


}
export const getContributors = async (userName, repoName, setContributors) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`)
    setContributors(response.data)
}
