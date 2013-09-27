require './db/migrations'
require './db/callbacks'
Dir["./db/models/*.rb"].each { |file| require file }

# Establish the database connection; or, omit this and use the DATABASE_URL
# environment variable as the connection string:
# set :database, (development? ? 'sqlite://vianda.db' : 'postgres://localhost/vianda')
set :database, 'postgres://localhost/vianda'

# Sequel::Model.plugin :json_serializer
