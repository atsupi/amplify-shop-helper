import "./ShopItem.css";
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { getPresignedUrl, updateItemStatus } from "../Utils";

function ShopItem({ value }) {
  const [imageName, setImageName] = useState("");
  const [isInCart, setIsInCart] = useState(0);

  useEffect(() => {
    if (value.imagefile) {
      getPresignedUrl(value.imagefile).then((result) => {
        setImageName(result);
      });
    }
    setIsInCart(value.isInCart);
  }, []);

  const onClickCheckbox = () => {
    value.isInCart = 1 - isInCart;
    setIsInCart(1 - isInCart);
    updateItemStatus(value);
  };

  return (
    <>
      <div className="ShopItem_div">
        <div className="checkbox">
          <Checkbox
            checked={isInCart ? true : false}
            color="success"
            onChange={onClickCheckbox}
          />
        </div>
        <div className="ShopItem_productImage">
          {imageName ? (
            <img src={imageName} width="60" height="80" alt="imageName" />
          ) : (
            <div className="NoImage">No image</div>
          )}
        </div>
        <div className="ShopItem_description">{value.description}</div>
        <div className="ShopItem_price">{value.price} JPY</div>
      </div>
    </>
  );
}

export default ShopItem;
