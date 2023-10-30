/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
    id
    imagefile
    price
    username
    description
    isInCart
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
    id
    imagefile
    price
    username
    description
    isInCart
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
    id
    imagefile
    price
    username
    description
    isInCart
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onCreatePurchase = /* GraphQL */ `subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onCreatePurchase(filter: $filter) {
    id
    itemID
    username
    numberOfItems
    isPurchased
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePurchaseSubscriptionVariables,
  APITypes.OnCreatePurchaseSubscription
>;
export const onUpdatePurchase = /* GraphQL */ `subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onUpdatePurchase(filter: $filter) {
    id
    itemID
    username
    numberOfItems
    isPurchased
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePurchaseSubscriptionVariables,
  APITypes.OnUpdatePurchaseSubscription
>;
export const onDeletePurchase = /* GraphQL */ `subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onDeletePurchase(filter: $filter) {
    id
    itemID
    username
    numberOfItems
    isPurchased
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePurchaseSubscriptionVariables,
  APITypes.OnDeletePurchaseSubscription
>;
