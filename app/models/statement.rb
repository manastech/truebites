class Statement < ActiveRecord::Base
  validates_presence_of :content, :argument
  belongs_to :argument
end
