/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateItemInput = {
  id?: string | null,
  imagefile?: string | null,
  price: number,
  username: string,
  description: string,
  isInCart: number,
  purchaseItemIDId?: string | null,
};

export type ModelItemConditionInput = {
  imagefile?: ModelStringInput | null,
  price?: ModelIntInput | null,
  username?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isInCart?: ModelIntInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
  purchaseItemIDId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Item = {
  __typename: "Item",
  id?: string | null,
  imagefile?: string | null,
  price: number,
  username: string,
  description: string,
  isInCart: number,
  purchaseItemIDId?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type UpdateItemInput = {
  id: string,
  imagefile?: string | null,
  price?: number | null,
  username?: string | null,
  description?: string | null,
  isInCart?: number | null,
  purchaseItemIDId?: string | null,
};

export type CreatePurchaseInput = {
  id?: string | null,
  username: string,
  numberOfItems: number,
  isPurchased?: Array< number | null > | null,
};

export type ModelPurchaseConditionInput = {
  username?: ModelStringInput | null,
  numberOfItems?: ModelIntInput | null,
  isPurchased?: ModelIntInput | null,
  and?: Array< ModelPurchaseConditionInput | null > | null,
  or?: Array< ModelPurchaseConditionInput | null > | null,
  not?: ModelPurchaseConditionInput | null,
};

export type Purchase = {
  __typename: "Purchase",
  id?: string | null,
  itemID?: ModelItemConnection | null,
  username: string,
  numberOfItems: number,
  isPurchased?: Array< number | null > | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type DeletePurchaseInput = {
  id: string,
};

export type UpdatePurchaseInput = {
  id: string,
  username?: string | null,
  numberOfItems?: number | null,
  isPurchased?: Array< number | null > | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  imagefile?: ModelStringInput | null,
  price?: ModelIntInput | null,
  username?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isInCart?: ModelIntInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
  purchaseItemIDId?: ModelIDInput | null,
};

export type ModelPurchaseFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  numberOfItems?: ModelIntInput | null,
  isPurchased?: ModelIntInput | null,
  and?: Array< ModelPurchaseFilterInput | null > | null,
  or?: Array< ModelPurchaseFilterInput | null > | null,
  not?: ModelPurchaseFilterInput | null,
};

export type ModelPurchaseConnection = {
  __typename: "ModelPurchaseConnection",
  items:  Array<Purchase | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imagefile?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  isInCart?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPurchaseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  numberOfItems?: ModelSubscriptionIntInput | null,
  isPurchased?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
  or?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id?: string | null,
    imagefile?: string | null,
    price: number,
    username: string,
    description: string,
    isInCart: number,
    purchaseItemIDId?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id?: string | null,
    imagefile?: string | null,
    price: number,
    username: string,
    description: string,
    isInCart: number,
    purchaseItemIDId?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id?: string | null,
    imagefile?: string | null,
    price: number,
    username: string,
    description: string,
    isInCart: number,
    purchaseItemIDId?: string | null,
  } | null,
};

export type CreatePurchaseMutationVariables = {
  input: CreatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type CreatePurchaseMutation = {
  createPurchase?:  {
    __typename: "Purchase",
    id?: string | null,
    itemID?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id?: string | null,
        imagefile?: string | null,
        price: number,
        username: string,
        description: string,
        isInCart: number,
        purchaseItemIDId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    numberOfItems: number,
    isPurchased?: Array< number | null > | null,
  } | null,
};

export type DeletePurchaseMutationVariables = {
  input: DeletePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type DeletePurchaseMutation = {
  deletePurchase?:  {
    __typename: "Purchase",
    id?: string | null,
    itemID?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id?: string | null,
        imagefile?: string | null,
        price: number,
        username: string,
        description: string,
        isInCart: number,
        purchaseItemIDId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    numberOfItems: number,
    isPurchased?: Array< number | null > | null,
  } | null,
};

export type UpdatePurchaseMutationVariables = {
  input: UpdatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type UpdatePurchaseMutation = {
  updatePurchase?:  {
    __typename: "Purchase",
    id?: string | null,
    itemID?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id?: string | null,
        imagefile?: string | null,
        price: number,
        username: string,
        description: string,
        isInCart: number,
        purchaseItemIDId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    numberOfItems: number,
    isPurchased?: Array< number | null > | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id?: string | null,
    imagefile?: string | null,
    price: number,
    username: string,
    description: string,
    isInCart: number,
    purchaseItemIDId?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id?: string | null,
      imagefile?: string | null,
      price: number,
      username: string,
      description: string,
      isInCart: number,
      purchaseItemIDId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPurchaseQueryVariables = {
  id: string,
};

export type GetPurchaseQuery = {
  getPurchase?:  {
    __typename: "Purchase",
    id?: string | null,
    itemID?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id?: string | null,
        imagefile?: string | null,
        price: number,
        username: string,
        description: string,
        isInCart: number,
        purchaseItemIDId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    numberOfItems: number,
    isPurchased?: Array< number | null > | null,
  } | null,
};

export type ListPurchasesQueryVariables = {
  filter?: ModelPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchasesQuery = {
  listPurchases?:  {
    __typename: "ModelPurchaseConnection",
    items:  Array< {
      __typename: "Purchase",
      id?: string | null,
      itemID?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      username: string,
      numberOfItems: number,
      isPurchased?: Array< number | null > | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id?: string | null,
    imagefile?: string | null,
    price: number,
    username: string,
    description: string,
    isInCart: number,
    purchaseItemIDId?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id?: string | null,
    imagefile?: string | null,
    price: number,
    username: string,
    description: string,
    isInCart: number,
    purchaseItemIDId?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id?: string | null,
    imagefile?: string | null,
    price: number,
    username: string,
    description: string,
    isInCart: number,
    purchaseItemIDId?: string | null,
  } | null,
};

export type OnCreatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnCreatePurchaseSubscription = {
  onCreatePurchase?:  {
    __typename: "Purchase",
    id?: string | null,
    itemID?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id?: string | null,
        imagefile?: string | null,
        price: number,
        username: string,
        description: string,
        isInCart: number,
        purchaseItemIDId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    numberOfItems: number,
    isPurchased?: Array< number | null > | null,
  } | null,
};

export type OnUpdatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnUpdatePurchaseSubscription = {
  onUpdatePurchase?:  {
    __typename: "Purchase",
    id?: string | null,
    itemID?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id?: string | null,
        imagefile?: string | null,
        price: number,
        username: string,
        description: string,
        isInCart: number,
        purchaseItemIDId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    numberOfItems: number,
    isPurchased?: Array< number | null > | null,
  } | null,
};

export type OnDeletePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnDeletePurchaseSubscription = {
  onDeletePurchase?:  {
    __typename: "Purchase",
    id?: string | null,
    itemID?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id?: string | null,
        imagefile?: string | null,
        price: number,
        username: string,
        description: string,
        isInCart: number,
        purchaseItemIDId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    numberOfItems: number,
    isPurchased?: Array< number | null > | null,
  } | null,
};
