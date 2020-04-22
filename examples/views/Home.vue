<template>
  <div class="home">
    <GoodsList />
    <one-button @click.native="showDialog">按钮</one-button>
    <one-dialog :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <one-button @click="switchDialog">取消</one-button>
        <one-button @click="switchDialog" type="primary">确定</one-button>
      </template>
    </one-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import GoodsList from '@/components/GoodsList.vue'

export default {
  name: 'Home',
  components: {
    GoodsList,
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showDialog() {
      this.visible = true;
    },
    switchDialog() {
      this.visible = false;
      console.log('111')
    }
  }
}
</script>
