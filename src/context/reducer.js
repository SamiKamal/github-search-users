const reducer =  (state, action) => {
    const {type, payload} = action
    if (type === 'CHANGE_SEARCH'){
        return {...state, searchQuery: payload}
    } else if (type === 'SET_GITHUB_DATA'){
        return {...state, githubUser: payload.user, repos: payload.repos, followers: payload.followers, limit: payload.limit, isLoading: false}
    } else if (type === 'TOGGLE_SEARCH'){
        console.log('hola');
        return  {...state, isSubmit: state.isSubmit + 1}
    } else if (type === 'LOADING'){
        if (payload === 'ON'){
            return {...state, isLoading: true}
        } else {
            return {...state, isLoading: false}
        }
    } else if (type === 'SET_ERROR'){
        return {...state, isError: true, errorMsg: payload}
    }
    return state
}
export default reducer