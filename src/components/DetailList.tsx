import { useEffect, useState } from "react";
import "./DetailList.css";
import { ItemWithCheck, Purchase } from "./types";
import { fetchItem, fetchPurchases, mutatePurchase } from "./Utils";
import DetailItem from "./DetailItem";

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
    mutatePurchase(targetPurchase);
  };

  return (
    <>
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
