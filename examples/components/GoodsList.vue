<script>
  export default {
    name: '',
    data() {
      return {
        list: [{id: 1, title: '1111'}, {id: 2, title: '2222'}]
      }
    },
    methods: {
      handleFun(ev, item) {
        console.log(ev, item);
      }
    },
    render(h) {
      return (
        <div class="list">
          {
            this.list.map((r, index) => {
              return <div class="item" key={r.id} onClick={() => {
                this.handleFun(event, r)
              }}>{r.title}</div>
            })
          }
        </div>
      )
    }
  }
</script>
<style lang="scss">

</style>