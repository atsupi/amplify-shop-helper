import { useEffect, useState } from "react";
import "./PurchaseItem.css";
import { fetchItem, getPresignedUrl } from "./Utils";
import { Purchase } from "./types";

function PurchaseItem({ data }) {
  const [firstItem, setFirstItem] = useState({});
  const [imagefile, setImageFile] = useState("");
  const purchaseData: Purchase = data;

  useEffect(() => {
    const firstItem = purchaseData?.itemID[0];
    fetchItem(firstItem).then((res) => {
      setFirstItem(res.data.getItem);
      getPresignedUrl(res.data.getItem.imagefile).then((image) => {
        setImageFile(image);
      });
    });
  }, []);

  return (
    <>
      <div className="PurchaseItem_div">
        <p>ID: {purchaseData.id}</p>
        <p>{purchaseData.numberOfItems} item(s)</p>
        <img src={imagefile} width="80" height="120" /><br/><br/>
        <p>Price: XXX JPY</p>
      </div>
    </>
  );
}

export default PurchaseItem;
