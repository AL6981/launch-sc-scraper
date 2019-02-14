import gql from "graphql-tag";


const PROJECT_PLANNER = gql `
      {
        search(query: "project planner online", first: 100, type: REPOSITORY) {
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
    `

const COHORT_STATS = gql `
      {
        search(query: "cohort statistics", first: 100, type: REPOSITORY) {
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
    `

  const GROCERY_LIST = gql `
      {
        search(query: "grocery list sinatra", first: 100, type: REPOSITORY) {
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
    `

const REACT_QUIZ = gql `
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
    `

const REACT_BLOG = gql `
      {
        search(query: "react simple blog", first: 100, type: REPOSITORY) {
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
    `

const RESTAURANT_REVIEWS = gql `
      {
        search(query: "restaurant reviews boston", first: 100, type: REPOSITORY) {
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
    `

const queries = [ COHORT_STATS, GROCERY_LIST, REACT_QUIZ, REACT_BLOG, PROJECT_PLANNER, RESTAURANT_REVIEWS ]

export default queries


