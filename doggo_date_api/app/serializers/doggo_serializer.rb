class DoggoSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :sound, :meme_phrase, :age, :gender, :coat_length, :size, :category

  def title
    title.capitalize
  end

  #has_many belongs_to

end
