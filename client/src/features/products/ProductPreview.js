import Wrapper from "../../assets/wrappers/ProductPreview";
import { Link } from "react-router-dom";

export default function PreviewCard({
  model,
  image,
  price,
  manufactuer,
  productId,
}) {
  return (
    <Wrapper>
      <Link
        to={"/products/single-product/" + productId}
        className="preview-card link"
      >
        <section className="preview-image-container">
          <img src={image} className="preview-image" alt="computer product" />
        </section>
        <section className="preview-body">
          <div className="preview-text">{manufactuer + " " + model}</div>
          <div className="preview-text">${price}</div>
        </section>
      </Link>
    </Wrapper>
  );
}
