class ProjectsController < ApplicationController
  def index
    render layout: "angular"
  end

  def project_list
  	@projects = Project.all.to_a
    respond_to do |format|
      format.json{render json: {projects: @projects}}
    end	
  end	
end
