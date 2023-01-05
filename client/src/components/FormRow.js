import Wrapper from "../assets/wrappers/FormRow";

export default function FormRow({ name, id, type, value, onChange }) {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {id || name}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="form-input"
        />
      </div>
    </Wrapper>
  );
}
