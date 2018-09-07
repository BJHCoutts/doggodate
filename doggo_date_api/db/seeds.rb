PASSWORD = "cat"

User.destroy_all
Doggo.destroy_all

super_user = User.create(
  first_name: "Rufus",
  last_name: "Highgarden",
  email: "hot@hot.com",
  password: PASSWORD,
  address: "142 W Hastings St, Vancouver, BC V6B 1G8",
  admin: true,
  # avatar: "../images/Littlefinger_Main.jpg",
)
  
30.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  
  User.create(
    first_name: first_name,
    last_name: last_name,
    address: "Paris Avenue, Earlwood, New South Wales, Australia",
    email: "#{first_name.downcase}.#{last_name.downcase}@hot.com",
    password: PASSWORD,
  )

end
  
# User.first.avatar.attach(io: File.open("../images/Littlefinger_Main.jpg"), filename: "Littlefinger_Main.jpg", content_type: "image/jpg")
  
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
  "../images/doggos/wicked_witch_wendy.jpg",
]

parks = [
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
  "Sun Yat Sen",
  "Trout Lake",
  "Van Dusen",
];

# https://dog.ceo/api/breeds/image/random

# {
#     "status": "success",
#     "message": "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
# }



50.times.each do
  doggo = Doggo.create(
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

  if doggo.valid?
    rand(0..10).times do
      Match.create(
        doggo_id: doggo.id,
        friend_id: Doggo.all.sample.id,
        friended_at: Faker::Date.between(3.months.ago, Date.today),
      )
    end
  end

end
  
doggos = Doggo.all

matches = Match.all

puts Cowsay.say "Created #{doggos.count} doggos", :stimpy

puts Cowsay.say "created #{Match.all.count} matches", :sheep