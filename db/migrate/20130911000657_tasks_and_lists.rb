class TasksAndLists < ActiveRecord::Migration
  def change
  	create_table :tasks do |t|
  		t.string :description
  		t.boolean :complete, default: false
  		t.references :list
  		t.timestamps
  	end

  	create_table :lists do |t|
  		t.string :title
  		t.string :description
  		t.timestamps
  	end
  end
end
