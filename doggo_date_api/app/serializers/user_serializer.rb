class UserSerializer < ActiveModel::Serializer
  
  attributes(
    :id,
    :first_name,
    :last_name,
    :full_name,
    :doggos,
    :email,
    :address,
    :longitude,
    :latitude,
    :created_at,
    :updated_at
  )

end
