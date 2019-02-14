import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import queries from './constants';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import RepoTile from './RepoTile'


const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  fetchOptions: {
    credentials: 'include'
  },
  request: async (operation) => {
    const token = `Bearer ${process.env.REACT_APP_TOKEN}`
    operation.setContext({
      headers: {
        authorization: token
      }
    })  
  }
})

const Index = (props) => { 
  const queryComponents = queries.map((query) => {
    return (
      <Query query = {query}>
        {({ loading, error, data }) => {
          if (loading) {
            return (<p> I'm givin' it all I've got!!<span role="img" aria-label="hour glass">⏳</span>... </p>);
          }
          if (error) {
            return (<p> Error: </p>);
          }

        return data.search.edges.map((repo) => (
          <RepoTile
            key={repo.id}
            repoName={repo.node.name}
            repoOwner={repo.node.owner.login}
            repoUrl={repo.node.url}
            repoDate={repo.node.createdAt}
          />
        ));
        }}
        </Query>)
        })
  return (
  <ApolloProvider client = {client} >
    <div>
      <h2> Github System Check Scraper <span role = "img" aria-label="rocket"> 🚀 </span> </h2>
      <div id="list">
        {queryComponents}
      </div>
    </div> 
  </ApolloProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));


serviceWorker.unregister();
