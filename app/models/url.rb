require 'securerandom'
require 'validate_url'

class Url < ActiveRecord::Base
validates :long_url, presence:{ message: "FEED him something!" }
# validates_format_of :long_url, :with => URI::regexp(%w(http https)), :message => "Enter a valid url, please!"
validates :long_url, :url => true
  def shorten
      short = SecureRandom.hex(3)
      short
  end
end
