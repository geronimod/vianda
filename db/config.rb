Sequel.extension :named_timezones
Sequel.default_timezone = 'America/Argentina/Buenos_Aires'

set :database, (development? ? 'sqlite://vianda.db' : ENV['HEROKU_POSTGRESQL_PINK_URL'])

require './db/migrations'
require './db/callbacks'
Dir["./db/models/*.rb"].each { |file| require file }

# Sequel::Model.plugin :json_serializer