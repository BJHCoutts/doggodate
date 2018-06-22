Doggo.destroy_all

10.times.each do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com"
    # password: PASSWORD
  )
end



10.times.each do
  Doggo.create(
  name: Faker::Dog.name,
  breed: Faker::Dog.breed,
  sound: Faker::Dog.sound,
  meme_phrase: Faker::Dog.meme_phrase,
  age: Faker::Dog.age,
  gender: Faker::Dog.gender,
  coat_length: Faker::Dog.coat_length,
  size: Faker::Dog.size,
  category: "any"
  )
  
end

users = User.all
  
doggos = Doggo.all

puts Cowsay.say "Created #{doggos.count} doggos", :ren

puts Cowsay.say "Created #{doggos.count} doggos", :stimpy