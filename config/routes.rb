Rails.application.routes.draw do
	namespace :api, defaults: {format: :json} do
		resources :users, only: [:index, :show, :create]
		resources :teachers, only: [:index, :show]
		resources :languages, only: [:index]
	    resource :session, only: [:create, :destroy]
	end
	root to: 'static_pages#root'
end
