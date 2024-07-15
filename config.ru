require 'rubygems'
require 'bundler'

Bundler.require

root_dir = File.dirname(__FILE__)
$LOAD_PATH.unshift root_dir

require 'vianda'

set :root, root_dir
set :app_file, File.join(root_dir, 'vianda.rb')
set :haml, { escape_html: false }
set :server, :puma

disable :run

run Sinatra::Application