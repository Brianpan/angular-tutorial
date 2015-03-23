class DemographicsController < ApplicationController
  def index
  end

  def twgeo
    twgeo = File.read("#{Rails.root}/tmp/twCounty2010.topo.json")
    twgeo_json = JSON.parse(twgeo)
    respond_to do |format|
      format.json{render json: twgeo_json}
    end	
  end	
  def testajax
    render json: {test: "success!"}
  end	
end
