require 'xivapi'

client = XIVAPI::Client.new(api_key: 'e1168adbf28d426a8b536a2e95fe4d43c19d57a270fd46b09589f78a95a73cc2')


def test()
    achievements = client.servers
end