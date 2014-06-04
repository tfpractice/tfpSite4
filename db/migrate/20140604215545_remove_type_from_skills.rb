class RemoveTypeFromSkills < ActiveRecord::Migration
  def change
    remove_column :skills, :type, :string
  end
end
