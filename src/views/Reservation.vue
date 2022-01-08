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
        <v-card color="grey lighten-3" class="mb-5" height="800px">
          <v-row>
            <v-col cols="6" sm="12" md="6">
              <br><br> 
              <KaKaoMap></KaKaoMap>
            </v-col>    
            <v-col cols="6" sm="12" md="6">
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
              v-model="selectedName"
              :headers="headers"
              :items="items"
              :search="search" 
            >
              <template slot="item" slot-scope="props">
                <tr @click="toggleOnOff(props.item)">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.distance }}</td>
                <td class="text-xs-right">{{ props.item.star }}</td>
                <td class="text-xs-right">{{ props.item.review }}</td>
                  </tr>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                "{{ search }}" 는 존재하지 않습니다.
              </v-alert>
            </v-data-table>
              </v-col>    
          </v-row>
          
          
          
          <br>

<!--
          <v-card v-if="isStatusOn"
            class="mx-auto elevation-20"
            color="#385F73"
            dark
            style="max-width: 400px;"          
          >
            <v-layout justify-space-between>
              <v-flex xs8>
                <v-card-title primary-title>
                  <div>
                    <h1>{{name}}</h1>
                    <v-spacer></v-spacer>
                    <div>거리 : {{distance}}</div>
                    <div>방문자 리뷰 : {{review}}</div>
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
          -->
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
                    <DateTimePicker :label="'날짜'"></DateTimePicker>
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
        <v-btn color="primary" @click="Reserv">Reservation</v-btn>
        <v-btn @click="e6 = 3">Back</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-app>
</div>
</template>
<script>
import DateTimePicker from "../../src/views/DateTimePicker.vue";
import KaKaoMap from "../../src/views/map.vue";
import axios from 'axios'
export default {
  data: function(){
      return {
        sPlace: this.$store.getters.fnGetPlace,

        name: "",
        review: '',
        star: '',
        distance: '',
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

        selectedName:[],
        search:'',

        isStatusOn:false,

        headers: [
          {
            text: '이름',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: '거리', value: 'distance' },
          { text: '평점', value: 'star' },
          { text: '리뷰수', value: 'review' },
        ],
        items: [
        {
          value: false,
          name: 'Frozen Yogurt',
          distance: 159,
          star: 6.0,
          review: 24,
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          distance: 159,
          star: 6.0,
          review: 24,
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  },
  components: {
    DateTimePicker,
    KaKaoMap
  },
  methods: {
    Reserv () {
      const reservData = {
                // 보낼 데이터 정보
            }
            console.log(reservData)
            
            axios.post('http://34.64.202.151/profile/pet', reservData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
    },

    toggleOnOff(a) {
      this.isStatusOn = !this.isStatusOn;
      this.name = a.name;
      this.review = a.review;
      this.star = a.star;
      this.count = a.count;
    },
    handleClick(item) {
        this.userInfo = item;
      },
    hospital(){
      this.sPlace = "동물병원"
      this.$store.commit('fnSetPlace', this.sPlace);
      console.log(this.$store.getters.fnGetPlace);
    },
    salon(){
      this.sPlace = "애견미용실"
      this.$store.commit('fnSetPlace', this.sPlace);
      console.log(this.$store.getters.fnGetPlace);
    },
    hotel(){
      this.sPlace = "애견호텔"
      this.$store.commit('fnSetPlace', this.sPlace);
      console.log(this.$store.getters.fnGetPlace);
    },
    cafe(){
      this.sPlace = "애견카페"
      this.$store.commit('fnSetPlace', this.sPlace);
      console.log(this.$store.getters.fnGetPlace);
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