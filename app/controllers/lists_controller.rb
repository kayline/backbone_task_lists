class ListsController < ApplicationController

	def home
	end

	def index
		@lists = List.all

		respond_to do |format|
			format.html
			format.json {render json: @lists}
		end
	end
end