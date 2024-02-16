import img1 from "../images/1.jpg";
import realtyRealm from "../etherScripts/realtyrealm";
import web3 from "../etherScripts/web3";

export default function PropertyCard({
  index,
  title,
  location,
  propertyType,
  area,
  bedrooms,
  bathrooms,
  description,
  price,
}) {
    const handleClick = async (i) => {
    let accounts = await web3.eth.getAccounts();
    const gasLimit = 1000000; // Set a suitable gas limit
    const gasPrice = await web3.eth.getGasPrice(); // Retrieve current gas price from the network

    try {
      const listed = await realtyRealm.methods.buyProperty(0).send({
        from: accounts[0],
        gas: gasLimit,
        gasPrice: gasPrice,
        value: price.toString(),
      });
      console.log(listed.transactionHash);
    } catch (error) {
      alert(error);
      console.error("Error listing property:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md m-2">
        <img className="rounded-t-lg" src={img1} alt="images" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <strong>Location:</strong> {location}
            <br />
            <strong>Property Type:</strong> {propertyType}
            <br />
            <strong>Area:</strong> {area} sqft
            <br />
            <strong>Bedrooms:</strong> {bedrooms}
            <br />
            <strong>Bathrooms:</strong> {bathrooms}
            <br />
            <strong>Description:</strong> {description}
            <br />
            <strong>Price:</strong> {web3.utils.fromWei(price, 'ether')} Ether
          </p>
          <button
            type="submit"
            onClick={() => handleClick(index)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
