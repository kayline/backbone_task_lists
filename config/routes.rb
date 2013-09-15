BackboneTaskLists::Application.routes.draw do
  root :to => 'lists#home'
  resources :tasks, :lists
end
