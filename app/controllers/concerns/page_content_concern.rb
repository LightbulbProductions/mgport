module PageContentConcern
   extend ActiveSupport::Concern
   
   included do
     before_filter :set_page_defaults
   end
   
   def set_page_defaults
     @page_title = "Michelle Gerber | Web Developer"
     @seo_keywords = "Michelle Gerber portfolio,
                      Michelle Gerber Brooklyn NY,
                      Michelle Gerber, web developer,
                     full-stack engineer, coding, 
                     programmer, programming, code, 
                     ruby on rails, rails, webdev, technology,
                     women in tech, Michelle Gerber developer,"
   end
end