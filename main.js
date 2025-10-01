import Alpine from 'alpinejs'
import sort from '@alpinejs/sort'

Alpine.plugin(sort)

Alpine.store('todo', {
    search: '',
    tasks: {
        "1": {
            id: crypto.randomUUID(),
            label: "Clean room",
            active: true,
        },
        "2": {
            id: crypto.randomUUID(),
            label: "Read 10 Sites",
            active: true,
        },
        "3": {
            id: crypto.randomUUID(),
            label: "Learn AlpineJS & Tailwind",
            active: true,
        },
    },

    get filteredTasks()
    {
        return Object.values(this.tasks).filter(
            i => i.label.toLowerCase().includes(this.search.toLowerCase())
        )

    },

    deleteTask(task) {
        return true
    }
})

window.Alpine = Alpine

Alpine.start()