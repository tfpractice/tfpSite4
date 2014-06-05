class Subject < ActiveRecord::Base
	has_many :projects
	has_many :categories, through: :projects
	has_many :skills, as: :skillable

	scope :portfolio, -> {where(portfolio: true)}

	rails_admin do
	    configure :categories do
	      visible(false)
	    end
	end
end
