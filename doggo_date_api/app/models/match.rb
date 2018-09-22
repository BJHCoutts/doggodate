class Match < ApplicationRecord

  belongs_to :doggo, foreign_key: "doggo_id", class_name: "Doggo"
  belongs_to :friend, foreign_key: "friend_id", class_name: "Doggo"
  
  # validates :doggo_id, uniqueness: {scope: :doggo_id}
  # validates :doggo_id, uniqueness: {scope: :friends_id}
  # :doggo_id cant equal :friend_id

end
