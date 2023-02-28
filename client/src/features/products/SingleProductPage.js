import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./extendedApiSlice";
import Wrapper from "../../assets/wrappers/SingleProductPage";
import { Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { selectCurrentUser } from "../auth/authSlice";
import { useUpdateUserCartMutation } from "../api/apiSlice";
import {
  clearAlert,
  displayAlert,
  selectAlertsInfo,
} from "../alerts/alertsSlice";
import Alert from "../alerts/Alert";

export default function SingleProductPage() {
  const { id: productId } = useParams();
  const { data: product, isLoading } = useGetProductQuery(productId);
  const [updateUserCart] = useUpdateUserCartMutation();
  const user = useSelector(selectCurrentUser);
  const { showAlert, alertMessage, alertType } = useSelector(selectAlertsInfo);

  const dispatch = useDispatch();
  const urlPre = "../../data/uploads/";

  const handleAddToCart = async () => {
    if (user) {
      try {
        const userId = user._id;
        const update = product;
        const response = await updateUserCart({
          userId,
          update,
          add: 1,
        });
        if (response.error) {
          throw new Error(response.error.data.error);
        }
        localStorage.setItem("user", JSON.stringify(response.data));
      } catch (error) {
        setTimeout(() => {
          dispatch(clearAlert());
        }, 3000);
        return;
      }
    }
    dispatch(addItemToCart(product));
    dispatch(
      displayAlert({
        alertType: "success",
        alertMessage: "Item added to cart!",
      })
    );
    setTimeout(() => {
      dispatch(clearAlert());
    }, 3000);
    const currentCart = JSON.parse(localStorage.getItem("localCart")) || [];
    let push = true;
    currentCart.map((prod, index) => {
      if (prod.model === product.model) {
        const newProduct = prod;
        newProduct.count += 1;
        currentCart.splice(index, 1, newProduct);
        push = false;
      }
      return currentCart;
    });
    if (push) {
      currentCart.push(product);
    }

    localStorage.setItem("localCart", JSON.stringify(currentCart));
  };

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else {
    content = (
      <section className="center page-height">
        <div className="single-item-container">
          {showAlert && (
            <Alert alertType={alertType} alertMessage={alertMessage} />
          )}
          <img src={urlPre + product.image} alt="computer preview" />
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
