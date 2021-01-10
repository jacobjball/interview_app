class CreateInterviewees < ActiveRecord::Migration[6.0]
  def change
    create_table :interviewees do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.belongs_to :interviewer, foreign_key: true

      t.timestamps
    end
  end
end
