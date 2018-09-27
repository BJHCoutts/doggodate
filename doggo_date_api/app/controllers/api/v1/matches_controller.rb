class Api::V1::MatchesController < Api::ApplicationController
  before_action :authenticate_user!
  
  def create

    match = Match.new match_params
    
    # doggo.user = current_user

    match.save!
    render json: true
  end
    
  def index
    matches = Doggo.Match.order(created_at: :desc) #limit(10)
    render(
      json: matches,
      # each_serializer: DoggosCollectionSerialzer
    )
    # respond_to do |format|
    #   format.html { render }
    #   format.json { render json: @doggos }
  end

  def show    
    render(json: match)
  end

  # private
  
  # def doggo
  #   @doggo ||= Doggo.find params[:id]
  # end

  def match_params
    params.require(:match).permit(
      # :id, 
      :doggo_id, 
      :friend_id
      # :state, 
      # :friended_at,
    )
  end

end