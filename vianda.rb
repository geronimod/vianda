require 'sinatra'
require "sinatra/reloader" if development?
require 'sinatra/sequel'
require './db/config'
require 'json'
require 'haml'

use Rack::Logger

helpers do
  def logger
    request.logger
  end
end

#require 'rack-flash'
#require 'partials'
#require 'helpers'

#enable :sessions
#use Rack::Flash

# helpers Sinatra::Helpers
# helpers Sinatra::Partials  
# helpers Sinatra::Texts  

get '/' do
  haml :home
end

get '/lunch_suggestions' do
  LunchSuggestion.order(Sequel.desc(:updated_at)).to_json
end

get '/lunch_suggestions/:id' do
  ls = LunchSuggestion.find(id: params[:id])
  return status 404 unless ls
  ls.to_json
end

post '/lunch_suggestions' do
  request.body.rewind
  form_params = JSON.parse(request.body.read)
  params.merge! form_params
  
  user = User.create params[:user]
  chef = user.add_chef params[:chef]
  ls   = chef.add_lunch_suggestion params[:lunch_suggestion]
  
  params[:menus].each { |m| ls.add_menu m }
  ls.to_json
end

put '/lunch_suggestions/:id' do
  request.body.rewind
  form_params = JSON.parse(request.body.read)
  params.merge! form_params
  
  ls = LunchSuggestion.find(id: params[:id])
  return status 404 unless ls
  
  ls.chef.user.update(params[:user])
  ls.chef.update(params[:chef])

  ls.remove_all_menus
  params[:menus].each { |m| ls.add_menu(m) }

  ls.update(params[:lunch_suggestion])
  
  status 202
  ls.to_json
end

delete '/lunch_suggestions/:id' do
  ls = LunchSuggestion.find(id: params[:id])
  return status 404 unless ls
  ls.destroy
  status 202
  ls.to_json
end

