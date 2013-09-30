require 'sinatra'
require "sinatra/reloader" if development?
require 'sinatra/sequel'
require 'sinatra/assetpack'
require './db/config'
require 'json'
require 'haml'

use Rack::Logger

helpers do
  def logger
    request.logger
  end
end

register Sinatra::AssetPack

assets {
  serve '/js',     from: 'public/js'        # Default
  serve '/css',    from: 'public/css'       # Default
  serve '/images', from: 'public/images'    # Default

  # The second parameter defines where the compressed version will be served.
  # (Note: that parameter is optional, AssetPack will figure it out.)
  js  :application, '/js/application.js', [
    '/js/jquery.min.js',
    '/js/jquery.cookie.js',
    '/js/jquery.ex.js',
    '/js/underscore.min.js',
    '/js/backbone.min.js',
    '/js/bootstrap.min.js',
    '/js/form2js.js',
    '/js/app.js'
  ]
  
  css :application, '/css/application.css', [
    '/css/bootstrap.min.css', 
    '/css/font-awesome/css/font-awesome.min.css',
    '/css/screen.css'
  ]

  js_compression  :jsmin    # :jsmin | :yui | :closure | :uglify
  css_compression :simple   # :simple | :sass | :yui | :sqwish
}

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

