require 'discordrb'
require 'streamio-ffmpeg'
require 'opus-ruby'

require 'configatron'
require_relative './config.rb'

require './data_collection.rb'
require './xiv_database.rb'

MP3TEST = './test.mp3'
REEE = './botImages/reee.gif'
BOI = './botImages/boi.gif'
YEET = './botImages/yeet.jpeg'
PAT =  './botImages/headpat.gif'
FAINT = './botImages/faint.gif'
TRAPPED = './botImages/trapped.gif'
BITCHES = './botImages/bitches.gif'

MOOGLEQUOTES = Array.new
INSULTQUOTES = Array.new

magic8Ball = ["Not so sure", "Ask me later", "Most likely", "Absolutely not", "Outlook is good", "I see good things happening", "Never",
    "Negative", "Could be", "Unclear, ask again", "Yes", "No", "Possible, but not probable"
]

qCount = quote_array(MOOGLEQUOTES)
iCount = insult_array(INSULTQUOTES)


bot = Discordrb::Commands::CommandBot.new token: configatron.token, prefix: '!'

bot.command :echo  do |event, *word|
    sentence = words.join(" ")
    event << sentence
end

bot.command :usage do |event|
    event << '!echo <arg> => Repeats word you said boiii'
    event << '!quote => Grab a random quote from the quote list'
    event << '!quoteadd => Add a quote to the quote list to laugh at them laters'
    event << '!insultme => I will insult you'
    event << '!insultadd => Add an insult to insult you'
    event << '!ask => Ask the magic 8 ball a question.'
    event << '!flip => Does a coin flip for you'
    event << '!pat => Give me a head pat. :)'
    event << '!bitches => BITCHES'
    event << '!faint => FAINTING'
    event << '!trapped => ACTIVATED TRAP'
    event << 'ree => REEEEEEE!'
    event << 'yea boi => Get oiled up'
end

bot.command(:disconnect) do |event|
    channel = event.user.voice_channel
    
    next "You're not in any voice channel!" unless channel
    bot.voice_destroy(channel)
    "Disconnected From: #{channel.name}"
 end

bot.command(:connect) do |event|
     channel = event.user.voice_channel
    
     next "You're not in any voice channel!" unless channel
     bot.voice_connect(channel)
     "Connected to Voice Channel: #{channel.name}"
end

bot.command(:play) do |event, url|

    voice_bot = event.voice
    voice_bot = event.voice.play_file(MP3TEST)
end

#
# XIV API BLOCK
#

bot.command(:xivinfo) do |event|   
    event << test()
end



#
# PICTURE BLOCK
#
bot.command(:yeet) do |event|
    event << 'Get yeeted on, loser'
    event.send_file(File.open(YEET, 'r'))
end

bot.message(content: 'yea boi') do |event|
    event.respond 'yea boi!'
    event.send_file(File.open(BOI, 'r'))
end

#
# REE BLOCK
#
bot.message(content: 'ree') do |event|
	event.respond 'REEEEEEEEEEE!'
	event.send_file(File.open(REEE, 'r'))
end

bot.message(content: 'REE') do |event|
	event.respond 'REEEEEEEEEEE!'
	event.send_file(File.open(REEE, 'r'))
end

bot.message(content: 'Ree') do |event|
	event.respond 'REEEEEEEEEEE!'
	event.send_file(File.open(REEE, 'r'))
end

bot.message(content: 'Ree!') do |event|
	event.respond 'REEEEEEEEEEE!'
	event.send_file(File.open(REEE, 'r'))
end

bot.message(content: 'REE!') do |event|
	event.respond 'REEEEEEEEEEE!'
	event.send_file(File.open(REEE, 'r'))
end

bot.message(content: 'ree!') do |event|
	event.respond 'REEEEEEEEEEE!'
	event.send_file(File.open(REEE, 'r'))
end
#
# END REE BLOCK 
#

bot.mention do |event|
    event.user.pm('Get Dabbed on! Kupo~! \O>')
end

bot.command(:quote) do |event|
    event.respond MOOGLEQUOTES[rand(qCount)]
end

bot.command(:quoteadd) do |event, *string|   
    add_quote(MOOGLEQUOTES, string)
    qCount = qCount + 1
    event << 'Added Quote, Kupo~!'
end

bot.command(:insultme) do |event|
    event.respond INSULTQUOTES[rand(iCount)]
end

bot.command(:insultadd) do |event, *string|   
    add_insult(INSULTQUOTES, string)
    iCount = iCount + 1
    event << 'Added Insult, Kupo~!'
end

bot.command(:pat) do |event|
    event.send_file(File.open(PAT, 'r'))
    event << "N-Nani!? Head Pats for me!?"
end

bot.command(:ask) do |event|
    event.respond magic8Ball[rand(13)]
end

bot.command(:flipcoin) do |event|
    number = rand(2)
    if number == 1
        event << "HEADS!"
    else
        event << "TAILS!"
    end
end

##
# COMMAND IMAGES BLOCK
##
bot.command(:bitches) do |event|
    event.send_file(File.open(BITCHES, 'r'))
end

bot.command(:faint) do |event|
    event.send_file(File.open(FAINT, 'r'))
end

bot.command(:trapped) do |event|
    event.send_file(File.open(TRAPPED, 'r'))
end

bot.run
