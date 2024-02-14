const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const { abi, evm } = require('../ethereum/build/PropertyListing.json');

const web3 = new Web3(ganache.provider());

let accounts;
let propertyListing;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    propertyListing = await new web3.eth.Contract(abi)
        .deploy({ data: '0x' + evm.bytecode.object })
        .send({ from: accounts[0], gas: '2100000' });
});

describe('PropertyListing Contract', () => {
    it('should list a property', async () => {
        await propertyListing.methods.listProperty(
            'Test Title',
            'Test Location',
            'Test Type',
            1000,
            2,
            1,
            'Test Description',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        const properties = await propertyListing.methods.getAllProperties().call();
        assert.equal(properties.length, 1);
    });

    it('should allow buying a property', async () => {
        await propertyListing.methods.listProperty(
            'Test Title',
            'Test Location',
            'Test Type',
            1000,
            2,
            1,
            'Test Description',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        await propertyListing.methods.buyProperty(0).send({ from: accounts[1], value: 100000 });

        const property = await propertyListing.methods.getPropertyByIndex(0).call();
        assert.equal(property.owner, accounts[1]);
    });

    it('should update property price', async () => {
        await propertyListing.methods.listProperty(
            'Test Title',
            'Test Location',
            'Test Type',
            1000,
            2,
            1,
            'Test Description',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        await propertyListing.methods.updatePropertyPrice(0, 200000).send({ from: accounts[0] });

        const property = await propertyListing.methods.getPropertyByIndex(0).call();
        assert.equal(property.price, 200000);
    });

    it('should update property status', async () => {
        await propertyListing.methods.listProperty(
            'Test Title',
            'Test Location',
            'Test Type',
            1000,
            2,
            1,
            'Test Description',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        await propertyListing.methods.updatePropertyStatus(0, false).send({ from: accounts[0] });

        const property = await propertyListing.methods.getPropertyByIndex(0).call();
        assert.equal(property.status, false);
    });

    it('should get property owner', async () => {
        await propertyListing.methods.listProperty(
            'Test Title',
            'Test Location',
            'Test Type',
            1000,
            2,
            1,
            'Test Description',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        const owner = await propertyListing.methods.getPropertyOwner(0).call();
        assert.equal(owner, accounts[0]);
    });

    it('should get property count', async () => {
        await propertyListing.methods.listProperty(
            'Test Title',
            'Test Location',
            'Test Type',
            1000,
            2,
            1,
            'Test Description',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        const count = await propertyListing.methods.getPropertyCount().call();
        assert.equal(count, 1);
    });

    it('should return property by index', async () => {
        await propertyListing.methods.listProperty(
            'Test Title',
            'Test Location',
            'Test Type',
            1000,
            2,
            1,
            'Test Description',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        const property = await propertyListing.methods.getPropertyByIndex(0).call();
        assert.equal(property.title, 'Test Title');
    });

    it('should return all properties', async () => {
        await propertyListing.methods.listProperty(
            'Test Title 1',
            'Test Location 1',
            'Test Type 1',
            1000,
            2,
            1,
            'Test Description 1',
            100000
        ).send({ from: accounts[0], gas: '1000000' });

        await propertyListing.methods.listProperty(
            'Test Title 2',
            'Test Location 2',
            'Test Type 2',
            1500,
            3,
            2,
            'Test Description 2',
            150000
        ).send({ from: accounts[1], gas: '1000000' });

        const allProperties = await propertyListing.methods.getAllProperties().call();
        assert.equal(allProperties.length, 2);
    });
});
