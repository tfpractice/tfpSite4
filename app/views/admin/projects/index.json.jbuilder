json.array!(@projects) do |project|
  json.extract! project, :name, :description, :portfolio, :year, :subject_id
  json.url project_url(project, format: :json)
end