const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Jakarta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1336652826583240745')
    .setType('PLAYING')
    .setURL('https://www.youtube.com/@farzynova') //Must be a youtube video link 
    .setState('')
    .setName('Ontime Website Server')
    .setDetails(`Monitoring Website 24/7 Nonstop`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1390953842140647486/1425475773099278377/Hosting.gif?ex=68ec5684&is=68eb0504&hm=904d887b756cd8d3ca74ea1407b278292865e81681164b387a89dbe82d61fbe5&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Rank - Conqueror') //Text when you hover the Large image

 .setAssetsSmallImage(' ') //You can put links in tenor or discord and etc.
    .setAssetsSmallText(' ') //Text when you hover the Small image
    
    .addButton('My Website', 'https://quencode.my.id')
    .addButton('GitHub Page', 'https://github.com/penyihir-html');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newState = `Clock [${newTime}]`;
      r.setState(newState);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
