<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 v-for="u in users">
                <v-chip close>{{u.name}}</v-chip>
                <v-chip close>{{u.age}}</v-chip>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/user')
    .then((r) => {
        this.users = r.data.users;
    })
    .catch((e) => {
     console.error(e.message)
    })
  }
}
</script>
