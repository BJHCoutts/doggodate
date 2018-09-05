class Api::V1::MatchesController < Api::ApplicationController
  before_action :authenticate_user!
  
  def create
    match = Match.new params
    # doggo.user = current_user

    match.save!
    render json: { id: doggo.id }
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

  # def doggo_params
  #   params.require(:doggo).permit(
  #     :id, 
  #     :name, 
  #     :breed, 
  #     :sound, 
  #     :meme_phrase, 
  #     :age, 
  #     :gender, 
  #     :coat_length, 
  #     :size, 
  #     :category,
  #     :park,
  #     # :image
  #   )
  # end

end