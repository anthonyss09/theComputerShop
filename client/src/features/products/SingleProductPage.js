import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./extendedApiSlice";
import Wrapper from "../../assets/wrappers/SingleProductPage";
import { Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { selectCurrentUser } from "../auth/authSlice";
import { useUpdateUserCartMutation } from "../api/apiSlice";

export default function SingleProductPage() {
  const { id: productId } = useParams();
  const { data: product, isLoading } = useGetProductQuery(productId);
  const [updateUserCart] = useUpdateUserCartMutation();
  const user = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const urlPre = "../../data/uploads/";

  const handleAddToCart = () => {
    if (user) {
      const userId = user._id;
      const update = product;
      updateUserCart({ userId, update });
    }
    dispatch(addItemToCart(product));
  };

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else {
    content = (
      <section className="center page-height">
        <div className="single-item-container">
          <img src={urlPre + product.image} />
          <div className="product-title">
            <h2>{product.manufactuer + " " + product.model}</h2>
            <p>${product.price}</p>
          </div>
          <button className="button" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <ul className="product-specs">
            <h3>specifications</h3>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              voluptatem magni adipisci natus vero explicabo consequuntur sequi
              eligendi sit soluta.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
              qui!
            </li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              delectus cumque, esse inventore facilis suscipit.
            </li>
          </ul>
        </div>
      </section>
    );
  }

  return <Wrapper>{content}</Wrapper>;
}
