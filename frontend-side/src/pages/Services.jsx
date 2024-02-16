import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    document.title = "Services | RealtyRealm";
  }, []);
  return (
    <div class="flex flex-col items-center justify-center bg-gray-100 py-8">
      <div class="max-w-3xl grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="p-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 00-5.468 11.348l8.12-8.12A6.96 6.96 0 0010 3zm5.468 11.348l-8.12 8.12A6.96 6.96 0 0013 17a7 7 0 00-.532-2.652z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              Listing a Property
            </h2>
            <p class="text-gray-600">
              Users can list a property for sale by providing details such as
              title, location, size, bedrooms, bathrooms, description, and
              price.
            </p>
          </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="p-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 100 4h8a2 2 0 100-4H4zm10 6a2 2 0 110-4h2a4 4 0 00-4-4V1h-2v2a4 4 0 00-4 4H2a2 2 0 110 4h2a4 4 0 004 4v2h2v-2a4 4 0 004-4h-2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              Buying a Property
            </h2>
            <p class="text-gray-600">
              Users can buy a listed property by sending the required payment to
              the property owner. Once purchased, the property ownership is
              transferred to the buyer, and its status is updated as sold.
            </p>
          </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="p-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 100 4h8a2 2 0 100-4H4zm10 6a2 2 0 110-4h2a4 4 0 00-4-4V1h-2v2a4 4 0 00-4 4H2a2 2 0 110 4h2a4 4 0 004 4v2h2v-2a4 4 0 004-4h-2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              Updating Property Details
            </h2>
            <p class="text-gray-600">
              Property owners can update the price and status of their listed
              properties.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center bg-gray-100 py-8">
        <div class="max-w-3xl grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-4">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">
                Retrieving Property Information
              </h2>
              <p class="text-gray-600">
                Users can retrieve information about all properties, a specific
                property by index, the total count of properties, and the owner
                of a property.
              </p>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-4">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">Testing</h2>
              <p class="text-gray-600">
                The repository includes comprehensive test cases to ensure the
                functionality of the contracts. These tests cover various
                scenarios, including property listing, buying, updating, and
                retrieval.
              </p>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-4">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">
                Solidity Contracts Explained
              </h2>
              <p class="text-gray-600">
                The Solidity contracts have been written to facilitate the
                property listing and transaction functionalities. Each function
                within the contracts serves a specific purpose and has been
                thoroughly tested to ensure reliability and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
