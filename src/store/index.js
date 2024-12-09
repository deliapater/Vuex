 import { createStore } from 'vuex';

 export default createStore({
   state: {
     tasks: [],
     nextTaskId: 1,
   },
   mutations: {
     addTask(state, task) {
       state.tasks.push(task);
     },
     deleteTask(state, taskId) {
       state.tasks = state.tasks.filter(task => task.id !== taskId);
     },
     toggleTask(state, taskId) {
       const task = state.tasks.find(task => task.id === taskId);
       if (task) {
         task.completed = !task.completed;
       }
     },
     incrementTaskId(state) {
       state.nextTaskId += 1;
     }
   },
   actions: {
     addTask({ commit, state }, title) {
       const task = {
         id: state.nextTaskId,
         title: title,
         completed: false
       };
       commit('addTask', task);
       commit('incrementTaskId'); 
     },
     deleteTask({ commit }, taskId) {
       commit('deleteTask', taskId);
     },
     toggleTask({ commit }, taskId) {
       commit('toggleTask', taskId);
     }
   },
   getters: {
     allTasks: (state) => state.tasks,
     completedTasks: (state) => state.tasks.filter(task => task.completed),
     pendingTasks: (state) => state.tasks.filter(task => !task.completed)
   }
 });
 