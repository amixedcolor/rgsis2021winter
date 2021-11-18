<template>
  <div>
    <h1>比較</h1>
    <b-container  class="bv-example-row" fluid="md">
    <draggable v-model="list" element="b-row" :options="{animation:300}">
      <b-col class="d-flex" v-for="user in filteredusers" :key="user.id" style="margin-bottom:10px">
        <table>
        <th>
          VALUE
        </th>
        <tr
          v-for="(value, name) in user"
          :key="name">
          <td>
            {{ value }}
          </td>
        </tr>
      </table>
      </b-col>
    </draggable>
    </b-container>

  </div>
</template>

<script>
import axios from 'axios'
import draggable from "vuedraggable";

export default {
  name: 'Detail',
  components: {
    draggable
  },
  data: function () {
    // 返却するオブジェクト users は本コンポーネントで表示するユーザ情報
    // 本来ならば DB 等で保持するのだが、今回は記事用のサンプルコードということでリストで持たせている
    return {
      keyword: '',
      users: []
    }
  },
  mounted: function(){
    axios.get('../data/users.json')
    .then(function(response){
        this.users = response.data.users
        console.log(this.users)
    }.bind(this))
    .catch(function(error){
        console.log(error)
    })
  },
  computed:{
    filteredusers: function() {
      console.log("now in filterdusers")
      console.log(this.$route.params.targets)
      var tmpusers = [];
      const targets_list = this.$route.params.targets.split("-")
      for(var i in this.users) {
        var user = this.users[i];
        if(targets_list.indexOf(String(user.id)) !== -1) {
          tmpusers.push(user);
        }
      }
      return tmpusers;
    }
  }
}
</script>

// スタイルは割愛