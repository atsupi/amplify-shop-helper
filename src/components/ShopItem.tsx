import "./ShopItem.css";
import { RefCallback, useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { getPresignedUrl, updateItemStatus } from "../Utils";
import { Item } from "../types";

type Props = {
  value: Item;
    onChange: RefCallback<React.ChangeEvent<HTMLInputElement>>;
}

function ShopItem( props: Props ) {
  const [imageName, setImageName] = useState("");
  const [isInCart, setIsInCart] = useState(0);

  useEffect(() => {
    if (props.value.imagefile) {
      getPresignedUrl(props.value.imagefile).then((result) => {
        setImageName(result);
      });
    }
    setIsInCart(props.value.isInCart);
  }, []);

  const onClickCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.value.isInCart = 1 - isInCart;
    setIsInCart(1 - isInCart);
    const newValue = {
      id: props.value.id,
      imagefile: props.value.imagefile,
      price: props.value.price,
      description: props.value.description,
      username: props.value.username,
      isInCart: props.value.isInCart
    }
    updateItemStatus(newValue);
    props.onChange(event);
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
        <div className="ShopItem_description">{props.value.description}</div>
        <div className="ShopItem_price">{props.value.price} JPY</div>
      </div>
    </>
  );
}

export default ShopItem;
