<template>
    <div>
        ButtonCounter: {{ count }}

        <button @click="addOne">
            Add 1
        </button>

        <button @click="removeOne">
            Remove 1
        </button>
    </div>
</template>
<script>
    export default {
        name: "Counter",
        data() {
            return {
                count: 10
            }
        },
        methods: {
            addOne(){
                this.count++;
            },
            removeOne(){
                this.count--;
            }
        }
    }
</script>