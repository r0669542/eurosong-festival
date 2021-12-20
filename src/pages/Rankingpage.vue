<template>
    <div>
        <button @click="goToPage('home')">
            Go To Home
        </button>
        <h1>Ranking</h1>
    </div>
</template>

<script>
    export default {
        name: "Rankingpage",
        methods: {
            goToPage(page) {
                this.$emit("change-page",page);
            }
        }
    }
</script>