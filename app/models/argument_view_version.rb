class ArgumentViewVersion < ActiveRecord::Base
  belongs_to :argument_view
  belongs_to :previous
  has_and_belongs_to_many :statements
  delegate :user, to: :argument_view
  validates_presence_of :statements, :conclusion
end
