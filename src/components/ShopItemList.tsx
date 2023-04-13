import { Item } from "../types";
import ShopItem from "./ShopItem";

type Props = {
  currentItems: Item[]
}

function ShopItemList( props: Props ) {
  let index = 0;
  return (
    <>
      {props.currentItems &&
        props.currentItems.map((value: Item) => {
          index = index + 1;
          return (
            <div className={`Item${index}`} key={`Item${index}`}>
              <ShopItem value={value} />
            </div>
          );
        })}
    </>
  );
}

export default ShopItemList;
