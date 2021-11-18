<template>
  <div>
    <h1>インターン紹介</h1>
    <!--<h1>This page is overview.</h1>
    <div>
      <table>
        <th>
          foo
        </th>
        <th>
          bar
        </th>
        <tr
          v-for="(value, name) in users"
          :key="name">
          <td style="display: none;">
            {{ name }}
          </td>
          <td v-for="(v, name) in value" :key="name">
            {{ v }}
          </td>
          <button
            type="is-info"
            @click="showMoreInformation">
            詳細を見る
          </button>
        </tr>
      </table>
    </div>-->
    <b-container  class="bv-example-row" fluid="md">
    <div class="row">
        <div class="col-8"></div>
        <div class="col-4" align="right">
            <input type="text" class="form-control" id="search_input" v-model="keyword" placeholder="名前で検索">
        </div>
    </div>
    <br>
      <b-row>
      <b-col class="d-flex" v-for="user in filteredusers" :key="user.id" md=3 style="margin-bottom:10px">
        <b-card class="flex-fill">
          <b-card-body style="padding: 0 0 0 0;">
            <p style="visibility:hidden; height:0px;">{{user.id}}</p>
            <img :src="'./img/'+user.facephoto" class="card-img-top" alt="画像" style="margin-bottom:10px;">
          <b-card-title>{{user.name}}</b-card-title>
          <b-card-text style="white-space: pre-line; height:50px">
          {{user.samune}}
          </b-card-text>
          <button
            type="is-info"
            @click="showMoreInformation" class="btn btn-primary">
            詳細を見る
          </button>
          </b-card-body>
        </b-card>
      </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
import axios from 'axios'

export default {
  name: 'Detail',
  data: function () {
    // 返却するオブジェクト users は本コンポーネントで表示するユーザ情報
    // 本来ならば DB 等で保持するのだが、今回は記事用のサンプルコードということでリストで持たせている
    return {
      keyword: '',
      users: []
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
  methods: {
    showMoreInformation: function(event) {
      console.log(event)
      const id = Number(event.path[1].childNodes[2].textContent.trim())
      this.$router.push({
        name: 'detail',
        params: { id: id }
      })
    }
  },
  computed:{
    filteredusers: function() {
      var tmpusers = [];
      for(var i in this.users) {
        var user = this.users[i];
        if(user.name.indexOf(this.keyword) !== -1) {
          tmpusers.push(user);
        }
      }
      return tmpusers;
    }
  }
}
</script>

// スタイルは割愛