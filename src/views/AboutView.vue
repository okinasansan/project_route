<template>
  <v-app>
    <div class="about">
      <h1>聖地巡礼ルートガイドについて</h1>
    </div><br>

    <v-card 
    class="mx-auto"
    max-width="800"
    >
      <p>
        聖地巡礼ルートガイドでは、現在位置から複数の経由地を経た
        目的地までのルートを検索することができます！
      </p><br>
      <p>
        検索窓（作品名で検索！）に作品名（例：でんだい）
        を入力すると作品名に応じた聖地（スポット）が表示されます。
      </p><br>

      <v-img
            height="250"
            src="/about_1.png"
      ></v-img><br>

      <p>
      行きたい聖地の名前の下にある「ここへ行く」にチェックを付け、
      （このとき複数地点を選択できます！）
      ページの一番下にある
      <v-btn>
        巡礼開始！
      </v-btn>
      ボタンをクリックするとマップが表示されます！
      </p><br>

      <v-img
            height="250"
            src="/about_2.png"
      ></v-img><br>

      <p>
        マップのページでは、選択した地点のマーカーが配置されたマップが
        表示されます。
        <v-btn>
          聖地へのルートを表示！
        </v-btn>
        ボタンを押すことで、現在地から経由地を通った聖地までのルートを表示します。
        このとき位置情報へのアクセス許可を求められますので許可してください。*1
      </p><br>

      <v-img
            height="250"
            src="/about_3.png"
      ></v-img><br>
      <v-img
            height="250"
            src="/about_4.png"
      ></v-img><br>

      <p>
        *1 取得された位置情報等の個人情報はルート表示のみに使用されます。
      </p>


    </v-card>
  </v-app>
  

   
   
</template>

<script>

</script>

