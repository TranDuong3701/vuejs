const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: "",
            actualName: "",
        };
    },
    methods: {
        add() {
            this.counter++;
        },
        reduce() {
            this.counter--;
        },
        setName(e, lastName = "Tran") {
            this.name = e.target.value + " " + lastName;
        },
        submitForm(e) {
            // e.preventDefault();
            alert("OK!");
        },
        setActualName() {
            this.actualName = this.name;
        },
    },
});

app.mount("#events");

/** Terms & Notes
 * v-on:click => v-on directive => set event
 * v-on:input => change input text like onChange
 * v-on:submit
 * event modifier => v-on:submit.prevent, v-on:keyup.enter,
 * v-once => lock the content
 */
