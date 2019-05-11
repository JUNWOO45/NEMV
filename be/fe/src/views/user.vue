<template>
    <v-card height="200px" flat>
        <div class="headline text-xs-center pa-5">
        Active: {{ bottomNav }}
            <v-btn @click="plus" dark>+</v-btn>
            <v-btn @click="minus" dark>-</v-btn>
        </div>
        <v-bottom-nav
        :value="true"
        absolute
        color="transparent"
        >
            <v-btn
                color="teal"
                flat
                value="recent"
            >
                <span>junwoo</span>
                <v-icon>history</v-icon>
            </v-btn>

            <v-btn
                color="teal"
                flat
                value="favorites"
            >
                <span>gaon</span>
                <v-icon>favorite</v-icon>
            </v-btn>

            <v-btn
                color="teal"
                flat
                value="nearby"
            >
                <span>bless</span>
                <v-icon>place</v-icon>
            </v-btn>
        </v-bottom-nav>
    </v-card>
</template>

<script>
    export default {
        data () {
            return {
                bottomNav: 0
            }
        },
        methods: {
            plus() {
                this.bottomNav = this.bottomNav + 1
            },
            minus() {
                this.bottomNav = this.bottomNav - 1
            }
        }
  }
</script>
