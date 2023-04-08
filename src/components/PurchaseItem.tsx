import { useEffect, useState } from "react";
import "./PurchaseItem.css";
import { fetchItem, getPresignedUrl } from "../Utils";
import { Purchase } from "../types";

function PurchaseItem({ data }) {
  const [firstItem, setFirstItem] = useState({});
  const [imagefile, setImageFile] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const purchaseData: Purchase = data;

  useEffect(() => {
    const firstItem = purchaseData?.itemID[0];
    fetchItem(firstItem).then((res) => {
      setFirstItem(res.data.getItem);
      getPresignedUrl(res.data.getItem.imagefile).then((image) => {
        setImageFile(image);
      });
    });
    purchaseData.itemID.map((itemID) => {
      fetchItem(itemID).then((res) => {
        setTotalPrice((totalPrice) => totalPrice + parseInt(res.data.getItem.price));
        });
    });
  }, []);

  return (
    <>
      <div className="PurchaseItem_div">
        <div>ID: {purchaseData.id}</div>
        <p>{purchaseData.numberOfItems} item(s)</p>
        <img src={imagefile} width="60" height="80" /><br/><br/>
        <p>Total price: {totalPrice} JPY</p>
      </div>
    </>
  );
}

export default PurchaseItem;
