# RealtyRealm 

# <img src="realty_realm_logo.png" alt="RealtyRealm Logo" width="400" height="80">

RealtyRealm is a decentralized application (DApp) built on the blockchain to manage property listings and transactions. It consists of smart contracts written in Solidity and tests written in JavaScript.

## Contracts

### PropertyListing.sol

The `PropertyListing.sol` contract manages property listings and transactions. It provides functionalities such as listing a property for sale, buying a property, updating property details, and retrieving property information.

### PropertyDetails.sol

The `PropertyDetails.sol` contract defines the structure of a property. It includes attributes such as title, location, size, bedrooms, bathrooms, description, price, and status.

## Deployment

The contracts have been deployed to the Binance Smart Chain (BSC) testnet. You can interact with the deployed contracts using the following address: [0x2aeaab479bee159909ba583fe512402d0110a7f3](https://testnet.bscscan.com/address/0x2aeaab479bee159909ba583fe512402d0110a7f3).

## Features

### Listing a Property

Users can list a property for sale by providing details such as title, location, size, bedrooms, bathrooms, description, and price.

### Buying a Property

Users can buy a listed property by sending the required payment to the property owner. Once purchased, the property ownership is transferred to the buyer, and its status is updated as sold.

### Updating Property Details

Property owners can update the price and status of their listed properties.

### Retrieving Property Information

Users can retrieve information about all properties, a specific property by index, the total count of properties, and the owner of a property.

## Testing

The repository includes comprehensive test cases to ensure the functionality of the contracts. These tests cover various scenarios, including property listing, buying, updating, and retrieval.

### Running Tests

1. Clone this repository to your local machine.
2. Navigate to the project directory and install dependencies: `npm install`.
3. Ensure Ganache is running locally or use a network provider like Infura.
4. Run the tests: `npm test`.

## Solidity Contracts Explained

The Solidity contracts have been written to facilitate the property listing and transaction functionalities. Each function within the contracts serves a specific purpose and has been thoroughly tested to ensure reliability and security.

## Deployment Instructions

To deploy the contracts to your own network:

1. Clone the repository: `git clone https://github.com/akhtaransari/RealtyRealm.git`
2. Install dependencies: `npm install`
3. Compile the contracts: `node compile.js`
4. Deploy the contracts: `node deploy.js`

## Front-end Development

This project is still under development, with React being used for the front-end implementation.

## GitHub Repository

You can find the source code for this project on GitHub: [RealtyRealm](https://github.com/akhtaransari/RealtyRealm)

## Contributors

- Akhtar Ansari ([GitHub](https://github.com/akhtaransari))

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.
