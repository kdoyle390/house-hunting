class User < ApplicationRecord
    has_many :user_favorites
    has_many :houses, through: :user_favorites
end
