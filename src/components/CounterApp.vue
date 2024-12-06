<template>
    <div class="counter">
        <h1>Counter: {{ count }}</h1>
        <p>Double Count: {{ doubleCount }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
    computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
},
methods: {
    ...mapActions(['increment', 'decrement']),
},
};
</script>

<style>
.counter {
    text-align: center;
    margin-top: 50px;
}
button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radious: 5px;
    cursor: pointer
}
button:hover {
    background-color: #2a8f6a;
}
</style>