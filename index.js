// internal 
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

var wallet = {
    "address": "0x0000000000000000000000000000000000000000",
    "balance": 0,
    "transactions": [
        {
            "hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "from": "0x0000000000000000000000000000000000000000",
            "to": "0x0000000000000000000000000000000000000000",
            "value": 0,
            "blockNumber": 0,
            "timeStamp": 0,
            "gas": 0,
            "gasPrice": 0,
            "gasUsed": 0,
            "confirmations": 0
        }
    ]
}
export default wallet;
