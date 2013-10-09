module Callbacks

  def before_create
    self.created_at ||= Time.now
    super
  end

  def before_save
    self.updated_at = Time.now
    super
  end

end