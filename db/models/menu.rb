class Menu < Sequel::Model
  include Callbacks
  
  many_to_one :lunch_suggestion
  
  plugin :json_serializer, except: :lunch_suggestion_id

  def updated_at
    self[:updated_at] ||= Time.now
    self[:updated_at].strftime "%d-%m %H:%M"
  end

  def after_save
    lunch_suggestion.touch
  end

end