<template>
    <b-container>
    <div class="row my-5"></div>
    <div class="row my-5"></div>

    <!-- Page Wrapper -->
    <div id="wrapper">
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <!-- Topbar -->
                <b-nav class="navbar navbar-expand round topbar mb-5 static-top shadow" style="background-color:#C5D9D0;">
                    <b-container>
                        <h4><b-avatar size="lg" class="mr-2"></b-avatar>문서연님의 마이페이지</h4>
                        <span><v-btn color="#F2F2F2;" href="/About">프로필 수정하기</v-btn></span>
                    </b-container>
                </b-nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <!-- Page Heading -->
                

                    <!-- Content Row -->
                    <div class="row">
                        <h3 class="my-5">예약현황</h3>
                        
                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" style="border-color:#535773;">
                                <v-card-title>
                                    <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                                    <strong class="primary">&nbsp;&nbsp;야옹이</strong>
                                </v-card-title>   
                                <v-card-text>
                                    <v-btn class="my-2 fw-bold" rounded color="#3A668C" dark small>D-2</v-btn>&nbsp;&nbsp;10-11 15시 땡땡병원
                                </v-card-text>
                            </b-card>
                            <v-card-text style="height: 100px; position: relative">
                                <v-fab-transition>
                                <v-btn
                                    v-show="!hidden"
                                    dark
                                    absolute
                                    top
                                    right
                                    fab
                                >
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                </v-fab-transition>
                            </v-card-text>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" style="border-color:#535773;">
                                <v-card-title>
                                    <b-avatar src="https://image.news1.kr/system/hp/2019/1/20/3477555/dims/optimize/300/300" size="3rem"></b-avatar>
                                    <strong class="primary">&nbsp;&nbsp;멍멍이</strong>
                                </v-card-title>   
                                <v-card-text>
                                    <div><v-btn class="my-2 fw-bold" rounded color="#3A668C" dark small>D-2</v-btn>&nbsp;&nbsp;10-25 12시 미용실</div>
                                    <div><v-btn class="my-2 fw-bold" rounded color="#3A668C" dark small>D-5</v-btn>&nbsp;&nbsp;11-30 10시 동물병원</div>
                                </v-card-text>
                            </b-card>
                            <v-card-text style="height: 100px; position: relative">
                                <v-fab-transition>
                                <v-btn
                                    v-show="!hidden"
                                    dark
                                    absolute
                                    top
                                    right
                                    fab
                                >
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                </v-fab-transition>
                            </v-card-text>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" style="border-color:#535773;">
                                <v-card-title>
                                    <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
                                    <strong class="primary">&nbsp;&nbsp;고양이</strong>
                                </v-card-title>   
                                <v-card-text>
                                    예약 내역이 없습니다.
                                </v-card-text>
                            </b-card>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <b-card class="border-left-primary shadow h-100 py-2" style="border-color:#535773;">
                                <v-card-title>
                                    동물 정보가 없습니다.
                                </v-card-title>
                            </b-card>
                        </div>
                    

                    <!-- Content Row -->
                    <div class="row">
                        <h3 class="my-5">일기쓰기</h3>
                        <!-- Content Column -->
                        <div class="col-lg-6 mb-4">

                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header" style="background-color:#8596A6;">
                                    <div class="row my-2 mx-3">
                                        <h5 class="my-1">{{ date }}</h5>
                                    </div>                      
                                </div>
                                <div class="container mt-3">
                                    <div>
                                        <img src="https://prodigits.co.uk/thumbs/wallpapers/p2ls/animals/35/e3f7a47e12467080.jpg" class="card-img-top img-fluid" alt="...">
                                    </div>
                                </div>
                                
                                <div class="container card-body">
                                    <table border="1" class="table-bordered" style="text-align:center; border: 1px solid #444444; width:100%">                                            
                                        
                                        <tr :key="i" v-for="i in 4">
                                            
                                                <span :key="j" v-for="j in 10">
                                                    <td style="width:30px">{{ diary[(i - 1) * 10 + (j - 1)] }}</td>                                                  
                                                </span>
                                            
                                        </tr>
                                    </table>

                                    <div>
                                        <v-btn class="mx-2 my-3 justify-end" size="sm" variant="warning" href="#" color="#2A558C" style="color:white;">자세히 보기</v-btn>
                                    </div>
                                </div>                                
                            </div>
                        </div>

                        <div class="col-lg-6 mb-4">

                            <!-- Illustrations -->
                            <div class="card shadow mb-4">
                                <div class="card-header" style="background-color:#8596A6;">
                                    <h6 class="fas-bold my-1"><strong>수정하기</strong></h6>
                                </div>
                                <div class="card-body">                                    
                                    
                                    <div class="mb-3">
                                        <label class="my-2" for="example-datepicker">날짜 선택</label>
                                        <b-form-datepicker
                                        id="datepicker-buttons"
                                        v-model="date"
                                        today-button
                                        reset-button
                                        close-button
                                        locale="ko"
                                        ></b-form-datepicker>
                                    </div>
                                    
                                    <b-form-group class="mb-3">
                                        <label class="my-2" for="example-datepicker">이미지 선택</label>                                     
                                        <b-form-file id="file-image"  v-model="image"></b-form-file>                                        
                                    </b-form-group>

                                    <div class="mb-3">
                                        <label class="my-2" for="example-datepicker">텍스트 입력</label>
                                        <b-form-textarea
                                        id="textarea"
                                        v-model="diary"
                                        placeholder="Enter something..."
                                        rows="3"
                                        max-rows="6"
                                        ></b-form-textarea>
                                        
                                        <pre class="mt-3 mb-0">{{ diary }}</pre>
                                    </div>

                                    <b-row>
                                        <b-col class="col-9"></b-col>
                                        <b-col class="col-3">
                                            <v-btn class="mx-2 my-3 float-right" size="sm" variant="warning" color="#2A558C" style="color:white;" @click="formSubmit()">저장</v-btn>
                                        </b-col>
                                    </b-row>
                                    
                                </div>
                                </div>
                            </div>                            
                        </div>
                    </div>

                    <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0"> 
                            {{ date }}
                            {{ image.name }}
                            {{ diary }}
                        </pre>
                    </b-card>
                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
            </div>
        </div>
    </div>

    </b-container>
</template>

<script>
export default {
    data() {
    return {
        date: '',
        image: '',
        diary: "오늘 멍멍이를 데리고 병원에 갔다 왔다. 날씨도 맑아서 산책도 다녀왔다.",
    }
    },
    methods: {
        formatNames(files) {
            alert(files);
            return files.length === 1 ? files[0].name : `${files.length} files selected`
        },
        formSubmit () {
            this.axios.post('http://localhost:8080/Mypage', {
            date: this.date,
            image: this.image.name,
            diary: this.diary
            })
            
            .then((response) => {
                this.output = response.data
                this.image = ''
                this.diary = ''
            })
            .catch((error) => {
                this.output = error
            })
        }
    }
}

</script>
<style>
td {width:30px}
</style>

<style scoped>
div {
font-family: 'Gowun Dodum', sans-serif;
}
</style>