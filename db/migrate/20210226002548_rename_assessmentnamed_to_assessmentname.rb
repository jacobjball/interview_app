class RenameAssessmentnamedToAssessmentname < ActiveRecord::Migration[6.0]
  def change
    rename_column :assessments, :assessment_named, :assessment_name
  end
end
