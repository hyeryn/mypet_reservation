

<template>
    <b-container>
        <div style="height: 150px;"></div>
        <h1 class="text-center mb-5">회원가입</h1>

        <form>
            <div class=" row mx-5 justify-content-around">
                <div class="col-lg-3 col-sm-0"></div>
                <div class="col-lg-6 col-sm-12">
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            label="이메일"
                            label-for="input-1"
                            description="We'll never share your email with anyone else."
                            class="my-5"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="signUpForm.email"
                            type="email"
                            placeholder="이메일을 입력하세요."
                            required
                            style="width: 375px; display: inline-block;"
                            ></b-form-input>
                            <v-btn dark color="#2A558C" class="btn-sm mt-lg-1 my-sm-2 ml-lg-2 mx-sm-0 mx-lg-2"><span style="color:white">중복확인</span></v-btn>
                        </b-form-group>

                        <b-form-group
                            id="input-group-2"
                            label="비밀번호"
                            label-for="input-2"
                            description="Your password must be 8-20 characters long, contain letters and numbers, and must not
                            contain spaces, special characters, or emoji."
                            class="my-5"
                        >
                            <b-form-input
                            id="password"
                            v-model="signUpForm.password"
                            type="password"
                            placeholder="비밀번호를 입력하세요."
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-2"
                            label="비밀번호 확인"
                            label-for="input-2"
                            class="my-5"
                        >
                            <b-form-input
                            id="password2"
                            v-model="signUpForm.verifyPassword"
                            type="password"
                            placeholder="비밀번호를 다시 입력하세요."
                            required
                            ></b-form-input>
                        </b-form-group>

                        <hr>

                        <b-form-group
                            id="input-group-1"
                            label="닉네임"
                            label-for="input-1"
                            class="my-5"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="signUpForm.nickName"
                            placeholder="닉네임을 입력하세요."
                            required
                            style="width: 375px; display: inline-block;"
                            ></b-form-input>
                            <v-btn dark color="#2A558C" class="btn-sm mt-lg-1 my-sm-2 ml-lg-2 mx-sm-0 mx-lg-2"><span style="color:white">중복확인</span></v-btn>
                        </b-form-group>

                        <b-form-group
                            id="input-group-2"
                            label="이름"
                            label-for="input-2"
                            class="my-5"
                        >
                            <b-form-input
                            id="input-2"
                            v-model="signUpForm.name"
                            placeholder="이름을 입력하세요."
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-2"
                            label="전화번호"
                            label-for="input-2"
                            class="my-5"
                        >
                            <b-form-input
                            id="input-2"
                            v-model="signUpForm.phoneNumber"
                            placeholder="'-'없이 숫자만 입력해 주세요"
                            required
                            ></b-form-input>
                        </b-form-group>
                    </b-form>

                    <div class="row my-4 mx-1 justify-content-around">
                        <b-button class="btn btn-block btn-primary"
                            @click="formSubmit"
                            style="font-size: 17px; background-color: #2A558C;"
                            href="/Home"
                            >
                            회원가입
                        </b-button>
                    </div>
                    <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ signUpForm }}</pre>
                    </b-card>

                    <div style="height:100px;"></div>
                </div>
                <div class="col-lg-3 col-sm-0"></div>
            </div>
        </form>
    </b-container>
</template>
<script>
function test() { // eslint-disable-line no-unused-vars

    var p1 = document.getElementById('password1').value;
    var p2 = document.getElementById('password2').value;
    
    if(p1.length < 6) {
            alert('입력한 글자가 6글자 이상이어야 합니다.');
            return false;
        }
        
        if( p1 != p2 ) {
        alert("비밀번호불일치");
        return false;
        } else{
        alert("비밀번호가 일치합니다");
        return true;
        }
}


import axios from 'axios'

export default {
    data() {
    return {
        signUpForm: {
            email: '',
            password: '',
            nickName: '',
            name: '',
            phoneNumber: ''
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
        },
        formSubmit () {
            const signUpFormData = {
                email: this.signUpForm.email,
                password: this.signUpForm.password,
                nickName: this.signUpForm.nickName,
                name: this.signUpForm.name,
                phoneNumber: this.signUpForm.phoneNumber
            }

            console.log(signUpFormData)
            
            axios.post('http://34.64.202.151/profile/pet', signUpFormData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
        },

    }
}

</script>
<style scoped>
form, h1 {
    font-family: 'Gowun Dodum', sans-serif;
}
</style>