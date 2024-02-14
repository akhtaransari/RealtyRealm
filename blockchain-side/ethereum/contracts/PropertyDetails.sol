// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

struct PropertyDetails {
        address owner;
        string title;
        string location;
        string propertyType;
        uint256 size;
        uint8 bedrooms;
        uint8 bathrooms;
        string description;
        uint256 price;
        bool status;
    }
