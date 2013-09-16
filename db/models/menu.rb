class Menu < Sequel::Model
  include Callbacks
  
  many_to_one :lunch_suggestion
  
  plugin :json_serializer, except: :lunch_suggestion_id
end