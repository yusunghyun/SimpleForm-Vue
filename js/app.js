import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'

new Vue({
  el: '#app', //아이디가 app인 DOM에 마운팅됨
  data: {
    query:'', //query는 입력데이터. v-model='query로 연결
    submitted: false,
    tabs:['추천 검색어','최근 검색어'],
    selectedTab:'',
    keywords:[],
    searchResult:[]
  },
  created(){//라이프사이클 : 뷰인스턴스가 생성될때 호출되는 함수
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()//뷰인스텐스가 처음으로 실행될때 가져오도록
  },
  methods: {
    onSubmit(e){//돔과 바인딩할 함수를 설정하는 곳.
      this.search()
    },
    onKeyup(e){
      if(!this.query.length) this.onReset()
    },
    onReset(e){
      this.resetForm()
    },
    onClickTab(tab){
      this.selectedTab = tab
    },
    onClickKeyword(keyword){
      this.query = keyword
      this.search()
    },
    fetchKeyword(){
      KeywordModel.list().then(data=>{
        this.keywords = data
      })
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
    },
  }
})