# frozen_string_literal: true

FactoryBot.define do
  factory :note do
    content { 'Hey welcome to clord' }
    account
    user
    contact
  end
end
