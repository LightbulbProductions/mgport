module SourceConcern
  extend ActiveSupport::Concern
  
  included do 
    before_action :source_concern
  end
  
  def source_concern
    session[:source] = params[:q] if params[:q]
  end
end