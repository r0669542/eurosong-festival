<template>
    <div>
        <button @click="changeIndex(-1)">
            Prev song
        </button>
        
        <div v-for="(song, index) in items" :key="song.id">
            <div v-if="index == activeIndex">
                {{song.artist.name}} - {{song.title}}
                <iframe :src="song.spotify"></iframe>
            </div>
        </div>
        
        <button @click="changeIndex(1)">
            Next song
        </button>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: [
            "items",
            "activeIndex"
        ],
        methods:{
            changeIndex(value){
                let index = this.activeIndex;

                index += value;

                if (index < 0){
                    index = this.items.length - 1;
                } else if (index == this.items.length){
                    index = 0;
                }
                this.$emit("change-index",index);
                console.log(index);
            }
        }
    }
</script>
