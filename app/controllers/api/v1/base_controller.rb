class Api::V1::BaseController < ActionController::Metal
  include AbstractController::Rendering
  include ActionController::Redirecting
  include ActionView::Layouts
  include ActionController::Rendering
  include ActionController::Renderers::All
  include ActionController::MimeResponds
  include ActionController::ImplicitRender
  include ActionController::StrongParameters
  include ActionController::RequestForgeryProtection
  include AbstractController::Callbacks

  include ActionController::Helpers
  include ActionController::UrlFor
  include ActionController::ConditionalGet
  include ActionController::Caching
  include ActionController::Instrumentation
  include ActionController::ParamsWrapper
  include ActionController::DataStreaming

  include Rails.application.routes.url_helpers
  include ApplicationHelper
  helper ApplicationHelper

  append_view_path "#{Rails.root}/app/views/"

  helper_method :current_user
  helper_method :user_signed_in?
  before_action :load_data

  before_action :authenticate!

  def current_user
    @current_user ||= User.find_by_auth_token(request.env["HTTP_X_AUTH_TOKEN"])
    @current_user
  end

  def user_signed_in?
    request.env['HTTP_X_AUTH_TOKEN'].present? and current_user.present?
  end

  def authenticate!
    unless current_user
      error!({type: 'Unauthorised', message: 'Please login or signup'}, 401)
    end    
  end

  def error!(message, _status = 500)
    self.response_body = message.to_json
    self.status = _status
  end

  private

  def load_data
    self.content_type = 'application/json'
  end

end