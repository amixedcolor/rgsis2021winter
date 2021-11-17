<template>
  <div>
    <h1>This page is detail.</h1>
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
export default {
  name: 'Detail',
  data: function () {
    // 返却するオブジェクト users は本コンポーネントで表示するユーザ情報
    // 本来ならば DB 等で保持するのだが、今回は記事用のサンプルコードということでリストで持たせている
    return {
      users: [
        {
          name: 'hogehoge',
          live: 'Japan Tokyo',
          phone: 'NNN-XXXX-HHHH',
          gender: 'male',
          mail: 'hogehoge@mail.com'
        },
        {
          name: 'barbar',
          live: 'Japan Kanagawa',
          phone: 'NNN-XXXX-BBBB',
          gender: 'male',
          mail: 'barbar@mail.com'
        },
        {
          name: 'piypiyo',
          live: 'Japan Kanagawa',
          phone: 'NNN-XXXX-PPPP',
          gender: 'female',
          mail: 'piypiyo@mail.com'
        },
        {
          name: 'fugafuga',
          live: 'Japan Chiba',
          phone: 'NNN-XXXX-FFFF',
          gender: 'male',
          mail: 'fugafuga@mail.com'
        },
        {
          name: 'varvar',
          live: 'Japan Saitama',
          phone: 'NNN-XXXX-VVVV',
          gender: 'female',
          mail: 'varvar@mail.com'
        }
      ],
    }
  }
}
</script>

// スタイルは割愛