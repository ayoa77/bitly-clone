@error = []

get '/' do
  @list = Url.all
  erb :"static/index"
end


post '/urls' do
  url = Url.new()
  @input = params[:long_url]
  url.long_url = @input
  url.short_url = url.shorten
  url.to_json
  if url.save
#     redirect '/'
#   else
#     @error = url.errors.messages[:long_url]
#
#     @list = Url.all
#     erb :"static/index"
#   end
# end
# i.e. /q6bda
get '/:short_url' do
  url = Url.find_by(short_url: params[:short_url])
  to_page = url.long_url
  url.click_count += 1
  url.save
  redirect to_page
end
  # redirect to appropriate "long" url
