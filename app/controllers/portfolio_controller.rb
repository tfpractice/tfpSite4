class PortfolioController < ApplicationController
	  before_action :set_subject, :set_project, :set_category


   def index
  	@subjects = Subject.includes(:projects, :categories).all
  	@projects = Project.includes(:categories).all
  	@categories = Category.includes(:projects).all
  	#@subject = Subject.find(params[:id])
     
     respond_to do |format|
      format.html
      format.xml { render :xml => @projects.to_xml }
      format.js {}
    end

end


private
    # Use callbacks to share common setup or constraints between actions.
    def set_subject
     # @subject = Subject.find(params[:id])
      @subject = Subject.includes(:projects, :categories).where(id: params[:id])

    end
    def set_project
      @project = Project.includes(:categories).where(id: params[:id])
    end
    def set_category
      @category = Category.includes(:projects).where(id: params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def subject_params
      params.require(:subject).permit(:name, :description, :portfolio)
    end
    def category_params
      params.require(:category).permit(:name, :description, :portfolio)
    end
    def project_params
      params.require(:project).permit(:name, :description, :portfolio, :year, :subject_id, :subject_type)
    end
end
