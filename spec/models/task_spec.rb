require 'spec_helper'

describe Task do
	it { should belong_to(:list) }

	describe "a new task" do
		task = Task.create
		it "has a complete status of false by default" do
			expect(task.complete).to eq false
		end
	end
end
