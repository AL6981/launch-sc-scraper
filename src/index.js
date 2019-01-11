import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

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

const Index = () => ( 
  <ApolloProvider client = {client} >
    <div>
      <h2> Github System Check Scraper <span role = "img" aria-label="rocket"> 🚀 </span> </h2>
      <div className="list">
        <h4>New Repos of Concern</h4>
        <p>list goes here</p>
      </div>
    </div> 
  </ApolloProvider>
)

ReactDOM.render(<Index />, document.getElementById('root'));

client.query(
  {
    query: gql `
      {
        search(query: "Launch Academy", first: 100, type: REPOSITORY) {
          edges {
            node {
              ...on Repository {
                name
              }
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result));

serviceWorker.unregister();
