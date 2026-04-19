import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          required
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          required
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default Form;
