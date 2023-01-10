import Wrapper from "../../assets/wrappers/ProductPreview";

export default function PreviewCard({ model, image, price }) {
  return (
    <Wrapper>
      <aside className="preview-card">
        <section className="preview-image-container">
          <img src={image} className="preview-image" />
        </section>
        <section className="preview-body">
          <div className="preview-text">{model}</div>
          <div className="preview-text">${price}</div>
        </section>
      </aside>
    </Wrapper>
  );
}
