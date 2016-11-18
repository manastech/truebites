class AddTitleDescriptionAndAuthorToArguments < ActiveRecord::Migration
  def change
    add_column :arguments, :title, :string
    add_column :arguments, :description, :text
    add_reference :arguments, :author, index: true, foreign_key: true
  end
end
