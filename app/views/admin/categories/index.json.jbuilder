json.array!(@categories) do |category|
  json.extract! category, :name, :description, :portfolio
  json.url category_url(category, format: :json)
end