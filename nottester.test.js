const startTime = Date.now();
const chai = require('chai');
const assert = chai.assert;
// const expect = chai.expect;
// Import discord.js API library and login token.
const Discord = require('discord.js');
const fs = require('fs');

// Make client for API calls
const client = new Discord.Client();

// const fr = new FileReader()
let token = '';

fs.readFile('/home/adi/Desktop/tok.txt', 'utf-8', (err, data) =>
{
	if (err) throw err;
	token = data;
});

// client.login(process.env.DISCORDTOKEN);


let connected = false;

function determineConnStatus()
{
	setTimeout(() =>
	{
		if (connected)
		{
			return true;
		}
		else
		{
			return false;
		}
	}, 1500);
}

// const connWait = new Promise(determineConnStatus);

// Inform us when connected to server. Takes a maximum of 9000ms to connect.
client.once('ready', () =>
{
	const timeElapsed = Date.now() - startTime;
	console.log('Connected in ' + timeElapsed + 'ms');

	connected = true;
});


describe('Discord API Tests:', () =>
{
	it('Connection state should be connected', (done) =>
	{
		connWait.then((result) =>
		{
			expect(result).to.be.true;
			done();
			client.destroy();
		});
	});
});

// setTimeout(() => { process.exit() },3000);