<template>
    <div>
        <button @click="goToPage('home')">
            Go To Home
        </button>
        <h1>Game</h1>

        <carousel 
            :items="songs"
            :activeIndex="activeSongId"
            @change-index="changeActiveSongIndex"
        />

        <div v-for="(vote, index) in votes" :key="index" >
            <button @click="addVote(vote.points)" v-if="!vote.isVoted">
                Add {{vote.points}} points
            </button>
        </div>
    </div>
</template>

<script>
    import Carousel from "../components/Carousel.vue";

    export default {
        name: "Gamepage",
        components: {
            Carousel
        },
        data() {
            return {
                songs: [],
                activeSongId: 0,
                votes: [
                    {
                        points: 1,
                        isVoted: false
                    },
                    {
                        points: 2,
                        isVoted: false
                    },
                    {
                        points: 4,
                        isVoted: false
                    },
                    {
                        points: 8,
                        isVoted: false
                    }
                ]
            }
        },
        mounted() {
            this.fetchSongs();
        },
        methods: {
            goToPage(page) {
                this.$emit("change-page",page);
            },
            fetchSongs(){
                const url = "http://webservies.be/eurosong/Songs";
                fetch(url)
                    .then((respons) => {
                        return respons.json();
                    })
                    .then((songs) => {
                        console.log(songs);
                        this.fetchArtists(songs);
                });
            },
            fetchArtists(songs){
                const url = "http://webservies.be/eurosong/Artists";
                fetch(url)
                    .then((respons) => {
                        return respons.json();
                    })
                    .then((artists) => {
                        songs.map((song) => {
                            const artist = artists.find((artist) => artist.id == song.artist);
                            song.artist = artist;

                            return song;
                        });

                        this.songs = songs;
                });
            },
            changeActiveSongIndex(index){
                this.activeSongId = index;
            },
            postVote(points){
                const songId = this.songs[this.activeSongId].id;
                const url = "http://webservies.be/eurosong/Votes";

                fetch(url, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json, text/plain',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        songID: songId,
                        points: points,
                    })
                }).then((respons) => {
                    return respons.json()
                }).then((result) => {
                    console.log(result);
                })
            },
            addVote(points){
                let votes = this.votes;

                votes.map((vote) => {
                    if (vote.points == points){
                        vote.isVoted = true;
                    }
                    return vote;
                });
                this.postVote(points);

                let activeVotes = votes.filter((vote) => vote.isVoted == true);
                if(activeVotes.length == votes.length){
                    this.goToPage('ranking');
                }
            }
        }
    }
</script>