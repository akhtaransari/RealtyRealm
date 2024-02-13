// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PropertyDetails.sol";

contract PropertyListing {

    PropertyDetails[] public properties;
    address public owner;

    event Log(string, PropertyDetails);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function listProperty(
        string memory _title,
        string memory _location,
        string memory _propertyType,
        uint256 _size,
        uint8 _bedrooms,
        uint8 _bathrooms,
        string memory _description,
        uint256 _price
    ) public {
        PropertyDetails memory newProperty = PropertyDetails({
            owner: msg.sender,
            title: _title,
            location: _location,
            propertyType: _propertyType,
            size: _size,
            bedrooms: _bedrooms,
            bathrooms: _bathrooms,
            description: _description,
            price: _price,
            status: true
        });
        properties.push(newProperty);
        emit Log("Property Listed", newProperty);
    }

    function buyProperty(uint256 _propertyIndex) public payable {
        require(_propertyIndex < properties.length, "Invalid property index");
        PropertyDetails storage property = properties[_propertyIndex];
        require(msg.value >= property.price, "Insufficient funds");
        require(property.status == true, "Property is not available for purchase");

        address payable previousOwner = payable(property.owner);
        previousOwner.transfer(property.price);

        property.owner = msg.sender;
        property.status = false;

        emit Log("Property Bought", property);
    }

    function getAllProperties() external view returns (PropertyDetails[] memory) {
        return properties;
    }

    function getPropertyByIndex(uint256 _index) external view returns (PropertyDetails memory) {
        require(_index < properties.length, "Invalid property index");
        return properties[_index];
    }

    function getPropertyCount() external view returns (uint256) {
        return properties.length;
    }

    function updatePropertyPrice(uint256 _propertyIndex, uint256 _newPrice) public onlyOwner {
        require(_propertyIndex < properties.length, "Invalid property index");
        properties[_propertyIndex].price = _newPrice;
    }

    function updatePropertyStatus(uint256 _propertyIndex, bool _status) public onlyOwner {
        require(_propertyIndex < properties.length, "Invalid property index");
        properties[_propertyIndex].status = _status;
    }

    function getPropertyOwner(uint256 _propertyIndex) external view returns (address) {
        require(_propertyIndex < properties.length, "Invalid property index");
        return properties[_propertyIndex].owner;
    }
}
