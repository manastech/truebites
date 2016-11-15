class SortingVersionsAndStatements < ActiveRecord::Migration
  def change
    rename_table :argument_view_versions_statements, :argument_view_version_statements
    add_column :argument_view_version_statements, :position, :integer
  end
end
