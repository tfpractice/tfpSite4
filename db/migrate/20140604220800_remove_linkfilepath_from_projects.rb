class RemoveLinkfilepathFromProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :Linkfilepath, :string
  end
end
