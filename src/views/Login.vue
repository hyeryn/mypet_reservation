<template>
<div class="login">
    <b-container>
        <div style="height: 150px;"></div>
        <h1 class="text-center mb-5">로그인</h1>
        <form  class="loginform">
            <div class=" row mx-5 justify-content-around">
                <div class="col-lg-3 col-sm-0"></div>
                <div class="col-lg-6 col-sm-12">
                    <b-form>
                        <b-form-group
                            label-for="memberEmailInput"
                            label="이메일"
                            description="We'll never share your email with anyone else."
                            class="my-5"
                        >
                            <b-form-input
                                class="input_text"
                                id="memberEmailInput"
                                ref="memberEmailInput"
                                v-model="loginForm.email"
                                type="email"
                                placeholder="이메일을 입력하세요."
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            label="비밀번호"
                            label-for="memberPasswordInput"
                            description="Your password must be 8-20 characters long, contain letters and numbers, and must not
                            contain spaces, special characters, or emoji."
                            class="my-5"
                        >
                            <b-form-input
                                class="input_text"
                                id="memberPasswordInput"
                                ref="memberPasswordInput"
                                v-model="loginForm.password"
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                            ></b-form-input>
                        </b-form-group>
                    </b-form>

                    <div class="row my-4 mx-1 justify-content-around">
                        <b-button @click.prevent="formsubmit" class="button blue" style="font-size: 17px; background-color: #2A558C;">
                            로그인
                        </b-button>
                    </div>
                    <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ loginForm }}</pre>
                    </b-card>
                    <div>
                        <a href="#" class="row my-2 text-muted smail">회원가입 하기</a>
                        <a href="#" class="row my-2 text-muted smail">비밀번호 찾기</a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-0"></div>
            </div>
        </form>

        <div class=" row mx-5 my-4 justify-content-around">
            <div class="col-lg-3 col-sm-0"></div>
            <div class="col-lg-3 col-sm-0"></div>
        </div>
        <div style="height: 30px;"></div>
        <hr>
        <div style="height: 50px;"></div>
        <div class="row my-3 justify-content-around">
            <v-btn outlined color="#2A558C" style="font-size: 15px; width: 400px;">
                <img src="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg" alt="" style="width: 25px;">&nbsp;&nbsp;
                Google로 로그인
            </v-btn>
        </div>
        <div class="row my-3 justify-content-around">
            <v-btn outlined color="#2A558C" style="font-size: 15px; width: 400px;">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAxzz///8AxjcAxCZQ0Gjc9N/m9+jR8dbQ9Ntp2YMAxjgAxCwAxTAAxTP7//3p+Osfy01R1HC068Hx/PTL8tVIz2O77cfF7ct/3pXX9d8Awx+L4aA70F+Y5KlJ0mqn6LcszVWh5rB024yH4Jtg2oBa1Xau6bwozVMQgS/cAAACxklEQVR4nO3c7W7aQBBG4Vm7QPGabwqBkBSSpr3/O6yUKi0EbK8NjTKvzvPbWnHixWInks0AAAAAAAAAAAAAAAAAAAAAAAAAQEORJ4kJS8WbrXRLxbdFP8FknjcuFVeTlJXWH5yYfQlphmXTUvnXpIV6zX+rm0ouHE+LhqW8F4Zl0010XxjuGhL9FzbtU/+FYbOtXUqgMNzXPugVCsMuq1lKonAzqllKojA81OxTjcLwWH0XRQr78oXhe+UHVCkMs6q7KFM4sYqfNjKFYV7xPNUprDoqChUuLu9TocKwuvgTXKkwPF3ap1KFF4+KUoVheeF5qlUY7s4TxQrH+7Ojolhh2JzdRLXC85GGXOHZSEOvsPfuJuoVhsNpomDhu6OiYmE/O/5po1h4OtKQLDzZp5qFx0dFzcLjkYZo4dFIQ7Xw3z5VLQzrt08sW/h3pKFb+DbS0C0My1y9MDxH9cLx61FRuTBsSvXC15GGdmHYZ+qF/VK9MByiemGYbdUL+87v4aT5ksPSdeGPRfM1CZd85sKXtOv8Fg63P9ULS0v4KrouHI0e1QstP6gXWt5XL8x26oUWH9QLrdyoF2a7sXihxWf1wtRjruPCwq7dp5+90Mon9UKLa/XCYpp2DvRbaOVQvdDyuXphMbpmn3ootNE1Iw0XhRavGGn4KCyy7kdFH4U2mqkXXjHS8FJoses+dVPYeaThptDivXqhld2Oio4KO440HBV2HGl4KrRt2n8MHRd2Gmm4Kuw00vBVaHGlXthhpOGssMNIw1th+5GGu8Iia7lP3RW2Pir6K2x7VHRYWBStjooOC1vuU4+FFg/qhRZ76oXZL/XCNiMNp4UtRhpeC7N96lHRa6HFO/VCyxNHGh9dWOx6gwSbl7r3ev5ZaZqy0GBQ9TK0/ybxjeWNgTd99zkAAAAAAAAAAAAAAAAAAAAAAAAACb8BlaxF0SY61+4AAAAASUVORK5CYII=" alt="" style="width: 25px;">&nbsp;&nbsp;
                Naver로 로그인
            </v-btn>
        </div>
        <a href="/Mypage/" @click="kakaoLogin" style="text-decoration:none">
            <div class="row mt-3 mb-5 justify-content-around">
                <v-btn outlined color="#2A558C" style="font-size: 15px; width: 400px;">
                    <img src="https://pbs.twimg.com/profile_images/738200195578494976/CuZ9yUAT.jpg" alt="" style="width: 25px;">&nbsp;&nbsp;
                    Kakao로 로그인
                </v-btn>
            </div>
        </a>
        <div style="height: 50px;"></div>
    </b-container> 
</div>  
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data : function() {
    return {
        loginForm: {
            email: '',
            password: '',
            errorMessage: '',
        },
    }
    },
    methods: {
        MyData : function() {
            axios.get('/api/contacts/')
            .then((response) => {
                console.warn(response);
                this.result = response.data
            })
        },formsubmit () {
            const loginFormData = {
                email: this.loginForm.email,
                password: this.loginForm.password,
            }

            console.log(loginFormData)
            
            axios.post('http://34.64.202.151/auth/login', loginFormData)
                .then(((res) => {
                            console.log(res.data.result[0].id),
                            console.log(res.data.result[0].nickname),
                            console.log(res.nickname),
                            this.$store.commit('fnSetId', res.data.result[0].id),
                            this.$store.commit('fnSetNickName', res.data.result[0].nickname)
                        }
                    )
                )
                .catch(error => console.log(error))
        },
        kakaoLogin() {
            console.log(window.Kakao);
            window.Kakao.Auth.login({
                scope : 'account_email, gender',
                success: this.GetMe,
            });
        },
        GetMe(authObj){
            console.log(authObj);
            window.Kakao.API.request({
                url:'/v2/user/me',
                success : res => {
                    const kakao_account = res.kakao_account;
                    const userInfo = {
                        nickname : kakao_account.profile.nickname,
                        email : kakao_account.email,
                        password : '',
                        account_type : 2,
                    }

                    axios.post('http://localhost:8080/Mypage',{
                        email : userInfo.email,
                        nickname : userInfo.nickname
                    })
                    .then(res => {
                    console.log(res);
                    console.log("데이터베이스에 회원 정보가 있음!");
                    })
                    .catch(err => {
                        console.log(err);
                    console.log("데이터베이스에 회원 정보가 없음!");
                    })
                    console.log(userInfo);
                    alert("로그인 성공!");
                    this.$bvModal.hide("bv-modal-example");
                },
                fail : error => {
                    this.$router.push("/errorPage");
                    console.log(error);
                }
            })
        }
    }
}

</script>

<style scoped>
div {
    font-family: 'Gowun Dodum', sans-serif;
}
</style>