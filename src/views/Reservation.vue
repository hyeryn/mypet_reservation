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
        <v-card color="grey lighten-3" class="mb-5" height="950px">
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
              <!--<tr @click="showAlert(props.item)" >-->
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
          <br>

          <v-card v-if="isStatusOn"
            class="mx-auto elevation-20"
            color="#385F73"
            dark
            style="max-width: 400px;"          
          >
          
<!--
          <div id="map" style="width:100%;height:350px;"></div>
-->
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
        <v-btn color="primary" @click="e6 = 4 , formSubmit3">Continue</v-btn>
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
  },
  methods: {
    formSubmit3 () {
            this.axios.post('http://34.64.202.151/profile/pet', {
                time: this.time,
            })
            
            .then((response) => {
                this.result = response.data
                this.no = response.data
            })
            .catch((error) => {
                this.output = error
            })
        },

    showAlert(a){
      //if (event.target.classList.contains('btn__content')) return;
      alert(a.name + '\n');
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
<!--
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨 
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다
ps.keywordSearch('동물병원', placesSearchCB, {
    location: new kakao.maps.LatLng(33.450701, 126.570667)
}); 

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    //키워드부분
    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}
</script>
-->

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