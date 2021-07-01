const chai = require('chai');
const assert = chai.assert;
const Discord = require('discord.js');
const fs = require('fs');

// Make client for API calls
const client = new Discord.Client();

function getToken()
{
	fs.readFile('/home/adi/Desktop/tok.txt', 'utf-8', (err, data) =>
	{
		if (err) throw err;
		
	});
}

const token = getToken();
console.log(token);

/* describe('Discord API Tests:', () =>
{
	it('Connection state should be connected', () =>
	{
		return client.login(token).then(res => {assert.equal(res, token);});
	});
});*/

//client.login(token).then(res => {console.log(res);});