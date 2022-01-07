<template>
  <div>
    <div id="map"></div>
    <div class="button-group">
      {{sPlace + '는 장소'}}
      <button @click="placeSearch()">검색</button>
    </div>
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
                    <h3>{{name}}</h3>
                    
                    <br>
                    <h6>주소: {{address}}</h6>
                    <h6>전화번호: {{phone}}</h6>
                  
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      sPlace: this.$store.getters.fnGetPlace,
      markers: [],
      latitude:[],
      longitude: [],

      name: '',
      address: '',
      phone:''
    };
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
      console.log(this.sPlace);
      // 키워드로 장소를 검색합니다
      ps.keywordSearch('동물병원', this.placesSearchCB, this.searchOption); 
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
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        this.map.setBounds(bounds);
      } 
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
        console.log(this.name);
    });

    this.name = place.place_name;
    this.address = place.address_name;
    this.phone = place.phone;
}

   },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 400px;
  height: 400px;
}
.button-group {
  margin: 10px 0px;
}
button {
  margin: 0 3px;
}
</style>