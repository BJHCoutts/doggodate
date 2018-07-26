class UserSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :first_name,
    :last_name,
    :fullname,
    :created_at,
    :updated_at
  )
end
