<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
    <button v-show="inputValue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
  </form>  
</template>

<script>
export default {
  // template: '#search-form',//단일파일컴포넌트는 사용안해도됨 바로 위니까
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
</script>