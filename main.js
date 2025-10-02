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
    editShowDate: false,
    editDate: '',

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

    addTask(taskId, search, taskShowDate, taskDueDate, taskActive) {
        if (search.includes('//')) {
            taskShowDate = true
            search = search.replace('//', '')
        }

        const taskInformation = search.split('::')

        if (taskInformation[0] === '') {
            alert('Your task name is empty')
            return
        }

        const newTask = { id: taskId, label: taskInformation[0], description: taskInformation[1], showDate: taskShowDate, dueDate: taskDueDate, active: taskActive }

        this.tasks[taskId] = newTask;
        this.search = ''
    },

    deleteTask(task) {
        delete this.tasks[task.id]
    },

    shareTaskData(taskId, taskLabel, taskDescription, taskShowDate, taskDate) {
        this.editId = taskId
        this.editLabel = taskLabel
        this.editDescription = taskDescription
        this.editShowDate = taskShowDate
        this.editDate = taskDate
    },

    updateTaskData(taskId, taskLabel, taskDescription, taskShowDate, taskDate) {
        if (taskLabel === '') {
            alert('Your task name is empty')
            return
        }
        this.tasks[taskId].label = taskLabel
        this.tasks[taskId].description = taskDescription
        this.tasks[taskId].showDate = taskShowDate
        this.tasks[taskId].dueDate = taskDate
    },

    moveFinishedTask(task) {
        const taskArrayLength = Object.keys(this.tasks).length
    }
})

window.Alpine = Alpine

Alpine.start()