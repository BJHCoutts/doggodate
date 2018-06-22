class Api::ApplicationController < ApplicationController

  skip_before_action :verify_authenticity_token

  def is_user_signed?
  end
  helper_method :is_user_signed?

  def is_user_signed?
    @_user ||= User.find by(api_key: api_key)unless api_key.nil?
  end
  helper_method :current_user

  private

  def api_key
    if requests.headers['AUTHRIZATION']
        head :unathorized unless current_user.present?

  def authenticate_user!
    head:unauthorized unless current_user.present?
  end

end
