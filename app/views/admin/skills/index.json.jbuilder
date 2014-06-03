json.array!(@skills) do |skill|
  json.extract! skill, :name, :proficiency, :category_id, :portfolio
  json.url skill_url(skill, format: :json)
end