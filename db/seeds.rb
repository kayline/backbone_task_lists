first_list = List.new
first_list.title = "A Task List"
first_list.description = "An example list for playing around"
first_list.save

task1 = Task.new
task1.description = "A thing to do"
task2 = Task.new
task2.description = "Another thing that needs doing"
tasks = [task1,task2]
tasks.each do |t|
	t.save
	first_list.tasks << t
end
first_list.save
