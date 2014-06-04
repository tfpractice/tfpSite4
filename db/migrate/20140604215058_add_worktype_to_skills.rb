class AddWorktypeToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :worktype, :string
  end
end
