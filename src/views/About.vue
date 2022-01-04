<template>
    <v-content>
        <v-app>
            
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <v-content style="font-family: 'Gowun Dodum', sans-serif;">
                당신과 반려동물의 프로필을 설정해주세요
                <v-container>
                    <v-row class="m-5">
                        <v-col cols="12" sm="12" md="12">
                            <v-row justify="center">
                                <v-card max-width="1000px" class="m-5">
                                    <v-card-title style="height: 100px;" class="grey lighten-4">
                                        <span>프로필 설정</span>
                                    </v-card-title>
                                    <v-card-text style="height: 50px; position:relative">
                                        <v-btn absolute top right fab dark color="pink" @click="MyData">
                                            <v-icon>add</v-icon>
                                        </v-btn> 
                                    </v-card-text>
                                    <v-card-text class="p-5">
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="6" >
                                                <v-text-field 
                                                    label="이름" 
                                                    required 
                                                    v-model="user.name"
                                                ></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="6">
                                                <v-text-field
                                                    label="닉네임"
                                                    hint="중복이 불가능합니다"
                                                    required
                                                    v-model="user.id"
                                                ></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="5">
                                                    <p>우편번호: {{ zip }}</p> 
                                                </v-col>
                                                <v-col cols="12" sm="6" md="5">
                                                    <p>주소: {{ addr1 }}</p> 
                                                </v-col>
                                                <v-col cols="12" sm="6" md="2">
                                                    <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="openDaumPostcode"
                                                    >
                                                    주소 검색
                                                    </v-btn>
                                                </v-col>

                                                <div ref="wrap" style="display:none;border:1px solid;width:500px;height:300px;margin:5px 0;position:relative">
                                                <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" @click="foldDaumPostcode" alt="접기 버튼">
                                                </div>

                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="dialog = false"
                                        >
                                        Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                            <v-row justify="center">
                                <v-card max-width="1000px" class="m-5">
                                    <v-card-title style="height: 100px;" class="grey lighten-4">
                                        <span >반려동물 프로필 설정</span>
                                    </v-card-title>
                                    <v-card-text style="height: 50px; position:relative">
<!--
                                        <v-btn absolute top right fab dark color="pink">
                                            <v-icon>add</v-icon>
                                        </v-btn> 
-->
                                    </v-card-text>
                                    <v-card-text class="p-5">
                                        <v-container>
                                            <v-row>
                                                <div class="input-group">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="filename"
                                                        @dragover.prevent
                                                        @dragenter.prevent
                                                        @drop.prevent="onDrop" >
                                                    <div class="input-group-append">
                                                    <span class="input-group-text" @click="onClickFile">사진 </span>
                                                        
                                                    </div>
                                                    <input type=file class="file-input" style="display: none;" accept="image/*" ref="fileInput" @change="onFileChange">
                                                </div>
                                                <div v-show="imageSrc" class="upload-image">
                                                    <img :src="imageSrc">
                                                </div>
                                                <v-col cols="12" sm="6" md="6" >
                                                <v-text-field 
                                                    label="이름" 
                                                    required 
                                                    v-model="aniname"
                                                ></v-text-field>
                                                </v-col>

                                                <v-col cols="12" sm="6" md="3">
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

                                                <v-col cols="12" sm="6" md="3">
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
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <!-- <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="dialog = false"
                                        >
                                        Save
                                        </v-btn> -->
                                        <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="formSubmit"
                                        >
                                        Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </v-app>
    </v-content>

           
</template>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
import axios from 'axios'
export default {
    name: "about",
    data: function(){
        return {
            user: {
                name: '',
                id: '',
            },
            zip: '',
            addr1: '',
            addr2: '', 
            
            aniname: '',
            selected: {
                kind: '',
                age: '',
                sex: '',
                weight: '',
                ani: ''
            },
            imageSrc: '',
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
            const formData = {
                aniname: this.aniname,
                kind: this.selected.kind,
                age: this.selected.age,
                sex: this.selected.sex,
                weight: this.selected.weight,
                ani: this.selected.ani,
                imageSrc: this.imageSrc
            }
            console.log(formData)
            
            axios.post('http://34.64.202.151/profile/pet', formData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
        },

        openDaumPostcode () {
            const elementWrap = this.$refs.wrap
            const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
            new window.daum.Postcode({
                oncomplete: (data) => {
        
                    if (data.userSelectedType === 'R') { 
                        addr = data.roadAddress
                    } else {
                        addr = data.jibunAddress
                    }
        
                    this.address = add;
                    elementWrap.style.display = 'none'

                    document.body.scrollTop = currentScroll

                    let fullRoadAddr = data.roadAddress;  
                    let extraRoadAddr = ''; 

                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){ 
                        extraRoadAddr += data.bname; 
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){ 
                        extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName); 
                    } 
                    if(extraRoadAddr !== ''){ extraRoadAddr = ' (' + extraRoadAddr + ')'; 
                    } 
                    if(fullRoadAddr !== ''){ fullRoadAddr += extraRoadAddr; } 
                    
                    this.zip = data.zonecode; 
                    this.addr1 = fullRoadAddr; 
                },

                onresize: function (size) {
                    elementWrap.style.height = size.height + 'px'
                },
                width: '100%',
                height: '100%'
            }).embed(elementWrap)
            elementWrap.style.display = 'block'
        },
        foldDaumPostcode () {
            const elementWrap = this.$refs.wrap
            elementWrap.style.display = 'none'
        },
        onClickFile(event) {
        this.$refs.fileInput.click()
        },
        onFileChange(event) {
        this.inputImageFile(event.target.files)
        },
        inputImageFile (files) {
        if (files.length) {
            let file = files[0]
            if (!/^image\//.test(file.type)) {
            alert('이미지 파일만 등록이 가능합니다')
            return false
            }
            this.filename = file.name
            this.preview(file)
        }
        },
        onClickUpload () {
        this.preview (this.filename)
        },
        preview (file) {
            if (typeof file === 'string') {
                this.imageSrc = file
            } else {
                let vm = this
                let reader = new FileReader()
                reader.onload = () => {
                vm.imageSrc = reader.result
                }
                reader.readAsDataURL(file)
            }
        },
    },
}
</script>

<style scoped>
v-content {
  font-family: 'Gowun Dodum', sans-serif;
}
</style>