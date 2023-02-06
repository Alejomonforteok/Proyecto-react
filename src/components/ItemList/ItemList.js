import { useEffect } from 'react';
import useFirebase from '../../hook/UseFirebase';
import Item from '../Item/Item';
import './styles.css';

const ItemList = (props) => {
  const { id } = props;
  const { products, getProducts, filterProducts, filteredProducts } = useFirebase();

  useEffect(() => {
    !id ? getProducts() : filterProducts(id);
  }, [id]);

  const renderItems = !id ? products : filteredProducts;
  const items = renderItems.map(({ id, title, description, price, image, stock }) => {
    return (
      <Item
        key={id}
        id={id}
        title={title}
        description={description}
        price={price}
        image={image}
        stock={stock}
      />
    );
  });

  return <div className='container'>{items}</div>;
};

export default ItemList;
