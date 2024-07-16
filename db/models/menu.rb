class Menu < Sequel::Model
  include Callbacks

  many_to_one :lunch_suggestion

  plugin :json_serializer, except: :lunch_suggestion_id

  def updated_at
    self[:updated_at] ||= Time.now
    self[:updated_at].strftime "%y.%m.%d %H:%M"
  end

  def after_save
    super
    lunch_suggestion.touch
  end

  def today
    self[:updated_at] && self[:updated_at].to_date == Date.today
  end

  def yesterday
    self[:updated_at] && self[:updated_at].to_date == Date.today-1
  end

  def values
    @values.merge today: today, yesterday: yesterday
  end

end