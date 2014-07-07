json.array!(@characters) do |character|
  json.extract! character, :id, :char_name, :char_family, :char_description, :char_image, :char_acted
  json.url character_url(character, format: :json)
end
