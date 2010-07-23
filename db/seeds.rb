# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

Post.create(:title => 'Hello Choco!', :content => 'A delicious Javascript web framework made in Belgium!', :author => 'IntoTheWeb')
Post.create(:title => 'A simple post', :content => 'Hello World!', :author => 'Antho')
Post.create(:title => 'Please, contribute!', :content => 'What do you think about Choco?', :author => 'Antho')

User.create(:pseudo => 'Antho', :email => 'ahe@intotheweb.be')
User.create(:pseudo => 'IntoTheWeb', :email => 'info@intotheweb.be')