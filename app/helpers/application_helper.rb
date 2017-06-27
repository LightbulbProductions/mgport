module ApplicationHelper
  def login_helper
	   if current_user.is_a?(User) 
	    link_to "Sign Out", destroy_user_session_path, method: :delete 
	    #link_to "Sign In", new_user_session_path 
	    #link_to "Sign Up", new_user_registration_path 
	   end 
  end
  
  def source_helper
   if session[:source] 
     msg = "Aww, Shucks! Thanks for visiting me from #{session[:source]}"
     content_tag(:div, msg.html_safe)
   end 
  end
end
