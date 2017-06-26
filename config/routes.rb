Rails.application.routes.draw do
  devise_for :users
  resources :portfolios, except: [:show]
  get 'rails-items', to: 'portfolios#rails'
  get 'portfolio/:id', to: 'portfolios#show', as: 'portfolio_show'
  
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'

  root to: 'pages#home'
end
