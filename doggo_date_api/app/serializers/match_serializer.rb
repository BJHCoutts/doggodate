class MatchSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :doggo_id,
    :friend_id,
    :state,
    :friended_at,
  )
end
