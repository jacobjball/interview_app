class CreateAssessmentAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :assessment_answers do |t|
      t.integer :answer
      t.belongs_to :interviewee, null: false, foreign_key: true
      t.belongs_to :assessment_question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
