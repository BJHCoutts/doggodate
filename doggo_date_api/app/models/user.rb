class User < ApplicationRecord
  # has_secure_password()
  before_create :generate_api_key
  # has_one :doggo

  def full_name
    `${first_name} ${last_name}`
  end

  private

  def generate_api_key
    loop do
      self.api_key = SecureRandom.hex(32)
      break unless User.exists?(api_key: api_key)
    end
  end

end
