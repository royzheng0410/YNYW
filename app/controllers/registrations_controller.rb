class RegistrationsController < Devise::RegistrationsController
  before_filter :configure_permitted_parameters

  protected

  def configure_permitted_parameters
    # devise_parameter_sanitizer.for(:sign_up).push(:university_id, :user_name, :campus_id)
  end
end