class Api::ProjectsController < ApplicationController
  def project_list
  	@projects = Project.all.to_a
    respond_to do |format|
      format.json{render json: {projects: @projects}}
    end	
  end
  
  def create
  	project = Project.new(project_params)
  	if project.save
  	  render json: {status: "success", id: project.id}
  	else
  	  render json: {status: "failed"}	
  	end	
  end	
  
  def update
    project = Project.find(params[:id])
    if project.update_attributes!(project_params)
      render json: {status: "success"}
    else
      render json: {status: "failed"}	
    end	
  end
  
  def destroy
    project = Project.find(params[:id])
    if project.destroy
    	render json: {status: "success"}
    else
      render json: {status: "failed"}
    end	
  end
  
  private
  
  def project_params
    params.require(:project).permit!
  end	
end