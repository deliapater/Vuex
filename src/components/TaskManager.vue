<template>
    <div class="task-manager">
      <h1>Task Manager</h1>
      <form @submit.prevent="addNewTask">
        <input v-model="newTask" placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <span
            :class="{ completed: task.completed }"
            @click="toggleTask(task.id)"
          >
            {{ task.title }}
          </span>
          <button @click="deleteTask(task.id)">Delete</button>
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
  }
  
  input {
    width: 80%;
    padding: 8px;
    margin: 10px 0;
  }
  
  button {
    padding: 8px 12px;
    margin-left: 5px;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  