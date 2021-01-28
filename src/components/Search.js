import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';
const Search = ({change, searchQuery, isSubmit, limit, isError, errorMsg, setError}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    isSubmit()
  }
  if (limit?.rate?.remaining === 0) {
    setError()
  }
  return (
    <section className="section">
      <Wrapper className="section-center">
      {isError && (
        <ErrorWrapper>
          <p>{errorMsg}</p>
        </ErrorWrapper>
      )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch/>
            <input type="text" value={searchQuery} onChange={(e) => change(e.target.value)} placeholder="Enter Github User"/>
            <button type="submit">search</button>
          </div>
        </form>
        <h3>requests: {limit?.rate?.remaining || 0} / {limit?.rate?.limit || 60}</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    change: (value) => dispatch({type: 'CHANGE_SEARCH', payload: value}),
    isSubmit: () => dispatch({type: 'TOGGLE_SEARCH'}),
    setError: () => dispatch({type: 'SET_ERROR', payload: 'You exceeded the request limt!'})
  }
}

const mapStateToProps = state => {
  let {searchQuery, limit, isError, errorMsg} = state
  return {searchQuery, limit, isError, errorMsg}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
