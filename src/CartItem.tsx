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
        setCurItem(data.data.getItem);
      });
      getPresignedUrl(curItem?.imagefile).then((res) => {
        setPresignedUrl(res);
      });
    }
  }, []);

  return (
    <>
      {presignedUrl !== "" && <img src={presignedUrl} width="80" height="120" />}
      <p>{curItem?.description}</p>
      <p>{curItem?.price}</p>
    </>
  );
}

export default CartItem;
