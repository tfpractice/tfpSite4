class AddSkillableToSkills < ActiveRecord::Migration
  def change
    add_reference :skills, :skillable, polymorphic: true, index: true
  end
end
