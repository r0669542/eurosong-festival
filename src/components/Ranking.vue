<template>
    <div>
        <button @click="countVotes()" style="display:block"> 
            Update ranking
        </button>
        <div v-for="(score, index) in dict" :key="index" v-bind:class="{podium:Podium(index)}" v-bind:style="changeColor(index)">
            <div>
                {{index+1}}. {{score.key.artist.name}} - {{score.key.title}} - {{score.value}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ranking",
        data() {
            return {
                dict: [],
                podium: true
            }
        },
        props: [
            "songs",
            "votes"
        ],
        methods:{
            countVotes(){
                var dict = [];
                let score = 0;

                for (let i = 1; i <= this.songs.length; i++) {
                    for (let j = 0; j < this.votes.length; j++) {
                        if (this.votes[j].songID == i) {
                            score += this.votes[j].points;
                        }
                    }
                    dict.push({
                        key: this.songs[i-1],
                        value: score
                    });
                    score = 0;
                }
                this.dict = dict;
                this.dict.sort((a, b) => { return b.value - a.value;});
            },
            Podium(index){
                if (index + 1 <= 3) {
                    return true;
                }
                else return false;
            },
            changeColor(index){
                if(index + 1 == 1){
                    return "border: 3px solid gold;";
                }
                else if (index + 1 == 2) {
                    return "border: 3px solid silver;";
                }
            }
        },
        mounted() {
            this.countVotes();
            console.log('mounted');
        }
    }
</script>