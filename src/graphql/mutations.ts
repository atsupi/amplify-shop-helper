/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
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
      createdAt
      updatedAt
      purchaseItemIDId
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
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
      createdAt
      updatedAt
      purchaseItemIDId
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
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
      createdAt
      updatedAt
      purchaseItemIDId
    }
  }
`;
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
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
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
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
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
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
