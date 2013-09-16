require 'rubygems'
require 'bundler'

Bundler.require

$LOAD_PATH.unshift File.dirname(__FILE__)

require 'vianda'

root_dir = File.dirname(__FILE__)

#set :public_folder, File.expand_path(File.dirname(__FILE__) + '/public') #Include your public folder
#set :views, File.expand_path(File.dirname(__FILE__) + '/views')  #Include the views
#set :config, File.expand_path(File.dirname(__FILE__) + '/config')  #Include the config

set :root, root_dir
set :app_file, File.join(root_dir, 'vianda.rb')

disable :run

run Sinatra::Application