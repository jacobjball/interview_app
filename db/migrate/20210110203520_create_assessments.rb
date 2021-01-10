class CreateAssessments < ActiveRecord::Migration[6.0]
  def change
    create_table :assessments do |t|
      t.string :assessment_type
      t.belongs_to :administrator, null: false, foreign_key: true

      t.timestamps
    end
  end
end
