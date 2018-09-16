class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!

  def current
    render json: current_user
  end

  # self.image.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'placeholder-icon.png')), filename: 'Littlefinger_Main.jpg', content_type: 'image/png')

  def user_avatar(user_id)
    user = User.find!(user_id)
    if user.avatar.attached?
      image_tag user.avatar
    else
      image_tag "../images/Littlefinger_Main.jpg"
    end
  end

  def index
    @users = User.order(created_at: :desc) #limit(10)
    render json: @users
    # respond_to do |format|
    #   format.html { render }
    #   format.json { render json: @doggos }
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name, :last_name, :email, :address, :avatar
    )
  end

end
