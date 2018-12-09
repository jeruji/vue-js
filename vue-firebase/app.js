new Vue({
    el: '#app',
    data: {
        title: 'becoming a Vue ninja',
        name: 'Echo',
        url: 'https://youtube.com',
        classes: ['one', 'two'],
        wage: 10,
        coords: {
            x: 0,
            y: 0
        },
        showName: false,
        items: ['Mushroom', 'Apple', 'Banana', 'Star'],
        ninjas: [
            {name: 'Crystal', age: 25, belt: 'Black'},
            {name: 'Ryu', age: 30, belt: 'Brown'},
            {name: 'Ken', age: 35, belt: 'Orange'}
        ]
    },
    methods: {
        greet(time){
            return `hello and good ${time}, ${this.name}`
        },
        changeWage(amount){
            this.wage += amount
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e){
            this.name = e.target.value
        },
        logMessage(){
            console.log("hello", "world")
        },
        toggleName(){
            this.showName = !this.showName
        }
    }
})