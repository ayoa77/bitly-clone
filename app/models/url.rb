class Url < ActiveRecord::Base
validates :long_url, presence:{ message: "FEED him something!" }
validates_format_of :long_url, :with => URI::regexp(%w(http https)), :message => "Enter a valid url, please!"
  def shorten
      short = ([*('A'..'Z'),*('0'..'9'),*('a'..'z')]-%w(0 1 I O)).sample(7).join('')
      short
  end
end
