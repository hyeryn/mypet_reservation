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
              
              <!--<KaKaoMap></KaKaoMap>-->
              <div>

    <div class="button-group">
      <button @click="placeSearch()">지도에서 위치찾기</button>
    </div>
    <div id="map"></div>
    <br><br>

    <v-card 
            class="mx-auto elevation-20"
            color="#385F73"
            dark
            style="max-width: 400px;"          
          >
            <v-layout justify-space-between>
              <v-flex xs9>
                <v-card-title primary-title>
                  <div>
                    <h3>{{this.$store.getters.fnGetName}}</h3>
                    
                    <br>
                    <h6>주소: {{this.$store.getters.fnGetAddress}}</h6>
                    <h6>전화번호: {{this.$store.getters.fnGetNumber}}</h6>
                  
                  </div>
                </v-card-title>
              </v-flex>
              <v-img
                class="shrink ma-2"
                contain
                height="125px"
                src="https://blog.hmgjournal.com/images/contents/article/201603211108-Reissue-pet-family-01.jpg"
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
  </div>
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
                <tr @click="reservationplace(props.item)">
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
//import KaKaoMap from "../../src/views/map.vue";
import axios from 'axios'
export default {
  data: function(){
      return {
        sPlace: this.$store.getters.fnGetPlace,

        markers: [],
        latitude:[],
        longitude: [],

        name: '',
        address: '',
        phone:'',
        star: 3,

        // name: "",
        // review: '',
        // star: '',
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

        headers: [
          {
            text: '이름',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: '거리', value: 'distance' },
          { text: '평점', value: 'star' },
          { text: '리뷰', value: 'review' },
        ],
         items: [
       ],
      newPlace: {
        value: false,
        name: '',
        distance:'', 
        star:'', 
        review:'',
        address:'',
        phone:'',
      }
     }
  },
  components: {
    DateTimePicker,
    //KaKaoMap
  },
  mounted() {
    // 접속 위치 얻어오기
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude; //위도
      this.longitude = pos.coords.longitude; //경도

      this.markerPositions=kakao.maps.LatLng(this.latitude,this.longitude);

      this.searchOption = {
        location: new kakao.maps.LatLng(this.latitude,this.longitude),
        radius: 5000,
        size: 15
    };

      if (window.kakao && window.kakao.maps) {

        this.initMap();
        this.placeSearch();

      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=84ad747d38ba57ab892c06039daaf611";
        document.head.appendChild(script);
      }

    }, err => {
      alert(err.message);
    })
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };
      this.map = new kakao.maps.Map(container, options);
      this.displayMarker([[this.latitude, this.longitude]]);
    },

    displayMarker(markerPositions) {
    
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }
      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );
      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );
        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );
        this.map.setBounds(bounds);
      }
    },

    placeSearch(){
      var ps = new kakao.maps.services.Places(this.map); 
      // 키워드로 장소를 검색합니다
      ps.keywordSearch(this.$store.getters.fnGetPlace, this.placesSearchCB, this.searchOption); 
    },

    placesSearchCB (data, status) {
      if (!("geolocation" in navigator)) {
        return;
      }

      if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            this.displayplaceMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));

            var radLat1 = Math.PI * this.latitude / 180;
            var radLat2 = Math.PI * data[i].y / 180;
            var theta = this.longitude - data[i].x;
            var radTheta = Math.PI * theta / 180;
            var dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
            if (dist > 1)
                dist = 1;

            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515 * 1.609344 * 1000;
            if (dist < 100) dist = Math.round(dist / 10) * 10;
            else dist = Math.round(dist / 100) * 100;

            this.newPlace.name = data[i].place_name;
            this.items.push({value: false,
                name: data[i].place_name,
                distance: dist+'m',
                star:'3', 
                review:'263',
                address:data[i].address_name,
                number:data[i].phone});
            console.log(this.newPlace.name);
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        this.map.setBounds(bounds);
      } 
     },

     Placehere(a,b,c){
      this.$store.commit('fnSetName', a);
      this.$store.commit('fnSetAddress', b);
      this.$store.commit('fnSetNumber', c);
  },

    displayplaceMarker(place){
      var marker = new kakao.maps.Marker({
       map: this.map,
       position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        console.log(place.place_name, place.address_name, place.phone);
        this.name = place.place_name;
        this.address = place.address_name;
        this.phone = place.phone;
        this.Placehere(this.name, this.address, this.phone);
    });
  },
   
    Reserv () {
       const reservData = {
                place: this.name,
                date: this.$store.getters.fnGetDate,
                time: this.time,
                user: this.user,
                pet: this.pet
            }
            console.log(reservData)
            
            axios.post('http://34.64.202.151/reservation', reservData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
    },

    reservationplace(a) {
      console.log('예약중')
      this.name = a.name;
      this.address = a.address;
      this.phone = a.number;
      this.$store.commit('fnSetName', this.name);
      this.$store.commit('fnSetAddress', this.address);
      this.$store.commit('fnSetNumber', this.phone);
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
#map {
  width: 400px;
  height: 400px;
}
/* .button-group {
  margin: 10px 0px;
}
button {
  margin: 0 3px;
} */
</style>