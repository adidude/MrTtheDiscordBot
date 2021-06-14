module.exports = {
  name: 'clear',
  aliases: ['cq'],
  category: 'Music',
  utilisation: '{prefix}clear-queue',

  execute(client, message) {
      if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel you FOOL!`);

      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel you FOOL!`);

      if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

      if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - There is only one song in the queue.`);

      client.player.clearQueue(message);

      message.channel.send(`${client.emotes.success} - The queue has just been **removed** !`);
  },
};