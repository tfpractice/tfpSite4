require 'test_helper'

class Admin::SkillsControllerTest < ActionController::TestCase
  setup do
    @skill = skills(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:skills)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create skill" do
    assert_difference('Skill.count') do
      post :create, skill: { category_id: @skill.category_id, name: @skill.name, portfolio: @skill.portfolio, proficiency: @skill.proficiency }
    end

    assert_redirected_to admin_skill_path(assigns(:skill))
  end

  test "should show skill" do
    get :show, id: @skill
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @skill
    assert_response :success
  end

  test "should update skill" do
    patch :update, id: @skill, skill: { category_id: @skill.category_id, name: @skill.name, portfolio: @skill.portfolio, proficiency: @skill.proficiency }
    assert_redirected_to admin_skill_path(assigns(:skill))
  end

  test "should destroy skill" do
    assert_difference('Skill.count', -1) do
      delete :destroy, id: @skill
    end

    assert_redirected_to admin_skills_path
  end
end
