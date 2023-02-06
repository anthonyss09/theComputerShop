import Wrapper from "../../assets/wrappers/ProductRow";
import ProductPreview from "./ProductPreview";
import { BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function PreviewRow({ products, title }) {
  const urlPre = "../../data/uploads/";
  const content = products.map((product, index) => {
    return (
      <ProductPreview
        manufactuer={product.manufactuer}
        image={urlPre + product.image}
        model={product.model}
        price={product.price}
        key={index}
        productType={product.type}
        productId={product._id}
      />
    );
  });
  return (
    <Wrapper>
      <section className="container-main">
        <h3 className="row-title">{title}</h3>
        <section className="preview-row">{content}</section>
        <Link
          to={"/products/" + title.toLowerCase()}
          className="plus-circle-container link"
        >
          View all {title}
          <BiPlusCircle size={30} className="plus-circle" />
        </Link>
      </section>
    </Wrapper>
  );
}
