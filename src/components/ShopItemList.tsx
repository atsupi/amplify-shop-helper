import { RefCallback } from "react";
import { Item } from "../types";
import ShopItem from "./ShopItem";

type Props = {
  currentItems: Item[];
  onChange: RefCallback<React.ChangeEvent<HTMLInputElement>>;
};

function ShopItemList(props: Props) {
  let index = 0;

  const onChangeChild = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);
  };
  return (
    <>
      {props.currentItems &&
        props.currentItems.map((value: Item) => {
          index = index + 1;
          return (
            <div className={`Item${index}`} key={`Item${index}`}>
              <ShopItem value={value} onChange={onChangeChild}/>
            </div>
          );
        })}
    </>
  );
}

export default ShopItemList;
