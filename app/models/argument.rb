class Argument < ActiveRecord::Base
  has_many :argument_views
  validates_presence_of :argument_views

  def self.new_with_statements(user, statements)
    argument = self.new
    view = argument.argument_views.new user: user
    statements_objects = statements.map {|content| Statement.find_or_initialize_by content: content }
    view.versions.new statements: statements_objects
    argument
  end
end
