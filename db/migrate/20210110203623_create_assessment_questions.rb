class CreateAssessmentQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :assessment_questions do |t|
      t.string :question_category
      t.string :question
      t.belongs_to :administrator, null: false, foreign_key: true

      t.timestamps
    end
  end
end
