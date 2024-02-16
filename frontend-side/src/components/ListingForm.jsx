import React, { useState } from "react";
import realtyRealm from "../etherScripts/realtyrealm";
import web3 from "../etherScripts/web3";
import MyAlert from "./MyAlert";

export default function ListingForm() {
  const style =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    propertyType: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    myData(
      formData.title,
      formData.location,
      formData.propertyType,
      formData.area,
      formData.bedrooms,
      formData.bathrooms,
      formData.description,
      formData.price
    );
  };

  const myData = async (
    title,
    location,
    propertyType,
    area,
    bedrooms,
    bathrooms,
    description,
    price
  ) => {
    // Your logic here to handle the form data
    let accounts = await web3.eth.getAccounts();
    price = web3.utils.toWei(price.toString(), "ether");
    const gasLimit = 1000000; // Set a suitable gas limit
    const gasPrice = await web3.eth.getGasPrice(); // Retrieve current gas price from the network

    try {
      const listed = await realtyRealm.methods
        .listProperty(
          title,
          location,
          propertyType,
          area,
          bedrooms,
          bathrooms,
          description,
          price
        )
        .send({
          from: accounts[0],
          gas: gasLimit,
          gasPrice: gasPrice,
        });
      MyAlert(listed.transactionHash, true);
      console.log(listed.transactionHash);
    } catch (error) {
      MyAlert(false, false);
      console.error("Error listing property:", error);
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={style}
          placeholder="Title"
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={style}
          placeholder="Location"
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className={style}
          placeholder="Property Type 'Ex Villa"
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className={style}
          placeholder="Area Sq Meter"
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className={style}
          placeholder="Bedrooms 'Ex 5"
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className={style}
          placeholder="Bathrooms 'Ex 2"
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={style}
          placeholder="Description"
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={style}
          placeholder="Price 'Ex 1.00 Ether"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
