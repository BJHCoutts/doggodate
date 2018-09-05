class Match < ApplicationRecord

  belongs_to :doggo
  belongs_to :friend, class_name: "Doggo"
  # validates :doggo_id, uniqueness: {scope: :doggo}

end
