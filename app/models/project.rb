class Project < ActiveRecord::Base
  belongs_to :subject
  has_many :images
  has_and_belongs_to_many :categories
  
  scope :portfolio, -> {where(portfolio: true)}
end
