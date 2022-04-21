//READY CODE
const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'bot prefix'
module.exports = client => {
  
  const aktiviteListesi = [
    `Hızlı Geceler 😈`
  ]

  client.user.setStatus('dnd')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}