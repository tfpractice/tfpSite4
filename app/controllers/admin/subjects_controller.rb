class Admin::SubjectsController < ApplicationController
  before_action :set_subject, only: [:show, :edit, :update, :destroy]

  # GET /admin/subjects
  # GET /admin/subjects.json
  def index
    @subjects = Subject.all
  end

  # GET /admin/subjects/1
  # GET /admin/subjects/1.json
  def show
  end

  # GET /admin/subjects/new
  def new
    @subject = Subject.new
  end

  # GET /admin/subjects/1/edit
  def edit
  end

  # POST /admin/subjects
  # POST /admin/subjects.json
  def create
    @subject = Subject.new(subject_params)

    respond_to do |format|
      if @subject.save
        format.html { redirect_to [:admin, @subject], notice: 'Subject was successfully created.' }
        format.json { render action: 'show', status: :created, location: @subject }
      else
        format.html { render action: 'new' }
        format.json { render json: @subject.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/subjects/1
  # PATCH/PUT /admin/subjects/1.json
  def update
    respond_to do |format|
      if @subject.update(subject_params)
        format.html { redirect_to [:admin, @subject], notice: 'Subject was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @subject.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/subjects/1
  # DELETE /admin/subjects/1.json
  def destroy
    @subject.destroy
    respond_to do |format|
      format.html { redirect_to admin_subjects_url, notice: 'Subject was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subject
      @subject = Subject.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def subject_params
      params.require(:subject).permit(:name, :description, :portfolio)
    end
end
