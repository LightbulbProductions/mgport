module ApplicationHelper
  def login_helper
	   if current_user.is_a?(User) 
	    link_to "Sign Out", destroy_user_session_path, method: :delete 
	    #link_to "Sign In", new_user_session_path 
	    #link_to "Sign Up", new_user_registration_path 
	   end 
  end
  
  def nav_items
    [
      {
        url: root_path,
        title: 'Home'
      },
      {
        url: about_path,
        title: 'About Me'
      },
      {
        url: portfolios_path,
        title: 'Portfolio'
      },
      {
        url: contact_path,
        title: 'Contact'
      },
    ]
end
  def nav_helper style, tag_type
      nav_links = ''
      tag_class = 'nav-item' if tag_type == 'li'
      nav_items.each do |item|
        nav_links << "<#{tag_type} class='#{tag_class}' ><a href='#{item[:url]}' class='#{style} #{active? item[:url]}'>#{item[:title]}</a></#{tag_type}>"
      end
      nav_links.html_safe
    end

    def nav_style_helper style
      puts 'style passed'
      style
    end

    def active? path
      "active" if current_page? path
  end
  
  def source_helper
   if session[:source] 
     msg = "Aww, Shucks! Thanks for visiting me from #{session[:source]}"
     content_tag(:div, msg.html_safe)
   end 
  end
  
  def copyright_generator
    SiteViewTool::Renderer.copyright 'Michelle Gerber', 'All Rights Reserved'
  end
end
