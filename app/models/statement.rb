class Statement < ActiveRecord::Base
  validates_presence_of :content, :argument
  belongs_to :argument
  has_many :statement_votes

  def votes_for(user)
    positive = negative = 0
    user_agree = nil
    statement_votes.each { |vote|
      if vote.user == user
        user_agree = vote.agree?
      else
        if vote.agree?
          positive += 1
        else
          negative += 1
        end
      end
    }
    {agree: positive, disagree: negative, current_user: user_agree}
  end
end
