Q_FILE_LOCATION = "./moogleQuotes.txt"
I_FILE_LOCATION = "./insults.txt"

#Q_FILE_LOCATION = "/Users/toptierpanda/Documents/CodingProjects/Ruby/mooglebot/yugiQuotes.txt"
#I_FILE_LOCATION = "/Users/toptierpanda/Documents/CodingProjects/Ruby/mooglebot/insults.txt"

def quote_array(qArray)
    qCount = 0

    quotes = open(Q_FILE_LOCATION, 'r')
    quotes.each_line { |line| qArray.push(line) }
    quotes.close

    qCount = File.foreach(Q_FILE_LOCATION).inject(0) {|c, line| c+1}

    return qCount
end

def add_quote(qArray, quote)
    string = quote.join(" ")
    open(Q_FILE_LOCATION, 'a') do |line|
        line.puts(string)
    end
    qArray.push(string)
end

def insult_array(iArray)
    iCount = 0

    quotes = open(I_FILE_LOCATION, 'r')
    quotes.each_line { |line| iArray.push(line) }
    quotes.close

    iCount = File.foreach(I_FILE_LOCATION).inject(0) {|c, line| c+1}
    return iCount
end

def add_quote(qArray, quote)
    string = quote.join(" ")
    open(I_FILE_LOCATION, 'a') do |line|
        line.puts(string)
    end
    iArray.push(string)
end

