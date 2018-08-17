class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!

  def current
    render json: current_user
  end

  def index
    @users = User.order(created_at: :desc) #limit(10)
    render json: @users
    # respond_to do |format|
    #   format.html { render }
    #   format.json { render json: @doggos }
    end

end
