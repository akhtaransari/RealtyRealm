import web3 from "./web3";

const address = "0x2AEAab479Bee159909ba583fe512402d0110A7F3";
const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "", type: "string" },
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "location", type: "string" },
          { internalType: "string", name: "propertyType", type: "string" },
          { internalType: "uint256", name: "size", type: "uint256" },
          { internalType: "uint8", name: "bedrooms", type: "uint8" },
          { internalType: "uint8", name: "bathrooms", type: "uint8" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "bool", name: "status", type: "bool" },
        ],
        indexed: false,
        internalType: "struct PropertyListing.PropertyDetails",
        name: "",
        type: "tuple",
      },
    ],
    name: "Log",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_propertyIndex", type: "uint256" },
    ],
    name: "buyProperty",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProperties",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "location", type: "string" },
          { internalType: "string", name: "propertyType", type: "string" },
          { internalType: "uint256", name: "size", type: "uint256" },
          { internalType: "uint8", name: "bedrooms", type: "uint8" },
          { internalType: "uint8", name: "bathrooms", type: "uint8" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "bool", name: "status", type: "bool" },
        ],
        internalType: "struct PropertyListing.PropertyDetails[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }],
    name: "getPropertyByIndex",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "location", type: "string" },
          { internalType: "string", name: "propertyType", type: "string" },
          { internalType: "uint256", name: "size", type: "uint256" },
          { internalType: "uint8", name: "bedrooms", type: "uint8" },
          { internalType: "uint8", name: "bathrooms", type: "uint8" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "bool", name: "status", type: "bool" },
        ],
        internalType: "struct PropertyListing.PropertyDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPropertyCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_propertyIndex", type: "uint256" },
    ],
    name: "getPropertyOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_title", type: "string" },
      { internalType: "string", name: "_location", type: "string" },
      { internalType: "string", name: "_propertyType", type: "string" },
      { internalType: "uint256", name: "_size", type: "uint256" },
      { internalType: "uint8", name: "_bedrooms", type: "uint8" },
      { internalType: "uint8", name: "_bathrooms", type: "uint8" },
      { internalType: "string", name: "_description", type: "string" },
      { internalType: "uint256", name: "_price", type: "uint256" },
    ],
    name: "listProperty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "properties",
    outputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "location", type: "string" },
      { internalType: "string", name: "propertyType", type: "string" },
      { internalType: "uint256", name: "size", type: "uint256" },
      { internalType: "uint8", name: "bedrooms", type: "uint8" },
      { internalType: "uint8", name: "bathrooms", type: "uint8" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "uint256", name: "price", type: "uint256" },
      { internalType: "bool", name: "status", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_propertyIndex", type: "uint256" },
      { internalType: "uint256", name: "_newPrice", type: "uint256" },
    ],
    name: "updatePropertyPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_propertyIndex", type: "uint256" },
      { internalType: "bool", name: "_status", type: "bool" },
    ],
    name: "updatePropertyStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contract = new web3.eth.Contract(abi, address); // Renamed to contract for clarity

export default contract // Export contract instance
