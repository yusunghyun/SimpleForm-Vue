export default{
  template: '#search-form',
  props: ['value'],//부모로부터 받은값
  data(){
    return {
      inputValue:this.value //자식이 주는 값 + 부모로도 받음
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