class Api::V1::DoggosController < Api::ApplicationController
  
  def create
    doggo = Doggo.new doggo_params
    doggo.user = current_user

    doggo.save!
    render json: { id: doggo.id }
  end
  
  def index
    doggos = Doggo.order(created_at: :desc) #limit(10)
    render(
      json: doggos,
      # each_serializer: DoggosCollectionSerialzer
    )
    # respond_to do |format|
    #   format.html { render }
    #   format.json { render json: @doggos }
  end

  def show    
    render(json: doggo)
  end


  # def destroy
  #   doggo.destroy
  #   render(json: { status: 200 }, status:200)
  # end

  private
  
  def doggo
    @doggo ||= Doggo.find params[:id]
  end

  def doggo_params
    params.require(:doggo).permit(
      :id, 
      :name, 
      :breed, 
      :sound, 
      :meme_phrase, 
      :age, 
      :gender, 
      :coat_length, 
      :size, 
      :category,
      :park,
      :avatar,
      :image,
      :friends,
      :matches,
    )
  end

end