# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

4.times do |skill|
  Skill.create!(
  title: "Rails #{skill}",
  percent_utilized: 25
  )
end

puts "4 skills created"

8.times do |portfolio_item|
  Portfolio.create!(
    title: "Portfolio title: #{portfolio_item}",
    subtitle: "My portfolio subtitle",
    body: "Ea mixtape tbh synth man braid, chambray intelligentsia tattooed lyft gastropub.Tumblr helvetica paleo 
      neutra mumblecore. Organic live-edge snackwave lumbersexual viral polaroid, excepteur vinyl photo booth aute
      pork belly literally fugiat 3 wolf moon. Woke tumeric brooklyn +1 nostrud, deserunt hexagon offal roof party
      chartreuse scenester pork belly. Esse next level id chambray crucifix elit kombucha dolore cupidatat 8-bit 
      pariatur before they sold out selvage leggings.",
      main_image:"http://placehold.it/600x400",
      thumb_image: "http://placehold.it/350x200"
  )
end

puts "8 portfolio items created"