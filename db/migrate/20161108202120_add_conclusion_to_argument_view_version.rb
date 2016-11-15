class AddConclusionToArgumentViewVersion < ActiveRecord::Migration
  def change
    add_column :argument_view_versions, :conclusion, :text
  end
end
