import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from 'react';
import RepoTile from './RepoTile'

const ReactQuiz = () => (
  <Query
    query = {gql `
      {
        search(query: "react quiz", first: 100, type: REPOSITORY) {
          edges {
            node {
              ...on Repository {
                name
                url
                owner {
                  login
                }
                createdAt
              }
            }
          }
        }
      }
    `}
  >
  {({ loading, error, data }) => {
    if (loading) return <p> I'm givin' it all I've got!!<span role="img" aria-label="hour glass">⏳</span>... </p>;
    if (error) return <p> Error: ( </p>;

      console.log(data.search.edges)
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
  </Query>
);

export default ReactQuiz;
