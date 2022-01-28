const app = Vue.createApp({
    data() {
        return {
            inputValue: "",
            goals: [],
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputValue);
            this.inputValue = "";
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        },
    },
});

app.mount("#user-goals");

/**
 * v-if, v-else-if, v-else
 * v-if => remove element in dom
 * v-show => hidden element by css style
 */
