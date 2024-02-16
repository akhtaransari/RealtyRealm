import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import realtyRealm from "../etherScripts/realtyrealm";

const allProperties = await realtyRealm.methods.getAllProperties().call();
console.log(allProperties[0])

export default function Home() {
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [sortBy, setSortBy] = useState("");
  // console.log(allProperties[0].bathrooms)

  useEffect(() => {
    document.title = "Home | RealtyRealm";
  }, []);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(
      `Selected City: ${city}, Selected Property Type: ${propertyType}, Selected Sort By: ${sortBy}`
    );
    // You can add additional logic here, such as sending form data to a server
  };

  return (
    <>
      <form
        className="max-w-sm mx-auto flex flex-wrap justify-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="city_select" className="sr-only">
            Select a City
          </label>
          <select
            id="city_select"
            className="block py-2.5 px-0 w-full sm:w-auto text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={handleCityChange}
            value={city}
          >
            <option value="">Select a City</option>
            <option value="DD">All</option>
            <option value="DD">Downtown Dubai</option>
            <option value="DM">Dubai Marina</option>
            <option value="PJ">Palm Jumeirah</option>
            <option value="DBR">Jumeirah Beach Residence</option>
            <option value="AR">Arabian Ranches</option>
            <option value="JVC">Jumeirah Village Circle</option>
            <option value="DHE">Dubai Hills Estate</option>
            <option value="BI">Bluewaters Island</option>
            <option value="MC">Meydan City</option>
          </select>
        </div>

        <div>
          <label htmlFor="property_type_select" className="sr-only">
            Property Type
          </label>
          <select
            id="property_type_select"
            className="block py-2.5 px-0 w-full sm:w-auto text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={handlePropertyTypeChange}
            value={propertyType}
          >
            <option value="">Property Type</option>
            <option value="villa">All</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort_by_select" className="sr-only">
            Sort By
          </label>
          <select
            id="sort_by_select"
            className="block py-2.5 px-0 w-full sm:w-auto text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={handleSortByChange}
            value={sortBy}
          >
            <option value="">Sort By</option>
            <option value="recent">Recent</option>
            <option value="price_low_to_high">Price Low to High</option>
            <option value="high_to_low">High To Low</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      {allProperties.map((element, index) => {
        return (
          <PropertyCard
            key={index}
            title={element.title}
            location={element.location}
            propertyType={element.propertyType}
            area={element.area}
            bedrooms={element.bedrooms}
            bathrooms={element.bathrooms}
            description={element.description}
            price={element.price}
          />
        );
      })}
    </>
  );
}
