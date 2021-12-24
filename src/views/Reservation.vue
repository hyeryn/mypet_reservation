<template>
<div id="app">
  <v-app id="inspire">
    <v-stepper v-model="e6" vertical class="m-5 p-5" >
      <v-stepper-step :complete="e6 > 1" step="1">
        카테고리 선택
        <small>예약을 원하는 카테고리를 선택하세요</small>
      </v-stepper-step>
  
      <v-stepper-content step="1">
        <v-card class="mb-5" height="150px" color="grey lighten-3">
            <ul>
              <p><a v-on:click="hospital">병원</a></p>
              <p><a v-on:click="salon">미용실</a></p>
              <p><a v-on:click="hotel">호텔/유치원</a></p>
              <p><a v-on:click="cafe">카페</a></p>
            </ul>
        </v-card>
        <v-btn class="primary" @click="e6 = 2">Continue</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 2" step="2">
        장소 선택
        <small>예약을 원하는 장소를 선택하세요</small>
      </v-stepper-step>
  
      <v-stepper-content step="2">
        <v-card color="grey lighten-3" class="mb-5" height="700px">
          <v-card-title>
            Search
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
          
          <v-card
            class="mx-auto elevation-20"
            color="pink"
            dark
            style="max-width: 400px;"
          >
            <v-layout justify-space-between>
              <v-flex xs8>
                <v-card-title primary-title>
                  <div>
                    <h1>{{name}}</h1>
                    <v-spacer></v-spacer>
                    <div>{{review}}</div>
                    <div>방문자 리뷰 : {{count}}</div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-img
                class="shrink ma-2"
                contain
                height="125px"
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                style="flex-basis: 125px"
              ></v-img>
            </v-layout>
            <v-divider dark></v-divider>
            <v-card-actions class="pa-3">
              평점
              <v-spacer></v-spacer>
              <span class="grey--text text--lighten-2 caption mr-2">
                ({{ star }})
              </span>
              <v-rating
                v-model="star"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
              ></v-rating>
            </v-card-actions>
          </v-card>
        </v-card>
        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        <v-btn @click="e6 = 1">Back</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 3" step="3">
        예약 진행
        <small>날짜와 시간 정보를 입력하세요</small>
      </v-stepper-step>
  
      <v-stepper-content step="3">
        <v-card color="grey lighten-3" class="mb-5" height="200px">
            <v-row>
              <v-col cols="12" sm="6" md="2" >
                <h5 style="font-weight: bold">{{name}}</h5>
              </v-col>
              <v-col cols="12" sm="6" md="3" >
                <v-container fluid id="datedetail" >
                    <DateTimePicker :label="'날짜'" ></DateTimePicker>
                </v-container>
              </v-col>
              <v-col cols="12" sm="6" md="3" >
                <h5 style="font-size:15px">오전</h5>
                  <v-btn-toggle
                      v-model="time"
                  >
                    <v-btn value="10">10:00</v-btn>
                    <v-btn value="10.5">10:30</v-btn>
                    <v-btn value="11">11:00</v-btn>
                    <v-btn value="11.5">11:30</v-btn>
                  </v-btn-toggle>
              </v-col>
              <v-col cols="12" sm="6" md="4" >
                <h5 style="font-size:15px">오후</h5>
                  <v-btn-toggle
                      v-model="time"
                  >
                    <v-btn value="12">12:00</v-btn>
                    <v-btn value="12.5">12:30</v-btn>
                    <v-btn value="13">13:00</v-btn>
                    <v-btn value="13.5">13:30</v-btn>
                  </v-btn-toggle>
                  <v-tab></v-tab>
                  <v-btn-toggle
                      v-model="time"
                  >
                    <v-btn value="14">14:00</v-btn>
                    <v-btn value="14.5">14:30</v-btn>
                    <v-btn value="15">15:00</v-btn>
                    <v-btn value="15.5">15:30</v-btn>
                  </v-btn-toggle>
                  <v-tab></v-tab>
                  <v-btn-toggle
                      v-model="time"
                  >
                    <v-btn value="16">16:00</v-btn>
                    <v-btn value="16.5">16:30</v-btn>
                    <v-btn value="17">17:00</v-btn>
                    <v-btn value="17.5">17:30</v-btn>
                  </v-btn-toggle>
              </v-col>
            </v-row>
        </v-card>
        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
        <v-btn @click="e6 = 2">Back</v-btn>
      </v-stepper-content>
  
      <v-stepper-step :complete="e6 > 4" step="4">
        세부내용 입력
        <small>최종 예약을 위해 반려동물의 정보를 입력하세요</small>
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-card color="grey lighten-3" class="mb-5" height="200px">
          <v-row>
            <v-col cols="12" sm="6" md="3" >
            <v-text-field 
                label="이름" 
                required 
                v-model="aniname"
            ></v-text-field>
            </v-col>

            <v-col cols="6" sm="6" md="3">
            <v-btn-toggle
                v-model="selected.ani"
                rounded
            >
                <v-btn>
                    강아지
                </v-btn>
                <v-btn>
                    고양이
                </v-btn>
            </v-btn-toggle>
            </v-col>

            <v-col cols="6" sm="6" md="3">
            중성화 유무 &nbsp; &nbsp;
            <v-btn-toggle
                v-model="selected.sex"
                rounded
            >
                <v-btn>
                    O
                </v-btn>
                <v-btn>
                    X
                </v-btn>
            </v-btn-toggle>
            </v-col>

            <v-col cols="12" sm="6" md="4">
            <v-text-field
                label="나이"
                required
                v-model="selected.age"
            ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
            <v-text-field
                label="무게"
                required
                v-model="selected.weight"
            ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
            <v-text-field
                label="품종"
                required
                v-model="selected.kind"
            ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
        <v-btn color="primary" @click="e6 = 1">Reservation</v-btn>
        <v-btn @click="e6 = 3">Back</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-app>
</div>
</template>
<script>
import DateTimePicker from "../../src/views/DateTimePicker.vue";

export default {
  name: 'reservation',
  data: function(){
      return {
        name: "",
        review: '',
        star: '',
        count: '',
        time:'',
            selected: {
                ani: '',
                kind: '',
                age: '',
                sex: '',
                weight: ''
            },
        message:"",
        e6: 1,
        
        headers: [
          {
            text: '이름',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
      }
  },
  components: {
    DateTimePicker,
  },
  methods: {
    hospital(){
      this.name = "멍냥병원";
      this.review = "의사쌤 왕친절 !!";
      this.star = "4.5";
      this.count = "20";
    },
    salon(){
      this.name = "멍냥미용실";
      this.review = "완벽한 변신";
      this.star = "4.7";
      this.count = "40";
    },
    hotel(){
      this.name = "멍냥호텔";
      this.review = "아늑하고 포근해요 ~";
      this.star = "4.0";
      this.count = "33";
    },
    cafe(){
      this.name = "멍냥카페";
      this.review = "분위기가 넘 좋네요";
      this.star = "4.9";
      this.count = "200";
    },
  }
}
</script>

<style scoped>
div {
  font-family: 'Gowun Dodum', sans-serif;
}
#colorB {
  background-color: #C5D9D0;
}
#colorb {
  background-color: #2A558C;
  color: white;
}
</style>