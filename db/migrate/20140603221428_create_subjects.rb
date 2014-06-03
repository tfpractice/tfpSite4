class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :name
      t.text :description
      t.boolean :portfolio

      t.timestamps
    end
  end
end
