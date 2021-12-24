<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav" style="background-color:white">
            <div class="container px-5">
                <a class="navbar-brand fw-bold" href="/Home"><font-awesome-icon icon="paw" /> 멍냥</a>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item-dropdown text="예약하기" right>
                            <b-dropdown-item href="/Reservation"><i class="far fa-hospital"></i>&nbsp;&nbsp; 병원</b-dropdown-item>
                            <b-dropdown-item href="/Reservation"><i class="far fa-user"></i>&nbsp;&nbsp; 미용실</b-dropdown-item>
                            <b-dropdown-item href="/Reservation"><i class="fas fa-hotel"></i>&nbsp;&nbsp; 호텔/유치원</b-dropdown-item>
                            <b-dropdown-item href="/Reservation"><i class="fas fa-coffee"></i>&nbsp;&nbsp; 카페</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="커뮤니티" right>
                            <b-dropdown-item href="#">노하우 공유</b-dropdown-item>
                            <b-dropdown-item href="#">경험 공유</b-dropdown-item>
                            <b-dropdown-item href="#">멍냥 자랑</b-dropdown-item>
                            <b-dropdown-item href="#">질문 게시판</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="프로필" right>
                            <b-dropdown-item href="/Mypage">나의 프로필</b-dropdown-item>
                            <b-dropdown-item href="#">나의 예약현황</b-dropdown-item>
                            <b-dropdown-item href="#">내가 쓴 글</b-dropdown-item>
                            <b-dropdown-item href="#">내가 쓴 댓글</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>

                <b-collapse class="mx-5" is-nav></b-collapse>
                <b-collapse class="mx-5" is-nav></b-collapse>

                <b-collapse id="nav-collapse" is-nav>
                    <v-autocomplete class="mx-3"></v-autocomplete>
                    <v-btn color="#68788C" elevation="2" class="mx-1 fw-bold" type="submit" href="/Login"><span style="color:white">로그인</span></v-btn>
                    <v-btn color="#68788C" elevation="2" class="mx-1 fw-bold" type="submit" href="/Signup"><span style="color:white">회원가입</span></v-btn>
                </b-collapse>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "header",
}
</script>