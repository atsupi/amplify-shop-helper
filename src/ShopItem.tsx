import "./ShopItem.css";
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";
import { updateItem } from "./graphql/mutations";
import { getPresignedUrl } from "./Utils";

async function updateItemStatus(item) {
    console.log("update item on DynamoDB");
    console.log(item);
    try {
      const res = await API.graphql(
        graphqlOperation(updateItem, { input: item })
      );
      console.log(res);
    } catch (event) {
      console.log(event);
    }
}

function ShopItem(prop) {
  const [imageName, setImageName] = useState("");
  const [isInCart, setIsInCart] = useState(0);

  useEffect(() => {
    if (prop.value.imagefile) {
      getPresignedUrl(prop.value.imagefile).then((result) => {
        setImageName(result);
      });
    }
    setIsInCart(prop.value.isInCart);
  }, []);

  const onClickCheckbox = () => {
    prop.value.isInCart = 1- isInCart;
    setIsInCart(1 - isInCart);
    updateItemStatus(prop.value);
  };

  return (
    <>
      <div className="checkbox">
        <Checkbox
          checked={isInCart? true: false}
          color="success"
          onChange={onClickCheckbox}
        />
      </div>
      <div className="productImage">
        {imageName ? (
          <img src={imageName} width="60" height="80" alt="imageName" />
        ) : (
          <div className="NoImage">No image</div>
        )}
      </div>
      <div className="description">{prop.value.description}</div>
      <div className="price">{prop.value.price}</div>
    </>
  );
}

export default ShopItem;
