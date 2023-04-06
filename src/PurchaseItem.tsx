import { API, graphqlOperation, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { getItem } from "./graphql/queries";
import "./PurchaseItem.css";

async function getPresignedUrl(key: any) {
  const presignedUrl = await Storage.get(key, { level: "public" });
  return presignedUrl;
}

const fetchItem = async (itemID: string) => {
  const res = await API.graphql(graphqlOperation(getItem, { id: itemID }));
  return res;
};

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
