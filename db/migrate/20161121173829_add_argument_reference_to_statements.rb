class AddArgumentReferenceToStatements < ActiveRecord::Migration
  def change
    remove_index :statements, :content
    add_reference :statements, :argument, index: true, foreign_key: true
    add_index :statements, [:argument_id, :content], :unique => true
  end
end
