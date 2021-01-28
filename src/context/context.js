import React from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import reducer from './reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialStore = {githubUser: mockUser, repos: mockRepos, followers: mockFollowers, searchQuery: '', isSubmit: 0, isLoading: true, isError: false, errorMsg: ''}

const store = createStore(reducer, initialStore)

const GitHubProvider = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}
export default GitHubProvider;