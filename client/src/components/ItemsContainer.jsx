import Item from './Item';
import { CATEGORIES, COMPANY, SUPPORT } from './Menus';
const ItemsContainer = () => {
  return (
    <div className="flex justify-between grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-36 py-16">
      <Item Links={CATEGORIES} title="CATEGORIES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
