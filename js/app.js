import SearchModel from './models/SearchModel.js'

new Vue({
  el: '#app', //아이디가 app인 DOM에 마운팅됨
  data: {
    query:'', //query는 입력데이터. v-model='query로 연결
    submitted: false,
    searchResult:[]
  },
  methods: {
    onSubmit(e){//돔과 바인딩할 함수를 설정하는 곳.
      this.search()
    },
    onReset(){
      this.resetForm()
    },
    onKeyup(){
      if(!this.query.length) this.onReset()
    },
    search(){
      SearchModel.list().then(data=>{
        this.submitted=true
        this.searchResult = data
      })
    },
    resetForm(){
      this.query='' //여기서 this는 뷰 인스턴스 = 데이터의 쿼리.
      this.submitted = false
      this.searchResult = []
    }
  }
})