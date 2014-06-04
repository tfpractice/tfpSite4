class AddTypeToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :type, :string
  end
end
