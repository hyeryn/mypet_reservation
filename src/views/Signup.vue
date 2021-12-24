<template>
    <b-container>
        <div style="height: 150px;"></div>
        <h1 class="text-center mb-5">회원가입</h1>

        <form>
            <div class=" row mx-5 justify-content-around">
                <div class="col-lg-3 col-sm-0"></div>
                <div class="col-lg-6 col-sm-12">
                    <div class="form-group my-3">
                        <div><label for="inputEmail3">Email</label></div>
                        <input type="email" class="form-control" id="inputEmail3" placeholder="이메일을 입력해 주세요" style="width: 375px; display: inline-block; font-size:small" required>
                        <v-btn dark color="#2A558C" class="btn-sm mt-lg-1 my-sm-2 ml-lg-2 mx-sm-0 mx-lg-2"><span style="color:white">중복확인</span></v-btn>
                    </div>
                    
                    <b-form @submit.stop.prevent class="my-3">
                        <label for="text-password">비밀번호</label>
                        <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                        <b-form-text id="password-help-block">
                            영문자, 특수문자, 숫자 포함 8자 이상
                        </b-form-text>
                    </b-form>
                    <b-form @submit.stop.prevent class="mt-3 mb-5">
                        <label for="text-password">비밀번호</label>
                        <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                    </b-form>

                    <hr>

                    <div class="form-group mt-5 mb-3">
                        <div><label for="validationCustom03">닉네임</label></div>
                        <input type="text" class="form-control" id="validationCustom02" style="width: 375px; display: inline-block; font-size:small;" placeholder="닉네임을 입력해 주세요" required>
                        <v-btn dark color="#2A558C" class="btn-sm mt-lg-1 my-sm-2 ml-lg-2 mx-sm-0  mx-lg-2"><span style="color:white">중복확인</span></v-btn>
                    </div>
                    <div class="form-group my-3">
                        <label for="validationCustom01">이름</label>
                        <input type="text" class="form-control" id="validationCustom01" style="font-size:small;" placeholder="이름을 입력해 주세요" required>
                    </div>
                    <div class="form-group my-3">
                        <label for="validationCustom02">전화번호</label>
                        <input type="text" class="form-control" id="validationCustom02" style="font-size:small;" placeholder="'-'없이 숫자만 입력해 주세요" required>
                    </div>
                    <div class="row my-5 mx-1 justify-content-around">
                        <v-btn dark color="#2A558C" class="btn-block"><span style="color:white">회원가입</span></v-btn>
                    </div>
                    <div style="height:100px;"></div>
                </div>
                <div class="col-lg-3 col-sm-0"></div>
            </div>
        </form>
    </b-container>
</template>
<script>
export default {
    
}
</script>

<style scoped>
form, h1 {
  font-family: 'Gowun Dodum', sans-serif;
}
</style>