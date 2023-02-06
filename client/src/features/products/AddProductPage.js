import Wrapper from "../../assets/wrappers/Form";
import FormRow from "../../components/FormRow";
import { useState } from "react";
import { useAddProductMutation } from "./extendedApiSlice";

export default function AddProductPage() {
  const [model, setModel] = useState("");
  const [manufactuer, setManufactuer] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  const [addProduct, { refetch }] = useAddProductMutation();

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };
  const handleManufactuerChange = (e) => {
    setManufactuer(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("manufactuer", manufactuer);
    formData.append("model", model);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("imageName", image.name);
    formData.append("image", image);
    try {
      const newProduct = await addProduct(formData);
      console.log(newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <section className="center page-height">
        <form
          className="form "
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <h3 className="header">Add new product</h3>
          <FormRow
            id="model"
            name="model"
            type="text"
            value={model}
            onChange={handleModelChange}
          />
          <FormRow
            id="manufactuer"
            name="manufactuer"
            type="text"
            value={manufactuer}
            onChange={handleManufactuerChange}
          />
          <FormRow
            id="price"
            sname="price"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
          <FormRow
            id="type"
            name="type"
            type="text"
            value={type}
            onChange={handleTypeChange}
          />
          <FormRow
            id="image"
            name="image"
            type="file"
            onChange={handleImageChange}
          />
          <button type="submit" className="button">
            Add Product
          </button>
        </form>
      </section>
    </Wrapper>
  );
}
