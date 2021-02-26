class RenameAssessmentNameToAssessmentname < ActiveRecord::Migration[6.0]
  def change
    rename_column :assessments, :name, :assessment_named
  end
end
