// TODO: Creating Vue app
const app = Vue.createApp({
    // data: function(){}
    data() {
        // TODO: Data configuration
        return {
            courseGoalA: "Finish course and learn Vue!",
            courseGoalB: "Master Vue!",
            // courseGoalB: "<p/>Master Vue!</p>",
            vueLink: "https://vue.org",
        };
    },
    methods: {
        // TODO: Make the output more dynamic
        renderCourseGoal() {
            if (Math.random() < 0.5) return this.courseGoalA;
            return this.courseGoalB;
        },
    },
}).mount("#user-goal"); // TODO: Connecting Vue app to html, control user-goal section

/** Terms & Notes
 * Interpolation syntax - {{ }}
 * Data binding - data property in html
 * Template -  <p>{{ courseGoal }}</p> = html + vue
 * Vue binding directive syntax - v-bind
 * Vue Directive - instructions to give vue to do something
 * Attribute binding - v-bind:href="{{ vueLink }}"
 * this keyword => Vue instance
 * Output content { Interpolation, v-bind }
 * v-bind: set value attribute
 * v-html: set output content between must be html
 */
