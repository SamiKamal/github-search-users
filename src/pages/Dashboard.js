import React, { useEffect } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import axios from 'axios';
import { connect } from 'react-redux';

const Dashboard = (store) => {
  useEffect(() => {
    store.dispatch({type: 'LOADING', payload: 'ON'})
    let userGithub = axios(`https://api.github.com/users/${store.searchQuery || 'wesbos'}`).then(res => res)
    let reposGithub = axios.get(`https://api.github.com/users/${store.searchQuery || 'wesbos' }/repos?per_page=100`)
    let followersGithub = axios.get(`https://api.github.com/users/${store.searchQuery || 'wesbos'}/followers`)
    let limitGithub = axios.get(`https://api.github.com/rate_limit`)

    Promise.all([userGithub, reposGithub, followersGithub, limitGithub]).then(values => {
        console.log(values);
        store.dispatch({type: 'SET_GITHUB_DATA', payload: {user: values[0].data, repos: values[1].data, followers: values[2].data, limit: values[3].data}})
    }).catch(err => {
      if (err){
        store.limit ? store.dispatch({type: 'SET_ERROR', payload: 'User Not Found'}) : store.dispatch({type: 'SET_ERROR', payload: 'You exceeded the request limt!'})
        store.dispatch({type: 'LOADING', payload: 'OFF'})
      }
    })
}, [store.isSubmit])
return (
    <main>
      <Navbar/>
      <Search/>
      {store.isLoading ? (
        <img src={loadingImage} className="loading-img" alt="Loading Image"/>
      ) : (
        <>
          <Info/>
          <User/>
          <Repos/>
        </>
      )}
    </main>
  );
};

export default connect(s => s)(Dashboard)