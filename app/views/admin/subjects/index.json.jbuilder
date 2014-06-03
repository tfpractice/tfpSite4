json.array!(@subjects) do |subject|
  json.extract! subject, :name, :description, :portfolio
  json.url subject_url(subject, format: :json)
end