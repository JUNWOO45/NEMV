<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 v-for="u in users">
                <v-card>
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{u.name}}</h3>
                        <div> {{ card_text }} </div>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn flat color="orange">{{u.age}}</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
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
