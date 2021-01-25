import React, { useState, useEffect, createContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import reducer from './reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootUrl = 'https://api.github.com';

export const store = createStore(reducer, {text: 'hello'})
const GithubContext = createContext()

const GitHubProvider = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}
export {GithubContext, GitHubProvider}