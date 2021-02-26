# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_26_002548) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "administrators", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "assessment_answers", force: :cascade do |t|
    t.integer "answer"
    t.bigint "interviewee_id", null: false
    t.bigint "assessment_question_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assessment_question_id"], name: "index_assessment_answers_on_assessment_question_id"
    t.index ["interviewee_id"], name: "index_assessment_answers_on_interviewee_id"
  end

  create_table "assessment_questions", force: :cascade do |t|
    t.string "question_category"
    t.string "question"
    t.bigint "administrator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["administrator_id"], name: "index_assessment_questions_on_administrator_id"
  end

  create_table "assessments", force: :cascade do |t|
    t.string "assessment_type"
    t.bigint "administrator_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "assessment_name"
    t.index ["administrator_id"], name: "index_assessments_on_administrator_id"
  end

  create_table "interviewees", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.bigint "interviewer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["interviewer_id"], name: "index_interviewees_on_interviewer_id"
  end

  create_table "interviewers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "assessment_answers", "assessment_questions"
  add_foreign_key "assessment_answers", "interviewees"
  add_foreign_key "assessment_questions", "administrators"
  add_foreign_key "assessments", "administrators"
  add_foreign_key "interviewees", "interviewers"
end
