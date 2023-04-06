import { useEffect, useState } from "react";
import "./PurchaseItem.css";
import { fetchItem, getPresignedUrl } from "./Utils";

function PurchaseItem({ data }) {
  const [firstItem, setFirstItem] = useState({});
  const [imagefile, setImageFile] = useState("");
  useEffect(() => {
    const firstItem = data?.itemID[0];
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
        <p>{data.id}</p>
        {data.itemID.map((id: string) => {
          return <p key={id}>{id}</p>;
        })}
        <img src={imagefile} width="80" height="120" />
      </div>
    </>
  );
}

export default PurchaseItem;
