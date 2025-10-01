import Alpine from 'alpinejs'
import sort from '@alpinejs/sort'

Alpine.plugin(sort)

Alpine.store('todo', {
    search: '',
    tasks: { },
    isListFilled: false,
    showList: true,

    // TODO: Implement Function that checks if there are active tasks
    checkIfListIsFilled() {
        // const taskArrayLength = Object.keys(this.tasks).length
    },

    get filteredTasks()
    {
        return Object.values(this.tasks).filter(
            i => i.label.toLowerCase().includes(this.search.toLowerCase())
        )
    },

    addTask(taskId, taskLabel, taskActive) {
        if (taskLabel !== '') {
            const newTask = { id: taskId, label: taskLabel, active: taskActive }

            this.tasks[taskId] = newTask;
            this.search = ''
        }
    },

    deleteTask(task) {
        delete this.tasks[task.id]
    },

    moveFinishedTask(task) {
        const taskArrayLength = Object.keys(this.tasks).length
    }
})

window.Alpine = Alpine

Alpine.start()