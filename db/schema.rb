# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161108202120) do

  create_table "argument_view_versions", force: :cascade do |t|
    t.integer  "argument_view_id"
    t.integer  "previous_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.text     "conclusion"
  end

  add_index "argument_view_versions", ["argument_view_id"], name: "index_argument_view_versions_on_argument_view_id"
  add_index "argument_view_versions", ["previous_id"], name: "index_argument_view_versions_on_previous_id"

  create_table "argument_view_versions_statements", force: :cascade do |t|
    t.integer "argument_view_version_id"
    t.integer "statement_id"
  end

  add_index "argument_view_versions_statements", ["argument_view_version_id", "statement_id"], name: "index_version_statements_unique_version_statement", unique: true
  add_index "argument_view_versions_statements", ["argument_view_version_id"], name: "index_version_statements_version"
  add_index "argument_view_versions_statements", ["statement_id"], name: "index_argument_view_versions_statements_on_statement_id"

  create_table "argument_views", force: :cascade do |t|
    t.integer  "argument_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "argument_views", ["argument_id", "user_id"], name: "index_argument_views_on_argument_id_and_user_id", unique: true
  add_index "argument_views", ["argument_id"], name: "index_argument_views_on_argument_id"
  add_index "argument_views", ["user_id"], name: "index_argument_views_on_user_id"

  create_table "arguments", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "statement_votes", force: :cascade do |t|
    t.integer  "statement_id"
    t.integer  "user_id"
    t.boolean  "agree"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "statement_votes", ["statement_id", "user_id"], name: "index_statement_votes_on_statement_id_and_user_id", unique: true
  add_index "statement_votes", ["statement_id"], name: "index_statement_votes_on_statement_id"
  add_index "statement_votes", ["user_id"], name: "index_statement_votes_on_user_id"

  create_table "statements", force: :cascade do |t|
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "statements", ["content"], name: "index_statements_on_content", unique: true

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
