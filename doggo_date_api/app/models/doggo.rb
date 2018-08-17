class Doggo < ApplicationRecord

  belongs_to :user

  # has_many :matches, dependent: destroy
  # has_many :Matched_doggos, through :matches, source: :doggo

end
