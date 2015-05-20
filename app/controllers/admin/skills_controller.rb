class Admin::SkillsController < ApplicationController
  before_action :set_skill, only: [:show, :edit, :update, :destroy]

  # GET /admin/skills
  # GET /admin/skills.json
  def index
    @skills = Skill.all
  end

  # GET /admin/skills/1
  # GET /admin/skills/1.json
  def show
  end

  # GET /admin/skills/new
  def new
    @skill = Skill.new
  end

  # GET /admin/skills/1/edit
  def edit
  end

  # POST /admin/skills
  # POST /admin/skills.json
  def create
    @skill = Skill.new(skill_params)

    respond_to do |format|
      if @skill.save
        format.html { redirect_to [:admin, @skill], notice: 'Skill was successfully created.' }
        format.json { render action: 'show', status: :created, location: @skill }
      else
        format.html { render action: 'new' }
        format.json { render json: @skill.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/skills/1
  # PATCH/PUT /admin/skills/1.json
  def update
    respond_to do |format|
      if @skill.update(skill_params)
        format.html { redirect_to [:admin, @skill], notice: 'Skill was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @skill.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/skills/1
  # DELETE /admin/skills/1.json
  def destroy
    @skill.destroy
    respond_to do |format|
      format.html { redirect_to admin_skills_url, notice: 'Skill was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_skill
      @skill = Skill.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def skill_params
      params.require(:skill).permit(:name, :proficiency, :category_id, :portfolio)
    end
end
