class Match < ApplicationRecord

  belongs_to :doggo, foreign_key: "doggo_id", class_name: "Doggo"
  belongs_to :friend, foreign_key: "friend_id", class_name: "Doggo"
  
  # validates :doggo_id, uniqueness: {scope: :doggo_id}
  validates :friend_id, uniqueness: {scope: :doggo_id}
  validate :void_self_friendship
  # :doggo_id cant equal :friend_id

  def void_self_friendship
    if doggo_id == friend_id
      errors.add(:doggo_id, 'cannot friend self you lonely doggo')
    end
  end
end
