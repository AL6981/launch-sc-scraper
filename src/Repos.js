import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from 'react';
import RepoTile from './RepoTile'
import { useQuery } from 'react-apollo-hooks';

const Repos = (props) => { 
  const { loading, error, data } = useQuery(props.searchQuery)

    if (loading) return <p> I'm givin' it all I've got!!<span role="img" aria-label="hour glass">⏳</span>... </p>;
    if (error) return <p> Error:  </p>;

    return data.search.edges.map((repo) => (
      <RepoTile
        key={repo.id}
        repoName={repo.node.name}
        repoOwner={repo.node.owner.login}
        repoUrl={repo.node.url}
        repoDate={repo.node.createdAt}
      />
    ));
  }

export default Repos;
