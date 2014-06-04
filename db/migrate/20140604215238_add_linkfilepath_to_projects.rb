class AddLinkfilepathToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :linkfilepath, :string
  end
end
