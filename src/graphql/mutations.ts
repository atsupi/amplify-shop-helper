/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
    id
    imagefile
    price
    username
    description
    isInCart
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
    id
    imagefile
    price
    username
    description
    isInCart
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
    id
    imagefile
    price
    username
    description
    isInCart
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const createPurchase = /* GraphQL */ `mutation CreatePurchase(
  $input: CreatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  createPurchase(input: $input, condition: $condition) {
    id
    itemID
    username
    numberOfItems
    isPurchased
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePurchaseMutationVariables,
  APITypes.CreatePurchaseMutation
>;
export const deletePurchase = /* GraphQL */ `mutation DeletePurchase(
  $input: DeletePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  deletePurchase(input: $input, condition: $condition) {
    id
    itemID
    username
    numberOfItems
    isPurchased
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePurchaseMutationVariables,
  APITypes.DeletePurchaseMutation
>;
export const updatePurchase = /* GraphQL */ `mutation UpdatePurchase(
  $input: UpdatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  updatePurchase(input: $input, condition: $condition) {
    id
    itemID
    username
    numberOfItems
    isPurchased
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePurchaseMutationVariables,
  APITypes.UpdatePurchaseMutation
>;
