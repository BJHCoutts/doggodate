class Api::V1::DoggosController < Api::ApplicationController

  def index
    @doggos = Doggo.order(created_at: :desc) #limit(10)
    render json: @doggos
    # respond_to do |format|
    #   format.html { render }
    #   format.json { render json: @doggos }
    end
  end

end
