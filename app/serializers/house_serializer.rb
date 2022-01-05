class HouseSerializer < ActiveModel::Serializer
  attributes :id, :house_name, :address, :rent, :allows_pets, :city, :state, :square_feet, :num_beds, :num_baths
end
