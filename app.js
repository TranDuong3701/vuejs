const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            fullname: "",
        };
    },
    watch: {
        // name(){} whenever name property changed, name function will be execute
        name(value) {
            // value = this.name
            this.fullname = value + "Tran";
        },
        // name(preValue,curValue) {}
        counter(value) {
            if (value > 50) this.counter = 0;
        },
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = "";
        },
        outputFullName() {
            if (this.name === "") return "";
            return this.name + "Tran";
        },
    },
    computed: {
        // fullname() {
        //     if (this.name === "") return "";
        //     return this.name + "Tran";
        // },
    },
});

app.mount("#events");

/**
 * v-bind:value => :value
 * v-on:click => @click
 * v-bind:value => value in html
 * v-model => shortcut for v-bind:value + v-on:input
 * v-model - two ways binding
 * computed property => use like a variable not a function
 * methods => only use if you want to recalculate a value whenever anything on the page changed
 * computed property => You only want to recalculate a value if a dependency changed, use for output something
 */
