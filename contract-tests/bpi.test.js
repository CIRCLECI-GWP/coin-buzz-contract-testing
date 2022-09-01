const { getData } = require('../lib/request-helper')
const { schemaValidation } = require('../lib/validateContractSchema');
const { BPIContract } = require('../contracts/bpi-contracts');

describe('BPI contracts', () => {
    test('CNY bpi contract schema check', async () => {
        const response = await getData({
            url: 'https://api.coindesk.com/v1/bpi/currentprice/CNY.json' });
        return schemaValidation(response, BPIContract);
    });
});