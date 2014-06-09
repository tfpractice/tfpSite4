json.array!(@skills) do |skill|
  json.extract! skill, :name, :proficiency, :category_id, :portfolio, :worktype, :skillable_id, :skillable_type, :skillable
  json.url skill_url(skill, format: :json)
end