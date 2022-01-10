<template>
<!-- Page header with logo and tagline-->
    <div>
        <div class="row my-5"></div>
        <header class="pt-5 pb-3 bg-light border-bottom" style="background-color:#F2F2F2;">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">멍냥 사이트</h1>
                    <p class="lead mb-0">멍냥 호텔예약과 병원예약을 한번에! 간편한 예매를 경험 해보세요</p> 
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row my-5 justify-content-between">

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header" style="background-color:#8596A6;">
                            <div class="row my-2 mx-3">
                                <h4 class="my-1">오늘의 날씨 맑음&nbsp;&nbsp;<small class="text-muted"><span>10</span>월 <span>10</span>일 <span>일</span>요일</small></h4>
                            </div>                      
                        </div>
                            
                        <div class="container mt-3">
                            <div>
                                <img src="https://prodigits.co.uk/thumbs/wallpapers/p2ls/animals/35/e3f7a47e12467080.jpg" class="card-img-top img-fluid"  style="height: 250px; border-radius: 5px;" alt="...">
                            </div>
                        </div>
                        <div class="container">
                            오늘은 날씨가 맑아서 멍멍이랑 산책을 다녀왔다! 내일도 맑기를~...
                        </div>
                        <div class="my-3 mx-3">
                            <v-btn class="py-2 px-4" size="sm" variant="warning" href="#" color="#2A558C" style="color:white;">자세히 보기</v-btn>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-5">
                    <div style="border: 1px solid rgb(218, 218, 218); border-radius: 5px;">
                        <div>
                            <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="4000"
                            controls
                            indicators
                            background="#ababab"
                            img-width="1024"
                            img-height="480"
                            style="text-shadow: 1px 1px 2px #333;"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                            >

                                <b-carousel-slide img-src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1024x408&t=inside">
                                    <v-btn rounded color="#F2CB05"><v-icon>mdi-thumb-up</v-icon>&nbsp;Best</v-btn>

                                    <h2>땡땡 동물병원</h2>
                                </b-carousel-slide>
                                
                                <b-carousel-slide img-src="https://cocotimes.kr/wp-content/uploads/2019/11/tica114m17080929_l.jpg">
                                    <v-btn rounded color="#F2CB05"><v-icon>mdi-thumb-up</v-icon>&nbsp;Best</v-btn>
                                    <h2>예쁜 미용실</h2>
                                </b-carousel-slide>

                                <b-carousel-slide img-src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside">
                                    <v-btn rounded color="#F2CB05"><v-icon>mdi-thumb-up</v-icon>&nbsp;Best</v-btn>
                                    <h2>호텔/유치원</h2>
                                </b-carousel-slide>

                                <b-carousel-slide img-src="https://dnvefa72aowie.cloudfront.net/origin/smb/202003/b4aae571622da98f596dfcbf43c8c8f8fdb31bd1c8419ba02a677f04bfad0717.webp?q=95&s=1440x1440&t=inside">
                                    <v-btn rounded color="#F2CB05"><v-icon>mdi-thumb-up</v-icon>&nbsp;Best</v-btn>
                                    <h2>카페</h2>
                                </b-carousel-slide>
                            </b-carousel>
                        </div>
                    </div>

                    <div class="row my-lg-3 my-sm-5">
                        <div>
                            <b-card no-body>
                                <b-tabs card>
                                    <b-tab title="예약현황" active>
                                        <b-card-text>
                                            <div><v-btn class="ma-2 fw-bold" color="#022601" dark x-small>D-2</v-btn>&nbsp;&nbsp;땡땡 병원</div>
                                            <div><v-btn class="ma-2 fw-bold" color="#022601" dark x-small>D-3</v-btn>&nbsp;&nbsp;멍냥 카페</div>
                                            <div><v-btn class="ma-2 fw-bold" color="#022601" dark x-small>D-6</v-btn>&nbsp;&nbsp;예쁜 미용실</div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="새로생긴 가게">
                                        <b-card-text>네모네모 카페 오픈!!</b-card-text>
                                    </b-tab>
                                    <b-tab title="최근 본 가게">
                                        <b-card-text>동그라미 병원</b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </b-card>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {                             
data() {
    return {
    slide: 0,
    sliding: null
    }
},
/*methods: {
    onSlideStart(slide) {
    this.sliding = true
    },
    onSlideEnd(slide) {
    this.sliding = false
    }
}*/
}
</script>

<style scoped>
div {
  font-family: 'Gowun Dodum', sans-serif;
}
</style>