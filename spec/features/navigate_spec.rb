require 'spec_helper'

describe "navigating" do 
	describe "from the home page" do 
		before :each do
			visit "/"
		end

		it "can go to a list of all tasks", :js => true do
			click_link 'All Tasks'
			page.should have_selector '.tasks-list' 
		end

		it "can go to a list of all lists", :js => true do
			click_link 'All Lists'
			page.should have_content 'All Task Lists'
		end

	end
end