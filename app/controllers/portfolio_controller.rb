class PortfolioController < ApplicationController
	  before_action :set_subject, :set_project, :set_category, :set_project, :set_image, :set_skill

    layout "portfolio"


   def index
  	@subjects = Subject.includes(:projects, :categories).all
  	@projects = Project.includes(:categories).all
  	@categories = Category.includes(:projects, :skills).all
   # @skills = Skill.includes(:categories).all
    @skills = Skill.all
  	#@subject = Subject.find(params[:id])
     
     respond_to do |format|
      format.html
      format.xml { render :xml => @projects.to_xml }
      format.js {}
      format.json #{ render action: 'show', status: :created, location: @skill }

      #format.json { render action: 'show', status: :created, location: @skill }

    end

end

def show
    @subjects = Subject.includes(:projects, :categories).all
    @projects = Project.includes(:categories, :images).all
    @categories = Category.includes(:projects).all
   # @skills = Skill.includes(:categories).all
    @skills = Skill.all
   

     respond_to do |format|
      format.html
      format.xml { render :xml => @project.to_xml }
      format.js {} #{render partial: 'portfolio/project', object: @project}
      format.json { render action: 'show', status: :created, location: @skill }
    end
end

private
    # Use callbacks to share common setup or constraints between actions.
    def set_subject
     # @subject = Subject.find(params[:id])
      @subject = Subject.includes(:projects, :categories).where(id: params[:id])

    end
    def set_project
      @project = Project.includes(:categories, :images).where(id: params[:id])
    end
    def set_category
      @category = Category.includes(:projects).where(id: params[:id])
    end
     def set_skill
    #  @skill = Skill.includes(:categories).where(id: params[:id])
      @skill = Skill.where(id: params[:id])
    end
     # Use callbacks to share common setup or constraints between actions.
    def set_image
      @image = Image.where(id: params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def image_params
      params.require(:image).permit(:title, :dimensions, :medium, :mainFilepath, :thumbnailFilepath, :productionDate, :project_id)
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
     def skill_params
      params.require(:skill).permit(:name, :proficiency, :category_id, :portfolio)
    end
end
