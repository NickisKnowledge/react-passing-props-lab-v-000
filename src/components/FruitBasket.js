import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
  <div className="fruit-basket">
    <Filter
      filters={props.filters}
      handleChange={props.updateFilterCallback}
    />
    <FilteredFruitList
      fruit={props.fruit}
      filter={props.currentFilter}
    />
  </div>;

FruitBasket.defaultProps = {
  fruit: null,
  filters: null,
  currentFilter: null,
  updateFilterCallback: function () {},
};

export default FruitBasket;
