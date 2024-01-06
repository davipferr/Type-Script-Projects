import TaskObj from './TaskObj.ts'

interface List {
  list: TaskObj[]
  load(): void
  save(): void
  clearList(): void
  addItem(taskObj: TaskObj): void
  removeItem(index: number): void
}

export default class TaskList implements List {
  static instance: TaskList = new TaskList()

  constructor(
    private _list: TaskObj[] = []
  ) {}

  get list(): TaskObj[] {
    return this._list
  }

  load() {
    this._list = []

    const tasks = localStorage.getItem('tasks')
    const taskArrayinStorage: {
      _id: number,
      _taskName: string,
      _checked: boolean,
    }[] = tasks && tasks !== "undefined" 
      ? JSON.parse(tasks) 
      : []

    if(!taskArrayinStorage?.[0]) {
      return
    }

    taskArrayinStorage.forEach((obj) => {
      const newX = new TaskObj(obj._id, obj._taskName, obj._checked)

      this._list.push(newX)
    })
  }

  save(): void {
    localStorage.setItem('tasks', JSON.stringify(this._list))
  }

  clearList(): void {
    this._list = []
    this.save()
  }

  addItem(taskObj: TaskObj): void {
    this._list.push(taskObj)
    this.save()
  }

  removeItem(index: number): void {
    this._list.splice(index, 1)
    this.save()
  }

  updateTask(taskObj: TaskObj, index: number, ): void {
    this._list[index] = taskObj
    this.save()
  }

}