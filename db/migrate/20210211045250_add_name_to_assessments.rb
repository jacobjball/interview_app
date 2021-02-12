class AddNameToAssessments < ActiveRecord::Migration[6.0]
  def change
    add_column :assessments, :name, :string
  end
end
