import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = ({repos}) => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D repos={repos}/>
        <Column3D repos={repos}/>
        <Doughnut2D repos={repos}/>
        <Bar3D repos={repos}/>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

const mapStateToProps = state => {
  return {repos: state.repos}
}

export default connect(mapStateToProps)(Repos);
