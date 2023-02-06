import Wrapper from "../../assets/wrappers/CartItemPreview";

export default function CartItemPreview({
  model,
  manufactuer,
  price,
  count,
  image,
}) {
  const urlPre = "../../data/uploads/";

  return (
    <Wrapper>
      <aside className="preview-card">
        <img src={urlPre + image} />
        <p> {manufactuer + " " + model}</p>
        <p> {price}</p>
        <p> {count}</p>
      </aside>
    </Wrapper>
  );
}
