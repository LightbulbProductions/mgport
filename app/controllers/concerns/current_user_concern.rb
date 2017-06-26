module CurrentUserConcern
   extend ActiveSupport::Concern
   
  def current_user
    super || guest_user
  end
  #possibly add a name and then devise whitelist it in future.
  def guest_user
    OpenStruct.new(email: "testy@test.com")
  end
end