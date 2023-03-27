/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
      id
      imagefile
      price
      username
      description
      isInCart
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
      id
      imagefile
      price
      username
      description
      isInCart
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
      id
      imagefile
      price
      username
      description
      isInCart
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onCreatePurchase(filter: $filter) {
      id
      itemID {
        id
        imagefile
        price
        username
        description
        isInCart
        createdAt
        updatedAt
      }
      numberOfItems
      isPurchased
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onUpdatePurchase(filter: $filter) {
      id
      itemID {
        id
        imagefile
        price
        username
        description
        isInCart
        createdAt
        updatedAt
      }
      numberOfItems
      isPurchased
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onDeletePurchase(filter: $filter) {
      id
      itemID {
        id
        imagefile
        price
        username
        description
        isInCart
        createdAt
        updatedAt
      }
      numberOfItems
      isPurchased
      createdAt
      updatedAt
    }
  }
`;
