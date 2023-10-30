/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    imagefile
    price
    username
    description
    isInCart
    __typename
  }
}
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      imagefile
      price
      username
      description
      isInCart
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const getPurchase = /* GraphQL */ `query GetPurchase($id: ID!) {
  getPurchase(id: $id) {
    id
    itemID
    username
    numberOfItems
    isPurchased
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPurchaseQueryVariables,
  APITypes.GetPurchaseQuery
>;
export const listPurchases = /* GraphQL */ `query ListPurchases(
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      itemID
      username
      numberOfItems
      isPurchased
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchasesQueryVariables,
  APITypes.ListPurchasesQuery
>;
