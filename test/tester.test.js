const startTime = Date.now();
const chai = require('chai');
//const assert = chai.assert;
const expect = chai.expect;
// Import discord.js API library and login token.
const Discord = require('discord.js');

// Make client for API calls
const client = new Discord.Client();

//client.login(process.env.DISCORDTOKEN);
client.login('NjAyMTU1ODUyNTY0MjY3MDEy.XTMvVg.Q2Ynb1i-zDXdBjcrNSlgIyv9CyI');

let connected = false;

function determineConnStatus(state)
{
    return state;
}

const connWait = new Promise((determineConnStatus) => 
{
    setTimeout(() => 
    {
        if(connected)
        {
            determineConnStatus(true);
        }
        else
        {
            determineConnStatus(false);
        }
    },1999);
});

// Inform us when connected to server. Takes a maximum of 9000ms to connect.
client.once('ready', () => {
    const timeElapsed = Date.now() - startTime;
    console.log("Connected in " + timeElapsed + "ms");

    connected = true;
});



describe('Connection', () => {
    it('Connection state should be connected', (done) => {
        connWait.then((result) => 
        {
            expect(result).to.be.true;
            done();
            client.destroy();
        });
    });
});

//setTimeout(() => { process.exit() },3000);