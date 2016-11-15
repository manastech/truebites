class ArgumentViewVersionStatement < ActiveRecord::Base
  belongs_to :argument_view_version
  belongs_to :statement
  acts_as_list scope: :argument_view_version
end
