import Wrapper from "../../assets/wrappers/ProductRow";
import ProductPreview from "./ProductPreview";
import { BiPlusCircle } from "react-icons/bi";

export default function PreviewRow({ products, title }) {
  const content = products.map((laptop, index) => {
    return (
      <ProductPreview
        image={laptop.image}
        model={laptop.model}
        price={laptop.price}
        key={index}
      />
    );
  });
  return (
    <Wrapper>
      <seciton className="container-main">
        <h3 className="row-title">{title}</h3>
        <section className="preview-row">{content}</section>
        <div className="plus-circle-container">
          View all {title}
          <BiPlusCircle size={30} className="plus-circle" />
        </div>
      </seciton>
    </Wrapper>
  );
}
