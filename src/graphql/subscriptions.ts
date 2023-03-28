/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem(
    $filter: ModelSubscriptionItemFilterInput
    $username: String
  ) {
    onCreateItem(filter: $filter, username: $username) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem(
    $filter: ModelSubscriptionItemFilterInput
    $username: String
  ) {
    onUpdateItem(filter: $filter, username: $username) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem(
    $filter: ModelSubscriptionItemFilterInput
    $username: String
  ) {
    onDeleteItem(filter: $filter, username: $username) {
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
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $username: String
  ) {
    onCreatePurchase(filter: $filter, username: $username) {
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $username: String
  ) {
    onUpdatePurchase(filter: $filter, username: $username) {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase(
    $filter: ModelSubscriptionPurchaseFilterInput
    $username: String
  ) {
    onDeletePurchase(filter: $filter, username: $username) {
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
