class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :name
      t.integer :proficiency
      t.references :category, index: true
      t.boolean :portfolio

      t.timestamps
    end
  end
end
