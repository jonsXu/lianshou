import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RoomInfo',
  props:['form'],
  data () {
    return {
      data:{}
    }
  },
  computed: {
      ...mapGetters([
        'nameGetter',
        'ctxGetter'
      ])
  },
  methods:{
    ...mapActions([
        'setName',
        'setCtx' //
    ]),
    show(){
      this.$emit('show',true)
    }
  },
  mounted(){
  },
  watch:{
    form(data){
      this.data = data
    }
  }
}