class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.boolean :portfolio
      t.date :year
      t.references :subject, index: true

      t.timestamps
    end
  end
end
