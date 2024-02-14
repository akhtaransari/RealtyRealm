const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Define the build path
const buildPath = path.resolve(__dirname, 'build');
// Remove existing build directory
fs.removeSync(buildPath);

// Path to the Solidity source files
const propertyListingFilePath = path.resolve(__dirname, 'contracts', 'PropertyListing.sol');
const propertyDetailsFilePath = path.resolve(__dirname, 'contracts', 'PropertyDetails.sol');
// Read the Solidity source code
const propertyListingSource = fs.readFileSync(propertyListingFilePath, 'utf-8');
const propertyDetailsSource = fs.readFileSync(propertyDetailsFilePath, 'utf-8');

// Compile the Solidity source code
const input = {
    language: 'Solidity',
    sources: {
        'PropertyListing.sol': {
            content: propertyListingSource,
        },
        'PropertyDetails.sol': {
            content: propertyDetailsSource,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

try {
    const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));

    // Ensure the build directory exists
    fs.ensureDirSync(buildPath);

    // Save the compiled output as JSON files
    for (let fileName in compiledContract.contracts) {
        const contract = compiledContract.contracts[fileName];
        for (let contractName in contract) {
            const contractDefinition = contract[contractName];
            fs.outputJSONSync(
                path.resolve(buildPath, `${contractName}.json`),
                contractDefinition
            );

            console.log(`Contract ${contractName} compiled and saved.`);
        }
    }
} catch (error) {
    console.error('Error occurred during compilation:', error);
}
