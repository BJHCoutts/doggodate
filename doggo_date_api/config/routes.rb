Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :doggos, only: [:index]
      # resources :users, only: [:create, :new]
      # resource :session, only: [:create, :destroy]
    end
  end

  # get('/', {to: 'doggos#index', as: 'root' })

  # resources :doggos, only: [:show]


end
