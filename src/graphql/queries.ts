/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      imagefile
      price
      username
      description
      isInCart
      createdAt
      updatedAt
      purchaseItemIDId
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
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
        createdAt
        updatedAt
        purchaseItemIDId
      }
      nextToken
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
      id
      itemID {
        items {
          id
          imagefile
          price
          username
          description
          isInCart
          createdAt
          updatedAt
          purchaseItemIDId
        }
        nextToken
      }
      username
      numberOfItems
      isPurchased
      createdAt
      updatedAt
    }
  }
`;
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemID {
          nextToken
        }
        username
        numberOfItems
        isPurchased
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
