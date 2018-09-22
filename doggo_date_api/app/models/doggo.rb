class Doggo < ApplicationRecord

  belongs_to :user
  
  has_many :matches
  has_many :friends, through: :matches
  
  # has_many :matches#, dependent: :destroy, foreign_key: "doggo_id", class_name: "Match"
  
  # has_many :friends, through: :matches #, dependent: :destroy #source doggo?
  
  # has_many :matches, dependent: destsroy
  # hans_many :inverse_matches, class_name: "Match", foreign_key: "friend_id", dependent: destroy
  # has_many :Matched_doggos, through :matches, source: :doggo
  
    has_one_attached :avatar, dependent: :destroy 
  
    has_many_attached :images, dependent: :destroy
  
end
