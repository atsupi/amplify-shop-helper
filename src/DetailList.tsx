import { Checkbox } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import "./DetailList.css";
import { getItem, listPurchases } from "./graphql/queries";
import { ItemWithCheck, Purchase } from "./types";
import { getPresignedUrl } from "./Utils";
import DetailItem from "./DetailItem";
import { updatePurchase } from "./graphql/mutations";

const fetchItem = async (itemID: string) => {
  const res = await API.graphql(graphqlOperation(getItem, { id: itemID }));
  return res;
};

const fetchPurchases = async () => {
  const res = await API.graphql(graphqlOperation(listPurchases));
  return res;
};

const mutationPurchase = async (targetPurchase) => {
  const res = await API.graphql(
    graphqlOperation(updatePurchase, {
      id: targetPurchase.id,
      input: targetPurchase,
    })
  );
  return res;
};

function DetailList({ pindex }) {
  const [items, setItems] = useState(Array<ItemWithCheck>);
  const [targetPurchase, setTargetPurchase] = useState<Purchase>();

  useEffect(() => {
    //    let targetPurchase: Purchase;
    let purchases: Array<Purchase> = [];
    fetchPurchases().then((res) => {
      purchases = res.data.listPurchases.items;
      setTargetPurchase(purchases[pindex - 1]);
      let newItems: Array<ItemWithCheck> = [];
      let index = 0;
      purchases[pindex - 1].itemID.map((item) => {
        fetchItem(item).then((data) => {
          const newItem: ItemWithCheck = data.data.getItem;
          newItem.isPurchased = purchases[pindex - 1].isPurchased[index];
          newItem.index = index;
          newItems = [...newItems, newItem];
          setItems(newItems);
          index = index + 1;
        });
      });
    });
  }, []);

  const onChangeCheckbox = (event) => {
    const index = parseInt(event.target.ariaLabel);
    targetPurchase.isPurchased[index] = items[index].isPurchased;
    mutationPurchase(targetPurchase);
  };

  return (
    <>
      <p>DetailList</p>
      <div className="DetailList_wrapper">
        {items.map((item) => {
          return (
            <div className="DetailItem_wrapper" key={item.id}>
              <DetailItem item={item} onChange={onChangeCheckbox} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DetailList;
