import { useEffect, useState } from "react";
import "./CartItem.css";
import { Item } from "../types";
import { fetchItem, getPresignedUrl } from "../Utils";
import { Button } from "@aws-amplify/ui-react";
import { updateItemStatus } from "../Utils";

function CartItem({ itemID }) {
  const [curItem, setCurItem] = useState<Item>();
  const [presignedUrl, setPresignedUrl] = useState("");

  useEffect(() => {
    if (itemID) {
      fetchItem(itemID).then((data) => {
        setCurItem(data.data.getItem);
        getPresignedUrl(data.data.getItem?.imagefile).then((res) => {
          setPresignedUrl(res);
        });
      });
    }
  }, []);

  const deleteCurrentItem = () => {
    console.log(curItem);
    curItem.isInCart = 0;
    updateItemStatus(curItem);
    window.location.reload();
  };

  return (
    <>
      <div className="CartItem_div">
        {presignedUrl !== "" && (
          <img src={presignedUrl} width="60" height="80" />
        )}
        <div className="CartItem_description">{curItem?.description}</div>
        <div className="CartItem_price">{curItem?.price} JPY</div>
        <div className="DeleteButton">
          <Button onClick={deleteCurrentItem}>Delete</Button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
