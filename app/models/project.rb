class Project < ActiveRecord::Base
  belongs_to :subject
  has_many :images
  has_and_belongs_to_many :categories
  

  scope :nonDev, -> {where.not(subject_id: 4)}

  scope :portfolio, -> {where(portfolio: true)}
end
