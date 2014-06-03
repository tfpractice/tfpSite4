class Category < ActiveRecord::Base
	has_and_belongs_to_many :projects
	has_many :subjects, through: :projects

	scope :portfolio, -> {where(portfolio: true)}
	
	rails_admin do
	    configure :subjects do
	      visible(false)
	    end
	end
end
