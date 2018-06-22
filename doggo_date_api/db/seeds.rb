Doggo.destroy_all

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
  
doggos = Doggo.all

puts Cowsay.say "Created #{doggos.count} doggos", :sheep