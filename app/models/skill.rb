class Skill < ActiveRecord::Base
  #belongs_to :category, polymorphic: true
  belongs_to :skillable, polymorphic: true

  scope :svg, -> {where(worktype: "svg")}
  scope :styling, -> {where(worktype: "styling")}
  scope :scripting, -> {where(worktype: "scripting")}
  scope :framework, -> {where(worktype: "programming languages and frameworks")}
  scope :software, -> {where(worktype: "software engineering")}
 

end
