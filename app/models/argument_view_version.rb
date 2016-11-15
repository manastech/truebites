class ArgumentViewVersion < ActiveRecord::Base
  belongs_to :argument_view
  belongs_to :previous
  has_many :argument_view_version_statements, -> { order(position: :asc) }
  has_many :statements, through: :argument_view_version_statements
  delegate :user, :argument, to: :argument_view
  validates_presence_of :statements, :conclusion
end
