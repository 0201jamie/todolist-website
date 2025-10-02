import Alpine from 'alpinejs'
import sort from '@alpinejs/sort'

Alpine.plugin(sort)

Alpine.store('todo', {
    search: '',
    tasks: { },
    isListFilled: false,
    showList: true,
    editId: '',
    editLabel: '',
    editDescription: '',

    // TODO: Implement Function that checks if there are active tasks
    checkIfListIsFilled() {
        // const taskArrayLength = Object.keys(this.tasks).length
    },

    taskLengthString(){
        if(Object.keys(this.tasks).length === 1){
            return "Need to do (" + Object.keys(this.tasks).length + " task):"
        }
        return "Need to do (" + Object.keys(this.tasks).length + " tasks):"

    },

    get filteredTasks()
    {
        return Object.values(this.tasks).filter(
            i => i.label.toLowerCase().includes(this.search.toLowerCase())
        )
    },

    addTask(taskId, search, taskActive) {
        if (search === '') {
            alert('Your task name is empty')
            return
        }
        const taskArray = search.split('::')
        const newTask = { id: taskId, label: taskArray[0], description: taskArray[1], active: taskActive }

        this.tasks[taskId] = newTask;
        this.search = ''
    },

    deleteTask(task) {
        delete this.tasks[task.id]
    },

    shareTaskData(taskId, taskLabel, taskDescription) {
        this.editId = taskId
        this.editLabel = taskLabel
        this.editDescription = taskDescription
    },

    updateTaskData(taskId, taskLabel, taskDescription) {
        if (taskLabel === '') {
            alert('Your task name is empty')
            return
        }
        this.tasks[taskId].label = taskLabel
        this.tasks[taskId].description = taskDescription
    },

    moveFinishedTask(task) {
        const taskArrayLength = Object.keys(this.tasks).length
    }
})

window.Alpine = Alpine

Alpine.start()