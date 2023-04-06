import { API, Storage, graphqlOperation } from "aws-amplify";
import { getItem, listItems } from "./graphql/queries";

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
