set :database, (development? ? 'sqlite://vianda.db' : 'postgres://vianda')

require './db/migrations'
require './db/callbacks'
Dir["./db/models/*.rb"].each { |file| require file }

# Sequel::Model.plugin :json_serializer
