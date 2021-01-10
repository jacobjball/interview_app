class AssessmentAnswer < ApplicationRecord
  belongs_to :interviewee
  belongs_to :assessment_question
end
