<template>
    <div>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div class="container px-5 py-4">
                <a class="navbar-brand fw-bold" href="#page-top">멍냥사이트</a>
                <button class="navbar-toggler" type="button" v-b-toggle.navbarResponsive aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="bi-list"></i>
                </button>
                <b-collapse class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#reservation">Reservation</a></li>
                        <li class="nav-item"><a class="nav-link me-lg-3" href="#community">Community</a></li>
                    </ul>
                    <button class="btn rounded-pill px-3 mb-2 mb-lg-0" style="background-color:#68788C">
                        <span class="d-flex align-items-center">
                              <router-link tag="a" to="/Home" style="text-decoration: none;">
                                <span class="small" style="color:white">Start</span>
                              </router-link>
                        </span>
                    </button>
                </b-collapse>
            </div>
        </nav>
        <!-- Mashead header-->
        <header class="masthead" style="background-color:#F2F2F2">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <!-- Mashead text and app badges-->
                        <div class="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 class="display-1 lh-1 mb-3">당신의 반려동물을 위한 최고의 사이트</h1>
                            <p class="lead fw-normal text-muted mb-5">예약 서비스와 커뮤니티를 동시에 활용</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- App features section-->
        <section id="reservation">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-4 order-lg-0 mb-5 mb-lg-0">
                        <h2 class="display-4 lh-1 mb-4">예약서비스</h2>
                        <p class="lead fw-normal text-muted mb-5 mb-lg-0">손쉽게 반려동물을 위한 서비스를 예약하고 싶으신가요?</p>
                    </div>
                    <div class="col-lg-8 order-lg-1">
                        <div class="container-fluid px-5">
                            <div class="row gx-5">
                                <div class="col-md-6 mb-5">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i class="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">동물병원</h3>
                                        <p class="text-muted mb-0">동물의 건강한 삶을 위한</p>
                                        <p class="text-muted mb-0">최상의 진료와 연구</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-5">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i class="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">미용실</h3>
                                        <p class="text-muted mb-0">손질 및 위생적 관리</p>
                                        <p class="text-muted mb-0">누구보다 아름답게</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-5 mb-md-0">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i class="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">호텔/유치원</h3>
                                        <p class="text-muted mb-0">적당한 활동을 통한 심리적인 안정감</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i class="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">카페</h3>
                                        <p class="text-muted mb-0">다른 동물들과 함께하는 시간</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <!-- Basic features section-->
        <section style="background-color:#F2F2F2" id="community">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-12 col-lg-5">
                        <h2 class="display-4 lh-1 mb-4">커뮤니티</h2>
                        <p class="lead fw-normal text-muted mb-auto mb-lg-0">홀로 반려동물을 키우기에 정보가 부족하지 않으셨나요?</p>
                        <p class="lead fw-normal text-muted mb-5 mb-lg-0">매일매일 자라나는 아이들을 기록해보세요</p>
                    </div>
                    <div class="col-sm-8 col-md-6">
                        <div class="px-5 px-sm-0"><img class="img-fluid rounded-circle" src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" alt="..." /></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to action section-->
        <section class="cta" >
            <div class="cta-content">
                <div class="container px-5">
                    <h2 class="text-white display-1 lh-1 mb-4">
                        이제 우리와 함께
                        <br />
                        시작해요 
                    </h2>
                </div>
            </div>
        </section>
    </body>
    </div>
</template>
<script>
export default {
    name: "before",
}
</script>


<style scoped>
div {
  font-family: 'Gowun Dodum', sans-serif;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

html {
  scroll-padding-top: 4.5rem;
}

.bg-black {
  background-color: #000 !important;
}

.text-gradient {
  background: -webkit-linear-gradient(#2937f0, #9f1ae2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

aside,
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

#mainNav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
}

#mainNav .navbar-toggler {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  color: #212529;
}
#mainNav .navbar-nav .nav-item .nav-link {
  color: #212529;
}
#mainNav .navbar-nav .nav-item .nav-link:hover {
  color: #6c757d;
}
#mainNav .navbar-nav .nav-item .nav-link.active {
  color: #2937f0;
}

section.cta {
  position: relative;
  padding: 15rem 0;
  background-image: url("https://source.unsplash.com/5g41N3uRPf8/1500x800");
  background-position: center;
  background-size: cover;
}
section.cta .cta-content {
  position: relative;
  z-index: 1;
}
section.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.masthead {
  background-color: #f8f9fa;
  padding-top: 9.5rem;
  padding-bottom: 5rem;
}
.masthead .masthead-device-mockup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.masthead .masthead-device-mockup .circle {
  position: absolute;
  fill: url(#circleGradient);
  width: 70%;
  display: none;
}
.masthead .masthead-device-mockup .circle .gradient-start-color {
  stop-color: #2937f0;
}
.masthead .masthead-device-mockup .circle .gradient-end-color {
  stop-color: #9f1ae2;
}
.masthead .masthead-device-mockup .shape-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  transform: rotate(-10deg);
  fill: #2937f0;
  bottom: 15%;
  left: 10%;
}
.masthead .masthead-device-mockup .shape-2 {
  position: absolute;
  height: 0.75rem;
  width: 0.75rem;
  fill: #2937f0;
  top: 15%;
  right: 10%;
}
.masthead .masthead-device-mockup .device-wrapper {
  max-width: 10rem;
}
@media (min-width: 576px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
    display: block;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 12.5rem;
  }
}
@media (min-width: 768px) {
  .masthead .masthead-device-mockup .circle {
    width: 60%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 992px) {
  .masthead .masthead-device-mockup .circle {
    width: 90%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1200px) {
  .masthead .masthead-device-mockup .circle {
    width: 75%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1400px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 17rem;
  }
}
</style>