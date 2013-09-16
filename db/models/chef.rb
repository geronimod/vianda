class Chef < Sequel::Model
  include Callbacks

  many_to_one :user
  one_to_many :lunch_suggestions

  plugin :json_serializer, include: :user, except: :user_id
end