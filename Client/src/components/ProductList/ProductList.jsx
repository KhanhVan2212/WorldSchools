import React, { useState } from 'react'
import useProductQuery from '../../hooks/useProduct/useProductQuery';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const {data , isLoading , isError} = useProductQuery();
  console.log(data);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = data?.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.poster.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Lỗi rồi</div>;
  return (
    <div>
      <div>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products..."
          className="mt-3 block rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      {filteredProducts?.map((product,index)=>{
        return(
          
        <>
         <Link to={`detail/${product._id}`}>
          <br/>
           <article className="item-news thumb-left item-news-common" key={index}>
          <div className="thumb-art">
            <a data-medium="Item-5" data-thumb={1} href="/product" className="thumb thumb-5x3" title="Học sinh FPT AfterSchool giành nhiều giải thưởng lập trình quốc tế" data-itm-source="#vn_source=Folder-GiaoDuc_TinTuc&vn_campaign=Stream&vn_medium=Item-5&vn_term=Desktop&vn_thumb=1" data-itm-added={1}>
              <picture>
                <img src={product.image} alt="" />
              </picture>
            </a>
          </div>
          <h2 className="title-news">
            <a data-medium="Item-5" data-thumb={1} href="/product" title="Học sinh FPT AfterSchool giành nhiều giải thưởng lập trình quốc tế" data-itm-source="#vn_source=Folder-GiaoDuc_TinTuc&vn_campaign=Stream&vn_medium=Item-5&vn_term=Desktop&vn_thumb=1" data-itm-added={1}>
            {product.title}
            </a>
          </h2>
          <p className="description">
            <a data-medium="Item-5" data-thumb={1} href="">
              {product.poster}
              </a>
           
          </p>
        </article>
         </Link>
        </>
        )
      })}
       
           
    </div>
  )
}

export default ProductList
