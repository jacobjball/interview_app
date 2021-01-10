require 'test_helper'

class Api::AdminstratorsControllerTest < ActionDispatch::IntegrationTest
  test "should get interviewers" do
    get api_adminstrators_interviewers_url
    assert_response :success
  end

  test "should get interviewees" do
    get api_adminstrators_interviewees_url
    assert_response :success
  end

  test "should get assessments" do
    get api_adminstrators_assessments_url
    assert_response :success
  end

  test "should get assessment_questions" do
    get api_adminstrators_assessment_questions_url
    assert_response :success
  end

  test "should get assessment_answers" do
    get api_adminstrators_assessment_answers_url
    assert_response :success
  end

end
