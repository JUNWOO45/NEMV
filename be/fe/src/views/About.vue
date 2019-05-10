<template>
  <div>
    <v-btn @click="test">test</v-btn>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 sm4 v-for="user in cards" :key="user.name">
          <v-card>
            <v-img
              :src="user.src"
              height="200px"
            >
              <v-container
                fill-height
                fluid
                pa-2
              >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text" v-text="user.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <!-- <v-card-title>이름: {{user.name}}</v-card-title> -->
            <v-card-text>나이: {{user.age}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'help',
  data () {
    return {
      cards: []
    }
  },
  methods: {
    test () {
      const user = {
        name: `memi ${Math.random()}`,
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
      }
      user.age = 11
      this.cards.push(user)
    }
  }
}
</script>