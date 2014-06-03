json.array!(@images) do |image|
  json.extract! image, :title, :dimensions, :medium, :mainFilepath, :thumbnailFilepath, :productionDate, :project_id
  json.url image_url(image, format: :json)
end