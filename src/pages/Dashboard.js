import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import { connect } from 'react-redux';
const Dashboard = () => {
  return (
    <main>
      <Search/>
      <Info/>
      <Repos/>
      <User/>
      <Navbar/>
    </main>
  );
};
const mapStateToProps = state => {
  console.log(state);
}
export default connect(mapStateToProps)(Dashboard);
