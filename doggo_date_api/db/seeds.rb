PASSWORD = "cat"

User.destroy_all
Doggo.destroy_all

super_user = User.create(
  first_name: "Rufus",
  last_name: "Highgarden",
  email: "hot@hot.com",
  password: PASSWORD,
  address: "Paris Avenue, Earlwood, New South Wales, Australia",
  admin: true
)

20.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    address: "Paris Avenue, Earlwood, New South Wales, Australia",
    email: "#{first_name.downcase}.#{last_name.downcase}@hot.com",
    password: PASSWORD
  )
end

users = User.all

puts Cowsay.say "Created #{users.count} users", :ren

doggos = [
  "../images/doggos/archmage_alfie.jpg",
  "../images/doggos/bumble_bertha.jpg",
  "../images/doggos/drill_bit_darel.jpg",
  "../images/doggos/four_fists_phil.jpg",
  "../images/doggos/inbread_dog.jpg",
  "../images/doggos/knight_nicholas.jpg",
  "../images/doggos/larry_the_lion.jpg",
  "../images/doggos/lumberjack_laurence.jpg",
  "../images/doggos/moneybags_michael.jpg",
  "../images/doggos/nina_the_ninja.jpg",
  "../images/doggos/paws.jpg",
  "../images/doggos/rebel_with_a_cause_callum.jpg",
  "../images/doggos/toxic_tim.jpg",
  "../images/doggos/wicked_witch_wendy.jpg"
]

parks = [
  "Sun Yat Sen",
  "Crab Park",
  "Deer Lake",
  "Dude Chilling",
  "Hinge Park",
  "Jericho",
  "Jonathon Rogers",
  "Kits Beach",
  "Lighthouse Park",
  "Pacific Spirit",
  "Queen Elizabeth",
  "Robson Square",
  "Stanley Park",
  "Trout Lake",
  "Van Dusen"
];

# https://dog.ceo/api/breeds/image/random

# {
#     "status": "success",
#     "message": "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
# }



30.times.each do
  Doggo.create(
  name: Faker::Dog.name,
  breed: Faker::Dog.breed,
  sound: Faker::Dog.sound,
  meme_phrase: Faker::Dog.meme_phrase,
  age: Faker::Dog.age,
  gender: Faker::Dog.gender,
  coat_length: Faker::Dog.coat_length,
  size: Faker::Dog.size,
  category: "any",
  image: doggos.sample,
  user: User.all.sample,
  park: parks.sample,
  )
  
end
  
doggos = Doggo.all

puts Cowsay.say "Created #{doggos.count} doggos", :stimpy