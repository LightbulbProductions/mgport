class Portfolio < ApplicationRecord
  has_many :technologies
  accepts_nested_attributes_for :technologies,
                                allow_destroy: true,
                                reject_if: lambda { |attrs| attrs['name'].blank? }
  
  validates_presence_of :title, :body
  
  include Placeholder
  validates_presence_of :title, :subtitle, :main_image, :thumb_image
  
  def self.rails
    where(subtitle: 'Ruby on Rails')
  end
  
  def self.react
    where(subtitle: 'React')
  end
  
  def self.by_position
    order("position ASC")
  end
  
  #after_initialize :set_defaults
  
  #def set_defaults
   # self.main_image ||= Placeholder.image_generator(height: '600', width: '400')
    #self.thumb_image ||= Placeholder.image_generator(height: '350', width: '200')
    #end
end
