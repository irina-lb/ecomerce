import React from 'react';

import{SHOP_DATA} from './ShopData';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';

const ShopPage = () => {
  return(
      <div className="shop-page">
          {SHOP_DATA.map(({id, ...collectionProps})=>(
              <PreviewCollection key={id} {...collectionProps}/>
          ))}
      </div>
  )
};

export default ShopPage;
