class DoggoSerializer < ActiveModel::Serializer
  attributes(
    :id, 
    :name, 
    :breed, 
    :sound, 
    :meme_phrase, 
    :age, 
    :gender, 
    :coat_length, 
    :size, 
    :category,
    :image
  )

  def title
    title.capitalize
  end
:admin
  #has_many belongs_to

end
