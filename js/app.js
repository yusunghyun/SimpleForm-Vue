new Vue({
  el: '#app', //아이디가 app인 DOM에 마운팅됨
  data: {
    query:'', //query는 입력데이터. v-model='query로 연결
  },
  methods: {
    onSubmit(e){//돔과 바인딩할 함수를 설정하는 곳.
      
    },
    onReset(){
      this.query='' //여기서 this는 뷰 인스턴스 = 데이터의 쿼리.
    },
    onKeyup(){
      if(!this.query.length) this.onReset()
    }
  }
})