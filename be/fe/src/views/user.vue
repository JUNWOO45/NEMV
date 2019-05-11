<template>
    <div>
        <v-btn @click="test">btn</v-btn>
        <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
        ></v-progress-circular>
        <div class="text-xs-center">
            <v-rating v-model="rating"></v-rating>
        </div>
    </div>
    
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
                ],
                rating: 3
            }
        },
        methods: {
            test() {
                this.rating += 1
            },
            btnClicked() {
                this.cycleTest = !this.cycleTest
            }
        }
  }
</script>
