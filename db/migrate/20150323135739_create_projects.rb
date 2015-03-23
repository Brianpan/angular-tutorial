class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :url
      t.string :power
      t.string :integer

      t.timestamps null: false
    end
  end
end
