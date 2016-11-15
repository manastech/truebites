class Argument < ActiveRecord::Base
  has_many :argument_views
  validates_presence_of :argument_views

  def self.new_with_statements(user, statements)
    argument = self.new
    view = argument.argument_views.new user: user
    conclusion = statements.pop
    statements_objects = statements.map {|content| Statement.find_or_initialize_by content: content }
    view.versions.new statements: statements_objects, conclusion: conclusion
    argument
  end

  def last_conclusion
    ArgumentViewVersion.joins(:argument_view).where(argument_views: { argument_id: self.id }).order('updated_at desc').limit(1).first.conclusion
  end
end
