class Doggo < ApplicationRecord

  belongs_to :user

  # has_many :matches, dependent: destroy
  # hans_many :inverse_matches, class_name: "Match", foreign_key: "friend_id", dependent: destroy
  # has_many :Matched_doggos, through :matches, source: :doggo

end
