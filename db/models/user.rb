class User < Sequel::Model
  include Callbacks
  
  one_to_many :chefs

  plugin :json_serializer
end