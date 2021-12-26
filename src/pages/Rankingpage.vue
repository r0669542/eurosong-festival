<template>
    <div>
        <button @click="goToPage('home')">
            Go To Home
        </button>
        <h1>Ranking</h1>

        <ranking
            :songs="songs"
            :votes="votes"
        />
    </div>
</template>

<script>
    import Ranking from "../components/Ranking.vue";

    export default {
        name: "Rankingpage",
        components: {
            Ranking
        },
        data() {
            return {
                songs: [],
                votes: []
            }
        },
        mounted() {
            this.fetchSongs()
            this.fetchVotes()
        },
        methods: {
            goToPage(page) {
                this.$emit("change-page",page);
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
            fetchVotes(){
                const url = "http://webservies.be/eurosong/Votes";
                fetch(url)
                    .then((respons) => {
                        return respons.json();
                    })
                    .then((votes) => {
                        console.log(votes);
                        this.votes = votes;
                });
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
            }
        }
    }
</script>