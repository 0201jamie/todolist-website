import Alpine from 'alpinejs'
import sort from '@alpinejs/sort'

Alpine.plugin(sort)

console.log('test')

Alpine.data('todo', () => ({
    tasks: ['Clean room', 'Read 10 Sites', 'Learn AlpineJS & Tailwind'],
    search: '',

    get filteredTasks()
    {
        return this.tasks.filter(
            i => i.toLowerCase().includes(this.search.toLowerCase())
        )
    },

    addTask()
    {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === this.search) {
                return true
            }
        }
        this.tasks.push(this.search)
    },

    deleteTask(task)
    {
        const deletedTask = task
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === deletedTask) {
                this.tasks.splice(i, 1)
            }
        }
    },

    finishTask(task) {
        console.log('finished task')
        const finishedTask = task

        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === finishedTask) {

            }
        }
    }
}))

window.Alpine = Alpine

Alpine.start()

console.log('Alpine')