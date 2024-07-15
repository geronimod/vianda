require 'sinatra'
require 'sinatra/sequel'

migration "create base schema" do
  database.create_table :users do
    primary_key :id
    text        :fullname,   null: false
    text        :email,      null: false
    timestamp   :created_at, null: false
    timestamp   :updated_at, null: false
  end

  database.create_table :chefs do
    primary_key :id
    foreign_key :user_id, :users
    text        :name, null: false
    text        :facebook
    text        :email
    timestamp   :created_at, null: false
    timestamp   :updated_at, null: false
  end

  database.create_table :lunch_suggestions do
    primary_key :id
    foreign_key :chef_id, :chefs
    boolean     :bread_included, default: false
    boolean     :free_shipping,  default: false
    integer     :orders_before,  default: 11
    timestamp   :created_at,     null: false
    timestamp   :updated_at,     null: false
  end

  database.create_table :menus do
    primary_key :id
    foreign_key :lunch_suggestion_id, :lunch_suggestions
    text        :menu,       null: false
    float       :price,      null: false
    timestamp   :created_at, null: false
    timestamp   :updated_at, null: false
  end
end
