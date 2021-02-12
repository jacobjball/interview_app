Rails.application.routes.draw do
  namespace :api do

resources :administrators do
    resources :interviewers do
      resources :interviewees do
      end
    end
  end
  resources :assessments do
    resources :assessment_questions do
      resources :assessment_answers do
      end
    end
  end
end
end
