import ShopItem from "./ShopItem";
import "./ShopItemList.css";

function ShopItemList({currentItems}) {
  let index = 0;
  return (
    <>
      {currentItems &&
        currentItems.map((value: number) => {
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
