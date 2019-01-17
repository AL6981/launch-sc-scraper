import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CohortStatistics from './CohortStatistics'
import GroceryList from './GroceryList'
import ReactQuiz from './ReactQuiz'
import ReactSimpleBlog from './ReactSimpleBlog'
import ProjectPlannerOnline from './ProjectPlannerOnline'
import RestaurantReviewsBoston from './RestaurantReviewsBoston'
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";

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
        <h4>Week 1 Cohort Statistics</h4>
        <CohortStatistics />
        <h4>Week 2 Grocery List Sinatra</h4>
        <GroceryList />
        <h4>Week 3 React Quiz</h4>
        <ReactQuiz />
        <h4>Week 4 React Simple Blog</h4>
        <ReactSimpleBlog />
        <h4>Week 5 Project Planner Online</h4>
        <ProjectPlannerOnline />
        <h4>Week 6 Restaurant Reviews Boston</h4>
        <RestaurantReviewsBoston />
      </div>
    </div> 
  </ApolloProvider>
)

ReactDOM.render(<Index />, document.getElementById('root'));


serviceWorker.unregister();
