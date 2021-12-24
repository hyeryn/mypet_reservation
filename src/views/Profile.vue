<template>
<div>
<body id="profile">
    <h2 style="font-weight: lighter">당신과 반려동물의 프로필을 설정해주세요 ! </h2>
    <form @submit.prevent="{openDaumPostcode,foldDaumPostcode}">
    <label>
        <p class="label-txt" style="font-size:20px; font-weight: bolder">프로필 설정</p>
        <br/>
    </label>
    <label>
        <p class="label-txt">이름</p>
        <input type="text" class="input" name="이름" v-model="user.name">
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
    <label>
        <p class="label-txt">닉네임</p>
        <input type="text" class="input" name="닉네임" v-model="user.id">
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
    <label>
        <p class="label-txt">주소</p>
        <input type="text" class="input" id="address" placeholder="서울특별시 성북구 -" v-model="user.address" disabled>
        <div class="line-box">
        <div class="line"></div>
        </div>
        <label>
            <button @click="openDaumPostcode">주소 검색</button>
            <div ref="wrap" style="display:none;border:1px solid;width:500px;height:300px;margin:10px 0;position:relative">
            <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" @click="foldDaumPostcode" alt="접기 버튼">
            </div>
        </label>
    </label>
    <label>
        <p class="label-txt">우편번호: {{ zip }}<br></p> 
        <br>
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
    <label>
        <p class="label-txt">기본주소: {{ addr1 }}<br></p>
        <br>
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
    </form>

    <form>
    <label>
        <p class="label-txt" style="font-size:20px; font-weight: bolder">반려동물 정보</p>
        <br/>
    </label>
    <label>
        <div class="input-group">
            <input
                type="text"
                class="form-control"
                v-model="filename"
                @dragover.prevent
                @dragenter.prevent
                @drop.prevent="onDrop" >
            <div class="input-group-append">
            <span class="input-group-text" @click="onClickFile">멍냥이 사진</span>
                <!--
                <button
                        class="btn btn-outline-info"
                        @click="onClickUpload">Upload</button>
                -->
            </div>
            <input type=file class="file-input" accept="image/*" ref="fileInput" @change="onFileChange">
        </div>
        <div v-show="imageSrc" class="upload-image">
            <img :src="imageSrc">
        </div>
    </label>
    <label>
        <p class="label-txt">이름</p>
        <input type="text" class="input" name="동물이름" v-model="aniname">
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
        <label class="box-radio-input" style="display: inline-block">
                <input type="radio" name="cp_item" value="강아지" v-model="checkedAni" id="dog" checked="checked">
                <span>강아지</span></label>
        <label class="box-radio-input" style="display: inline-block">
            <input type="radio" name="cp_item" value="고양이" v-model="checkedAni" id="cat">
            <span>고양이</span></label> &nbsp; &nbsp; &nbsp;
        중성화 유무 &nbsp;
        <label class="box-radio-input" style="display: inline-block">
                <input type="radio" name="cp_item2" value="yes" v-model="selected.sex" id="yes">
                <span>O</span></label>
        <label class="box-radio-input" style="display: inline-block">
            <input type="radio" name="cp_item2" value="no" v-model="selected.sex" id="no">
            <span>X</span></label>
    <label>
        <p class="label-txt">나이</p>
        <input type="text" class="input" name="나이" v-model="selected.age">
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
    <label>
        <p class="label-txt">무게</p>
        <input type="text" class="input" name="무게" v-model="selected.weight">
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
    <label>
        <p class="label-txt">품종</p>
        <input type="text" class="input" name="품종" v-model="selected.kind">
        <div class="line-box">
        <div class="line"></div>
        </div>
    </label>
    </form>

        <button v-on:click="addKeywordForm">추가</button>
        <div id="addedKeyword"></div>

    <form>
        <button type="submit">저장</button>
    </form>
</body>
    </div>
</template>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
import axios from 'axios'
var count = 1;
export default {
    name: "profile",
    data: function(){
        return {
            user: {
                name: '',
                id: '',
                address: ''
            },
            zip: '',
            addr1: '',
            addr2: '', 
            
            aniname: '',
            selected: {
                kind: '',
                age: '',
                sex: '',
                weight: ''
            },

            checkedAni : '',
            images: '',

            filename: '',
            imageSrc: ''
        }
    },
    methods: {
        openDaumPostcode () {
            const elementWrap = this.$refs.wrap
            // 현재 scroll 위치를 저장해놓는다.
            const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
            new window.daum.Postcode({
                oncomplete: (data) => {
                    let addr = '' // 주소 변수
        
                    // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                    if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                        addr = data.roadAddress
                    } else { // 사용자가 지번 주소를 선택했을 경우(J)
                        addr = data.jibunAddress
                    }
        
                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    // document.getElementById('address').value = addr
                    this.address = addr
        
                    // iframe을 넣은 element를 안보이게 한다.
                    // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                    elementWrap.style.display = 'none'
        
                    // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                    document.body.scrollTop = currentScroll

                    let fullRoadAddr = data.roadAddress;  // 도로명 주소 변수 
                    let extraRoadAddr = '';  // 도로명 조합형 주소 변수 
                    
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외) 
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다. 
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){ 
                        extraRoadAddr += data.bname; 
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다. 
                    if(data.buildingName !== '' && data.apartment === 'Y'){ 
                        extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName); 
                    } 
                    // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다. 
                    if(extraRoadAddr !== ''){ extraRoadAddr = ' (' + extraRoadAddr + ')'; 
                    } 
                    // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다. 
                    if(fullRoadAddr !== ''){ fullRoadAddr += extraRoadAddr; } 
                    
                    // 우편번호와 주소 정보를 해당 필드에 넣는다. 
                    this.zip = data.zonecode; //5자리 새 우편번호 사용
                    this.addr1 = fullRoadAddr; 
                },
                // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
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

        addKeywordForm(){
            
            var addFormDiv = document.getElementById("addedKeyword");
            var str =  '<form style="width: 60%;margin: 60px auto;background: #efefef;padding: 60px 120px 80px 120px;'+
    'text-align: center; -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.1); box-shadow: 2px 2px 3px rgba(0,0,0,0.1);">'+
                '<label>'+
                    '<p class="label-txt" style="font-size:20px; font-weight: bolder">반려동물 정보</p>'+
                    '<br/>'+
                '</label>' +
                '<label>'+
        '<div class="input-group">'+
            '<input type="text" class="form-control" v-model="filename" @dragover.prevent @dragenter.prevent @drop.prevent="onDrop" >'+
            '<div class="input-group-append"> <span class="input-group-text" @click="onClickFile">멍냥이 사진</span></div>'+
            '<input type=file class="file-input" accept="image/*" ref="fileInput" @change="onFileChange"></div>'+
        '<div v-show="imageSrc" class="upload-image"><img :src="imageSrc"></div></label>'+
    '<label><p class="label-txt">이름</p><input type="text" class="input" name="동물이름" v-model="aniname">'+
        '<div class="line-box"><div class="line"></div></div></label>'+
        '<label class="box-radio-input" style="display: inline-block">'+
                '<input type="radio" name="cp_item" value="강아지" v-model="checkedAni" id="dog" checked="checked">'+
                '<span>강아지</span></label>'+
        '<label class="box-radio-input" style="display: inline-block">'+
            '<input type="radio" name="cp_item" value="고양이" v-model="checkedAni" id="cat">'+
            '<span>고양이</span></label> &nbsp; &nbsp; &nbsp;'+
        '중성화 유무 &nbsp;'+
        '<label class="box-radio-input" style="display: inline-block">'+
                '<input type="radio" name="cp_item2" value="yes" v-model="selected.sex" id="yes">'+
                '<span>O</span></label>'+
        '<label class="box-radio-input" style="display: inline-block">'+
            '<input type="radio" name="cp_item2" value="no" v-model="selected.sex" id="no">'+
            '<span>X</span></label>'+
    '<label>'+
        '<p class="label-txt">나이</p>'+
        '<input type="text" class="input" name="나이" v-model="selected.age">'+
        '<div class="line-box">'+
        '<div class="line"></div>'+
        '</div></label><label><p class="label-txt">무게</p><input type="text" class="input" name="무게" v-model="selected.weight">'+
        '<div class="line-box"><div class="line"></div></div> </label><label>'+
        '<p class="label-txt">품종</p><input type="text" class="input" name="품종" v-model="selected.kind"><div class="line-box">'+
        '<div class="line"></div></div> </label></form>'+
        '<input type="button" onclick="delKeywordForm('+count+')" value="삭제"/>';

                var addedDiv = document.createElement("div");
                addedDiv.setAttribute("id","key"+count);
                addedDiv.innerHTML = str;
                addFormDiv.appendChild(addedDiv);
                console.log(count)
                count++;
        },

        delKeywordForm(thisCount){
            var addedFormDiv = document.getElementById("addedKeyword")
                var thisDiv = document.getElementById("key"+thisCount);
                addedFormDiv.removeChild(thisDiv);
                document.addedFormDiv.reset();
                console.log(count)
                count--;

        }

    }
}

</script>
<style scoped>

    h2 {
        font-family: 'Black Han Sans', sans-serif;
        margin: 40px auto;
    }
    body {
    font-family: 'Noto Sans KR', sans-serif;
    color:#3e3d41;
    text-align:center;
    }
    form {
    width: 60%;
    margin: 60px auto;
    background: #efefef;
    padding: 60px 120px 80px 120px;
    text-align: center;
    -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
    box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
    }
    label {
    display: block;
    position: relative;
    margin: 40px 0px;
    }
    .label-txt {
    position: absolute;
    top: -1.6em;
    padding: 10px;
    font-size: .8em;
    letter-spacing: 1px;
    color: rgb(120,120,120);
    transition: ease .3s;
    }
    .input {
    width: 100%;
    padding: 10px;
    background: transparent;
    border: none;
    outline: none;
    }

    .line-box {
    position: relative;
    width: 100%;
    height: 2px;
    background: #BCBCBC;
    }

    .line {
    position: absolute;
    width: 0%;
    height: 2px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #8BC34A;
    transition: ease .6s;
    }

    .input:focus + .line-box .line {
    width: 100%;
    }

    .label-active {
    top: -3em;
    }

    button {
    display: inline-block;
    padding: 12px 24px;
    background: rgb(220,220,220);
    font-weight: bold;
    color: rgb(120,120,120);
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    transition: ease .3s;
    }

    button:hover {
    background: #8BC34A;
    color: #ffffff;
    }

    .box-radio-input input[type="radio"]{
        display:none;
        }

        .box-radio-input input[type="radio"] + span{
        display:inline-block;
        background:none;
        border:1px solid #dfdfdf;  
        padding:0px 10px;
        text-align:center;
        height:35px;
        line-height:33px;
        font-weight:500;
        cursor:pointer;
        }

        .box-radio-input input[type="radio"]:checked + span{
        border:1px solid #23a3a7;
        background:#23a3a7;
        color:#fff;
        }

    .button {
        display: flex;
        justify-content: center;
    }
    label {
        cursor: pointer;
        font-size: 1em;
    }

    #chooseFile2 {
        visibility: hidden;
    }

    .file-input {
    display: none;
  }
  .upload-image {
    padding-top: 1rem;
    width: 200px;
    height: 200px;
  }
  .upload-image img {
      width: 200px;
      height: 200px;
      padding: 20px;
      display: block;
      margin: 0px auto;
  }

</style>