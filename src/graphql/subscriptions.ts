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
    }
  }
`;
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onCreatePurchase(filter: $filter) {
      id
      itemID
      username
      numberOfItems
      isPurchased
    }
  }
`;
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onUpdatePurchase(filter: $filter) {
      id
      itemID
      username
      numberOfItems
      isPurchased
    }
  }
`;
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onDeletePurchase(filter: $filter) {
      id
      itemID
      username
      numberOfItems
      isPurchased
    }
  }
`;
