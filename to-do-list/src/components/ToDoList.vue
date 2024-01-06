<script setup lang="ts">
import TaskObj from '../model/TaskObj.ts'
import TaskList from '../model/TaskList.ts'
import { ref } from 'vue';
import { watch} from 'vue';

const instance = TaskList.instance

const tasks = ref<TaskObj[]>([])

const getTaskList = () =>  {
  instance.load()

  tasks.value = TaskList.instance.list
}

getTaskList()

console.log(tasks.value)

const newTaskName = ref('');
const errorMessage = ref('');

const checkNewValue = (newValue: boolean) => {
  if(typeof newValue === "undefined") {
    return false
  }
  return true
}

watch(
  () => tasks.value.map(task => task.checked),
  (newValue, oldValue, ) => {
    for (let i = 0; i < tasks.value.length; i++) {
      if (newValue[i] !== oldValue[i] && checkNewValue(newValue[i])) {
        console.log(`old: ${oldValue[i]}, new: ${newValue[i]}`)

        const taskObj = tasks.value[i]

        let newTaskObj = new TaskObj(taskObj.id, taskObj.taskName, taskObj.checked)

        instance.updateTask(newTaskObj, i)
      }
    }
  },
  { deep: true }
)


const setErrorMessage = (message?: string ) => {
  if (!message) {
    errorMessage.value = ""
  } else {
    errorMessage.value = message
  }
}

const checkNewTaskName = (taskName: string) => {
  if (!taskName) {
    setErrorMessage('Insira um nome válido')
    return false
  }
  return true
}

const addTask = (taskName: string) => {
  setErrorMessage()

  const checkName = checkNewTaskName(taskName)

  if (!checkName) {
    return
  }

  let maxId = tasks.value[0] 
  ? tasks.value[tasks.value.length - 1].id + 1 
  : 1

  let taskObj = new TaskObj(
    maxId, 
    taskName,
  )

  instance.addItem(taskObj)

  getTaskList()

  newTaskName.value = ""
}

const hasTask = (taskArray: {
  id: number,
  taskName: string,
  checked: boolean,
}[]) => {
  if (!taskArray[0]) {
    setErrorMessage('Não existe nenhuma task')
    return false
  }

  return true
}

const clearAllTasks = () => {
  setErrorMessage()

  const has = hasTask(tasks.value)

  if (!has) {
    return
  }

  instance.clearList()

  tasks.value = []
}

const deleteTask = (indexOfTask: number) => {
  instance.removeItem(indexOfTask)

  getTaskList()
}
</script>

<template>
  <div class="d-flex justify-center align-center fill-height">
    <div class="container my-5">
      <div class="d-flex align-center justify-space-between">
        <div class="mr-10 v-text-size">
          <v-text-field
            v-model="newTaskName"
            label="Nome da Tarefa"
            variant="outlined"
            density="comfortable"
            clearable
            hide-details
          >
          </v-text-field>
        </div>
        <div class="h-100">
          <v-btn
            variant="tonal"
            color="primary"
            @click="addTask(newTaskName)"
          >
            <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex justify-space-between mt-8 mb-3">
        <div class="text-h4">
          <span>
            List
          </span>
        </div>
        <div class="d-flex align-center">
          <div
            v-if="errorMessage"
            class="mr-4 font-weight-bold"
          >
            <span
              style="color: #D50000;"
            >
              {{ errorMessage }}
            </span> 
          </div>
          <div>
            <v-btn
              variant="tonal"
              color="primary"
              @click="clearAllTasks()"
            >
            Clear
          </v-btn>
          </div>
        </div>
      </div>
      <div class="mb-6">
        <hr>
      </div>
      <div class="text-h5">
        <div
          v-if="tasks.length === 0"
          class="d-flex justify-center"
        >
          Sem tarefas! Comece a se organizar 🎯🔥
        </div>
        <div
          v-for="task in tasks"
          :key="task.id"
          class="d-flex align-center justify-space-between"
        >
          <div class="d-flex align-center">
            <div class="mr-3">
            <v-checkbox
              v-model="task.checked"
              hide-details
            >
            </v-checkbox>
          </div>
          <div>
            <span
              :class="{ 'text-decoration-line-through': task.checked} "
            >
             {{ task.taskName}}
            </span>
          </div>
          </div>
          <div>
            <v-btn
              variant="tonal"
              color="red"
              @click="deleteTask(tasks.indexOf(task))"
            >
              <font-awesome-icon
                :icon="['fas', 'trash']"
                style="color: #D50000;"
              >
              </font-awesome-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 600px;
}

.v-text-size {
  width: 500px;
}

.fill-height {
  height: 100vh !important;
}
</style>