# Rakefile
APP_FILE  = 'vianda.rb'
APP_CLASS = 'Sinatra::Application'

require 'sinatra/assetpack/rake'

task :cleanup do
  Dir["public\/**\/*"].each do |file|
    `git rm #{file}` if file[/\.[\w]{10,}\./] || file[/application\.(css|js)$/]
  end

end

task :build => [:cleanup, "assetpack:build"] 