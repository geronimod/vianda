class LunchSuggestion < Sequel::Model
  include Callbacks
  
  many_to_one :chef
  one_to_many :menus

  plugin :json_serializer, include: [:chef, :menus], except: :chef_id

  def before_destroy
    remove_all_menus
  end

  def touch
    update updated_at: Time.now
  end
end