export default{
  template:'#list',
  props:['data','type'],
  computed:{ //이거 자체가 리턴값이 T/F라서 if=keywordType마냥 박으면 알아서 작동! 이래야 가독성이 좋아진댕!
    keywordType(){
      return this.type === 'keywords'
    },
    historyType(){
      return this.type === 'history'
    }
  },
  methods:{
    onClickList(keyword){
      this.$emit('@click',keyword)//클릭전달후 키워드를 던져줌
    },
    onRemoveList(keyword){
      this.$emit('@remove',keyword)
    }
  }
}