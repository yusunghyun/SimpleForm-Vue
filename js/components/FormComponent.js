export default{
  template: '#search-form',
  props: ['value'],//부모로부터 받은값
  data(){
    return { //데이터만 리턴박나?
      inputValue:this.value //자식이 주는 값 + 부모로도 받음
    }
  },
  watch:{//뷰모델을 감시하다가 변경되면 행동하는 함수
    value(newVal,oldVal){//value를 감시합니다!
      this.inputValue = newVal //조작하자 inputValue가 비어있으니 넣어줌!
    }
  },
  methods:{
    onSubmit(){
      this.$emit('@submit',this.inputValue.trim())
    },
    onKeyup(){
      if(!this.inputValue.length) this.onReset()
    },
    onReset(){
      this.inputValue=''
      this.$emit('@reset')
    }
  }
}