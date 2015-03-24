class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_acces
  def set_acces
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Request-Method'] = %w{GET POST PUT OPTIONS}.join(",")
  end	
end
