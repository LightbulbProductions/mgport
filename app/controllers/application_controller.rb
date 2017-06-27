class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SourceConcern
  include CurrentUserConcern
  include PageContentConcern
  
end
