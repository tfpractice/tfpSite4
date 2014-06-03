class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.string :dimensions
      t.string :medium
      t.string :mainFilepath
      t.string :thumbnailFilepath
      t.date :productionDate
      t.references :project, index: true

      t.timestamps
    end
  end
end
