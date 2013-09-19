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

	def show
		@list = List.find(params[:id])

		respond_to do |format|
			format.html
			format.json {render :json =>  @list.to_json(:include => [:tasks])}
		end
	end

end