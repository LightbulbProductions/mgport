class Portfolio < ApplicationRecord
  has_many :technologies
  accepts_nested_attributes_for :technologies,
                                allow_destroy: true,
                                reject_if: lambda { |attrs| attrs['name'].blank? }
  
  validates_presence_of :title, :body #:subtitle, :main_image, :thumb_image
  
  mount_uploader :thumb_image, PortfolioUploader
  mount_uploader :main_image, PortfolioUploader
  
  def self.rails
    where(subtitle: 'Ruby on Rails')
  end
  
  def self.react
    where(subtitle: 'React')
  end
  
  def self.by_position
    order("position ASC")
  end
end
