source 'https://rubygems.org'

# fw
gem 'sinatra'
gem 'sinatra-contrib'

# orm
gem "sequel" 
gem "sinatra-sequel"

# template engine
gem 'haml'

# assets
gem 'sinatra-assetpack', :require => 'sinatra/assetpack'

group :production do
  gem "pg"
end

group :development, :test do
  gem "debugger"
  gem "sqlite3"
end
