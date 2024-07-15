Sequel.extension :named_timezones
Sequel.default_timezone = 'America/Argentina/Buenos_Aires'

database_url = ENV['DATABASE_URL'] || "postgres://@localhost/vianda_#{ENV['RACK_ENV']}"
set :database, database_url

require './db/migrations'
require './db/callbacks'
Dir["./db/models/*.rb"].each { |file| require file }

# Sequel::Model.plugin :json_serializer