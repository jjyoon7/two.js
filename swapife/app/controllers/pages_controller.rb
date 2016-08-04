class PagesController < ApplicationController
  require "swapi"

  def home
    @data_from_api = Swapi.get_person(people_id)
  end

end
