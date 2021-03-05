import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionsPreview from '../components/CollectionsPreview';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)
  return (
    <div className="shop-page">
      <CollectionsPreview />
    </div>
  )
}

export default ShopPage
