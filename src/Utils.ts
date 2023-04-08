import { API, Storage, graphqlOperation } from "aws-amplify";
import { getItem, listItems, listPurchases } from "./graphql/queries";
import { updateItem, updatePurchase } from "./graphql/mutations";
import { Item, Purchase } from "./types";

export async function getPresignedUrl(key: any) {
  const presignedUrl = await Storage.get(key, { level: "public" });
  return presignedUrl;
}

export const getList = async (nextToken = null) => {
  const res = await API.graphql(
    graphqlOperation(listItems, {
      nextToken: nextToken,
    })
  );
  return res;
};

export const fetchItem = async (itemID: string) => {
  const res = await API.graphql(graphqlOperation(getItem, { id: itemID }));
  return res;
};

export async function updateItemStatus(item: Item) {
  try {
    const res = await API.graphql(
      graphqlOperation(updateItem, { input: item })
    );
  } catch (event) {
    console.log(event);
  }
}

export const fetchPurchases = async () => {
  const res = await API.graphql(graphqlOperation(listPurchases));
  return res;
};

export const mutatePurchase = async (targetPurchase: Purchase) => {
  const res = await API.graphql(
    graphqlOperation(updatePurchase, {
      id: targetPurchase.id,
      input: targetPurchase,
    })
  );
  return res;
};
