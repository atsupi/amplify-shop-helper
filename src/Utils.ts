import { API, Storage, graphqlOperation } from "aws-amplify";
import { getItem, listItems, listPurchases } from "./graphql/queries";
import { updateItem, updatePurchase } from "./graphql/mutations";
import { Item, ItemWithCheck, Purchase } from "./types";

export async function getPresignedUrl(key: any) {
  const presignedUrl = await Storage.get(key, { level: "public" });
  return presignedUrl;
}

type getListReturnValue = {
  data: {listItems: { items: Item[]; }}
}
export const getList = async (nextToken = null): Promise<getListReturnValue> => {
  const res: Promise<getListReturnValue> = <Promise<getListReturnValue>>await API.graphql(
    graphqlOperation(listItems, {
      nextToken: nextToken,
    })
  );
  return res;
};

type fetchItemReturnValue = {
  data: {getItem: ItemWithCheck}
}

export const fetchItem = async (itemID: string): Promise<fetchItemReturnValue> => {
  const res: Promise<fetchItemReturnValue> = <Promise<fetchItemReturnValue>>await API.graphql(graphqlOperation(getItem, { id: itemID }));
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

type fetchPurchasesReturnValue = {
  data: { listPurchases: { items: Purchase[] }}
}
export const fetchPurchases = async (): Promise<fetchPurchasesReturnValue> => {
  const res: Promise<fetchPurchasesReturnValue> = <Promise<fetchPurchasesReturnValue>>await API.graphql(graphqlOperation(listPurchases));
  return res;
};

export const mutatePurchase = async (targetPurchase: Purchase) => {
  const res = await API.graphql(
    graphqlOperation(updatePurchase, {
      input: targetPurchase,
    })
  );
  return res;
};
