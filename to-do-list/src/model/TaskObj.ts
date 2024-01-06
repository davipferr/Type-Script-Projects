export interface ObjData {
  id: number
  taskName: string
  checked: boolean
}

export default class TaskObj implements ObjData{

  constructor(
    private _id: number,
    private _taskName: string,
    private _checked: boolean  = false,
  ) {}

  get id(): number {
    return this._id
  }

  set id(id: number) {
    this._id = id
  }

  get taskName(): string {
    return this._taskName
  }

  set taskName(taskName: string) {
    this._taskName = taskName
  }

  get checked(): boolean {
    return this._checked
  }

  set checked(checked: boolean) {
    this._checked = checked
  }
}