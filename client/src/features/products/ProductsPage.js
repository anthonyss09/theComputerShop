import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "./extendedApiSlice";
import { Spinner } from "@chakra-ui/react";
import ProductPreview from "./ProductPreview";
import Wrapper from "../../assets/wrappers/ProductPage";
import BigSidebar from "../../components/BigSidebar";

export default function ProductsPage() {
  const { productType } = useParams();
  const { data: products = [], isLoading } = useGetProductsQuery(productType);
  console.log(products);

  let pageTitle = productType;
  if (productType === "all-products") {
    pageTitle = "all products";
  }

  const urlPre = "../../data/uploads/";

  let content;
  if (isLoading) {
    content = (
      <div className="spinner">
        <Spinner size="xl" className="spinner" />
      </div>
    );
  } else if (!products.length) {
    content = <div>There are no products in inventory</div>;
  } else {
    content = products.map((product, index) => {
      return (
        <div className="single-preview-container">
          {" "}
          <div className="single-preview">
            <ProductPreview
              key={index}
              image={urlPre + product.image}
              model={product.model}
              price={product.price}
            />
          </div>
        </div>
      );
    });
  }
  return (
    <Wrapper>
      <div className="banner">
        Create an account recieve 15% off at checkout
      </div>
      <section className="products-page page-height">
        <div className="sidebar">
          <BigSidebar />
        </div>

        <div className="products-container">
          <h1 className="title">{pageTitle}</h1>
          <div className="product-previews">{content}</div>
        </div>
      </section>
    </Wrapper>
  );
}
