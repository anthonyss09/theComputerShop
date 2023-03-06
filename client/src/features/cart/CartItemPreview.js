import Wrapper from "../../assets/wrappers/CartItemPreview";
import { FaPlus, FaMinus } from "react-icons/fa";
import { addItemToCart, removeItemFromCart } from "./cartSlice";
import { useUpdateUserCartMutation } from "../api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../auth/authSlice";

export default function CartItemPreview({
  model,
  manufactuer,
  price,
  count,
  image,
  id,
}) {
  const urlPre = "../../data/uploads/";
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [updateUserCart] = useUpdateUserCartMutation();
  const currentCart = JSON.parse(localStorage.getItem("localCart")) || [];

  const handleRemoveItem = async () => {
    const update = { model, manufactuer, price, count, image, _id: id };
    if (user) {
      const userId = user._id;
      const response = await updateUserCart({ userId, update, add: 0 });
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    dispatch(removeItemFromCart(update));

    currentCart.map((prod, index) => {
      if (prod.model === update.model) {
        if (prod.count === 1) {
          currentCart.splice(index, 1);
        } else {
          const newProduct = prod;
          newProduct.count -= 1;
          currentCart.splice(index, 1, newProduct);
        }
      }
    });

    localStorage.setItem("localCart", JSON.stringify(currentCart));
  };

  const handleAddItem = async () => {
    const update = { model, manufactuer, price, count, image, _id: id };
    if (user) {
      const userId = user._id;
      const response = updateUserCart({ userId, update, add: 1 });
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    dispatch(addItemToCart(update));

    currentCart.map((prod, index) => {
      if (prod.model === update.model) {
        const newProduct = prod;
        newProduct.count += 1;
        currentCart.splice(index, 1, newProduct);
      }
    });

    localStorage.setItem("localCart", JSON.stringify(currentCart));
  };

  return (
    <Wrapper>
      <aside className="preview-card">
        <img className="preview-image" src={urlPre + image} />
        <p> {manufactuer + " " + model}</p>
        <p> {price}</p>
        <div className="counts">
          <FaMinus className="icon" onClick={handleRemoveItem} />
          <p> {count}</p>
          <FaPlus className="icon" onClick={handleAddItem} />
        </div>
      </aside>
    </Wrapper>
  );
}
