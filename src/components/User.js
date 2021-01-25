import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
const User = ({user, followers}) => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card {...user}/>
        <Followers followers={followers}/>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

const mapStateToProps = state => {
  const {githubUser, followers} = state
  return {
    user: githubUser,
    followers
  }
}

export default connect(mapStateToProps)(User);
