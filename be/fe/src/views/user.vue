<template>
    <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">Cafe Badilico</span>
          <div class="d-flex">
            <v-rating
              :value="value"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ value }}</span>
              <span>({{ reviews }})</span>
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
    export default {
        data () {
            return {
                lists: [
                    {
                        title: "강릉가는길",
                        content: "우리는 지금 강릉간다"
                    },
                    {
                        title: "가온이가 주도했다.",
                        content: "대단한 임산부다..!"
                    },
                    {
                        title: "축복이도 함께간다.",
                        content: "3명의 두번째 여행이다."
                    },
                ]
            }
        },
        methods: {
            plus() {
                this.bottomNav = this.bottomNav + 1
            },
            minus() {
                this.bottomNav = this.bottomNav - 1
            },
            btnClicked() {
                this.cycleTest = !this.cycleTest
            }
        }
  }
</script>
