import { gql } from "apollo-server-fastify";

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    ingredient(id: ID!): Ingredient
    ingredients: [Ingredient]
    seasoning(id: ID!): Seasoning
    seasonings: [Seasoning]
  }

  type Mutation {
    createIngredient(name: String!): Ingredient
    createMenu(input: CreateMenuInput!): Menu
    createSeasoning(name: String!): Seasoning
    deleteIngredient(name: String!): Boolean
    deleteMenu(id: ID!): Boolean
    deleteSeasoning(name: String!): Boolean
    updateIngredient(id: ID)!: Ingredient
    updateMenu(input: UpdateMenu!): Menu
    updateSeasoning(id: ID)!: Seasoning
  }

  type Ingredient {
    id: ID!
    name: String!
  }

  type Menu {
    id: ID!
    name: String!
    description: String
    ingredients: [Ingredient]
    seasonings: [Seasoning]
    creator: User
    createdAt: String!
    updatedAt: String!
  }

  type Seasoning {
    id: ID!
    name: String!
  }

  type User {
    name: String!
  }

  input CreateMenuInput {
    name: String!
    description: String
    IngredientIds: [ID!]
    seasoning: [ID!]
  }

  input UpdateMenu {
    name: String
    description: String
    addIngredientIds: [ID!]
    removeIngredientIds: [ID!]
    addSeasoningIds: [ID!]
    removeSeasoningIds: [ID!]
  }
`;
