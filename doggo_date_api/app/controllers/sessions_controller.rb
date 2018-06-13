class SessionsController < ApplicationController

  def new
  end
  
  def create
    user = User.find_by(email: params[:session][:email])

    if user&authenticate(params[:session][:password])
      session[:user_id] =user.id

      flash[:notice] = `Doggo's Hooman #{user.first_name}, has signed in!`
    else
      flash[:notice] = `Doggo's Hooman has entered the wrong email...`
    end
  end

  def destroy
    session[:user_id] = nil

    flash[:notice] = "Hooman #{user.first_name} has left"
  end
end