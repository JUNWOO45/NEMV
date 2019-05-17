<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 v-for="user in users">
                {{ user.name }}의 나이는 {{ user.age }}
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/api/user')
            .then((r) => {
                console.log("r : ", r);
                this.users = r.data.users;
            })
            .catch((e) => {
                console.log("error.message : ", e.message);
            });
        }
    }
</script>
