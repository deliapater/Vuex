<template>
  <div class="task-manager">
    <h1>Task Manager</h1>
    <form @submit.prevent="addNewTask">
      <input v-model="newTask" placeholder="Enter a new task" class="task-input"/>
      <button type="submit" class="add-task-button">Add Task</button>
    </form>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="toggleTask(task.id)"
          class="task-checkbox"
        />
        <span
          :class="{ completed: task.completed }"
          @click="toggleTask(task.id)"
          class="task-title"
        >
          {{ task.title }}
        </span>
        <button @click="deleteTask(task.id)" class="delete-task-button">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    ...mapGetters(["allTasks"]),
    tasks() {
      return this.allTasks;
    },
  },
  methods: {
    ...mapActions(["addTask", "deleteTask", "toggleTask"]),
    addNewTask() {
      if (this.newTask.trim() === "") return;

      // Call the addTask action, passing in the title
      this.addTask(this.newTask.trim());

      // Clear the input field after adding the task
      this.newTask = "";
    },
  },
};
</script>

<style scoped>
.task-manager {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  text-align: center;
  color: #333;
}

.task-input {
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.add-task-button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.add-task-button:hover {
  background-color: #45a049;
}

.task-list {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0 0, 0.1);
  transition: background-color 0.3s;
}

.task-item:hover {
  background-color: #f1f1f1;
}

.task-checkbox {
    margin-right: 15px;
    transform: scale(1.2)
}

.task-title {
    flex-grow: 1;
    font-size: 18px;
    color: #333;
}

.task-title.completed {
    text-decoration: line-through;
    color: #888;
}

.delete-task-button {
  padding: 8px 12px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.delete-task-button:hover {
  background-color: #e64a19;
}
</style>
