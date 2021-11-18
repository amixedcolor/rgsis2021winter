<template>
  <div>
    <!--<h1>This page is detail.</h1>-->
    <div>
      <table>
        <th>
          KEY
        </th>
        <th>
          VALUE
        </th>
        <tr
          v-for="(value, name) in users[$route.params.id - 1]"
          :key="name">
          <td>
            {{ name }}
          </td>
          <td>
            {{ value }}
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data: function () {
    // 返却するオブジェクト users は本コンポーネントで表示するユーザ情報
    // 本来ならば DB 等で保持するのだが、今回は記事用のサンプルコードということでリストで持たせている
    return {
      users: [],
    }
  },
  mounted: function(){
    axios.get('./data/users.json')
    .then(function(response){
        this.users = response.data.users
        console.log(this.users)
    }.bind(this))
    .catch(function(error){
        console.log(error)
    })
  },
}
</script>

// スタイルは割愛