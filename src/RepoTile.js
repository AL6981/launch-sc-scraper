import React from 'react';

const RepoTile = (props) => {
  return(
    <div>
      Repo Owner: {props.repoOwner}  URL: <a href={props.repoUrl}>{props.repoName}</a>
      <br></br>
      Created On: {props.repoDate}
      <br></br>
      <br></br>
    </div>
  )
}

export default RepoTile;