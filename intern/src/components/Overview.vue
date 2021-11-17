<template>
  <div>
    <h1>This page is overview.</h1>
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
    </div>
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

export default {
  name: 'Detail',
  data: function () {
    // 返却するオブジェクト users は本コンポーネントで表示するユーザ情報
    // 本来ならば DB 等で保持するのだが、今回は記事用のサンプルコードということでリストで持たせている
    return {
      users: [
        {
          name: 'hogehoge',
          live: 'Japan Tokyo'
        },
        {
          name: 'barbar',
          live: 'Japan Kanagawa'
        },
        {
          name: 'piypiyo',
          live: 'Japan Kanagawa'
        },
        {
          name: 'fugafuga',
          live: 'Japan Chiba'
        },
        {
          name: 'varvar',
          live: 'Japan Saitama'
        }
      ],
    }
  },
  methods: {
    showMoreInformation: function(event) {
      const id = Number(event.path[1].childNodes[0].innerText.trim())
      this.$router.push({
        name: 'detail',
        params: { id: id + 1 }
      })
    }
  }
}
</script>

// スタイルは割愛