import { useEffect, useState } from "react";
import "./CartItem.css";
import { Item } from "./types";
import { fetchItem, getPresignedUrl } from "./Utils";

function CartItem({ itemID }) {
  const [curItem, setCurItem] = useState<Item>();
  const [presignedUrl, setPresignedUrl] = useState("");

  useEffect(() => {
    if (itemID) {
      fetchItem(itemID).then((data) => {
        console.log("fetchItem", data);
        setCurItem(data.data.getItem);
      });
      getPresignedUrl(curItem?.imagefile).then((res) => {
        console.log("getpresignedUrl", res);
        setPresignedUrl(res);
      });
    }
  }, []);

  return (
    <>
      <p>Cart Item</p>
      {presignedUrl !== "" && <img src={presignedUrl} width="80" height="120" />}
      <p>{curItem?.description}</p>
      <p>{curItem?.price}</p>
    </>
  );
}

export default CartItem;
