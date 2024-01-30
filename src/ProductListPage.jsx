import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { getProductList } from './api';
import NoMatching from './NoMatching';
import Loading from './Loading';



function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const xyz = getProductList();

    xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
    })

  }, []);


  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == 'price') {
    data.sort(function (x, y) {
      return (x.price > y.price) ? 1 : -1;
    });
  } else if (sort == 'name') {
    data.sort(function (x, y) {
      return (x.title > y.title) ? 1 : -1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if(loading){
    return <Loading />
  }

  return (
    <div class="flex flex-col items-center">
      <div>
        <div className="flex justify-end items-center h-10 p-1">
          <input
            value={query}
            class="border rounded-md text-xs mx-1 text-center"
            placeholder='Search'
            onChange={handleQueryChange} />

          <select
            onChange={handleSortChange}
            class="border rounded-md text-xs mr-1"
            name="default"
            value={sort}>
            <option value="default">Sort by default</option>
            <option value="name">Sort by name</option>
            <option value="price">Sort by price</option>
          </select>
        </div>
        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && <NoMatching >No Result Found!!!</NoMatching>}
      </div>
    </div>
  );
}

export default ProductListPage;