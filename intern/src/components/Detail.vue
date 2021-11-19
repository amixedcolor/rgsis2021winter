<template>
  <div class="w-100">
    <h1 class="py-5">{{ users[$route.params.id - 1].name }}はこんな人</h1>
    <div class="w-75 m-auto">
      <!-- 基本情報コンテンツ -->
      <div class="d-flex flex-row py-5" style="height: 500px; gap: 30px">
        <div class="w-50">
          <img
            :src="'./img/' + users[$route.params.id - 1].facephoto"
            class="h-100"
            style=""
            alt="画像"
          />
        </div>
        <div class="d-flex flex-column justify-content-center w-50 h4">
          <p style="text-align: left">
            名前：{{ users[$route.params.id - 1].name }}
          </p>
          <br />
          <p style="text-align: left">
            生年月日：{{ users[$route.params.id - 1].bir }}
          </p>
          <br />
          <p style="text-align: left">
            出身大学：{{ users[$route.params.id - 1].uni }}
          </p>
        </div>
      </div>
      <!-- 基本情報コンテンツ -->

      <!-- 趣味コンテンツ -->
      <div class="d-flex flex-row py-5" style="height: 500px; gap: 30px">
        <div class="w-50">
          <p class="h5" style="text-align: left; line-height: 1.4">
            {{ users[$route.params.id - 1].introduction }}
          </p>
          <br />
        </div>
        <div class="w-50">
          <img
            :src="'./img/' + users[$route.params.id - 1].photo1"
            class="h-100"
            style=""
            alt="画像"
          />
        </div>
      </div>
      <!-- 趣味コンテンツ -->

      <!--おもしろエピソードコンテンツ -->
      <div class="py-5">
        <p class="h3 pb-3">おもしろエピソード</p>
        <p class="h5">
          {{ users[$route.params.id - 1].txt1 }}
        </p>
      </div>
      <!--おもしろエピソードコンテンツ -->

      <!-- 一問一答コンテンツ -->
      <div class="py-5">
        <p class="h3 pb-3">一問一答</p>
        <p class="h5">{{ users[$route.params.id - 1].txt2 }}</p>
      </div>
      <!-- 一問一答コンテンツ -->
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