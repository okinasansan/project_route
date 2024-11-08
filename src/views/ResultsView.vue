<template>
  <div>
    <h1>聖地マップ</h1>
    <h2>選択された住所</h2>
    <!-- 住所を1つずつ表示 -->
    <div v-for="(address, index) in deserializedValues" :key="index">
      <p>{{ address }}</p>
    </div>

    <h2>変換された座標</h2>
    <!-- 変換された座標を1つずつ表示 -->
    <div v-for="(coord, index) in coordinates" :key="index">
      <p>緯度: {{ coord.lat }}, 経度: {{ coord.lng }}</p>
    </div>

    ※表示数が足りない場合再読み込みしてください
  </div>

  <v-btn @click="showRouteFromCurrentLocation">
    聖地へのルートを表示！
  </v-btn>

  <div id="map" style="height: 500px; width: 100%;"></div>

</template>


<script>
import { defineComponent } from 'vue';
import { GoogleMap } from 'vue3-google-map';
import axios from 'axios';

// Components
import SearchResults from '../components/SearchResults.vue';

export default defineComponent({
  name: 'ResultsView',

  data() {
    return {
      coordinates: [],  // 座標の配列
      map: null,
      markers: [], // マーカーを保存する配列
      directionsService: null, // DirectionsService
      directionsRenderer: null, // DirectionsRenderer
    };
  },

  computed: {
    // クエリパラメータを受け取って配列に変換
    deserializedValues() {
      return JSON.parse(this.$route.query.data || '[]');
    }
  },

  created() {
    console.log('受け取った配列:', this.deserializedValues);
    this.geocodeAddresses(); // 座標に変換を実行
  },

  methods: {
    // Geocoding API を使って住所を座標に変換する関数
    async geocodeAddress(address) {
      const apiKey = import.meta.env.VITE_APP_GOOGLEMAP_API;
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}&language=ja`;

      try {
        const response = await axios.get(geocodeUrl);
        console.log(response.data); // レスポンス全体をコンソールに表示
        const result = response.data.results[0];

        if (result) {
          const lat = result.geometry.location.lat;
          const lng = result.geometry.location.lng;
          console.log(`住所: ${address} の座標: 緯度: ${lat}, 経度: ${lng}`);
          return { lat, lng };
        } else {
          console.error(`住所: ${address} の座標が見つかりません`);
          return null;
        }
      } catch (error) {
        console.error(`Geocoding API エラー: ${error}`);
        return null;
      }
    },

    // すべての住所を座標に変換する処理
    async geocodeAddresses() {
      this.coordinates = []; // 座標を格納する配列を初期化

      // deserializedValues から住所ごとのPromiseを作成し、並列で処理
      const promises = this.deserializedValues.map(address => this.geocodeAddress(address));

      try {
        // すべての住所のPromiseが完了するまで待つ
        const results = await Promise.all(promises);

        // null でない結果のみを coordinates 配列に追加
        this.coordinates = results.filter(result => result !== null);
        
        console.log("すべての住所の座標が取得されました:", this.coordinates);
      } catch (error) {
        console.error("Promise.all エラー:", error);
      }

      try {
        this.coordinates = await Promise.all(promises);
        this.initMap();
      } catch (error) {
        console.error(error);
      }
    },

    // マップを生成
    initMap() {
      if (this.coordinates.length === 0) {
        console.log('filed');
        return; // 座標がない場合は何もしない
      };
      // 最初の座標を取得してマップの中心に設定
      const centerCoords = this.coordinates[0];

      // マップの作成
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: centerCoords,
        zoom: 17,
      });

      const bounds = new google.maps.LatLngBounds();

      // マーカーをすべての座標に配置
      this.coordinates.forEach((coord) => {
        const marker = new google.maps.Marker({
          position: coord,
          map: this.map,
        });
        this.markers.push(marker);
        bounds.extend(coord);
      });

      if(this.coordinates.length > 1){
        this.map.fitBounds(bounds);
      }

      console.log('マップが初期化され、マーカーが配置されました。');
    },

    // 現在のマーカーをすべて削除する
    clearMarkers() {
      for (const marker of this.markers) {
        marker.setMap(null); // マーカーをマップから削除
      }
      this.markers = []; // 配列をクリア
    },

    showRouteFromCurrentLocation() {
      // 現在地を取得
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          
          console.log("現在地を取得しました:", currentLocation);

          // 現在地を出発地点にしてルートを描画
          this.plotRoute(currentLocation);
        },
        (error) => {
          console.error("現在地の取得に失敗しました:", error);
        }
      );
    },

    // マーカーをプロットし、ルートを表示する
    plotRoute(currentLocation) {
      if (this.coordinates.length < 1) {
        console.error("少なくとも1つの座標が必要です。");
        return;
      }

      // 追加したマーカーを削除
      this.clearMarkers();

      // 出発地点: 現在地
      const origin = currentLocation;

      // 終点: 目的地（最後の座標）
      const destination = this.coordinates[this.coordinates.length - 1];

      // 経由地: 最初の座標を除いた中間地点を経由地に設定
      const waypoints = this.coordinates.slice(0, -1).map(coordinate => ({
        location: new google.maps.LatLng(coordinate.lat, coordinate.lng),
        stopover: true
      }));

      // ルート計算のリクエスト
      const request = {
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING, // 自動車でのルート
        optimizeWaypoints: true, // 経由地の最適化
      };

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      directionsRenderer.setMap(this.map); // マップにルートを描画

      // DirectionsService によるルート計算
      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
          console.log("ルートが描画されました。", result);
        } else {
          console.error("ルート計算に失敗しました: " + status);
        }
      });
    },
  },

  components: {
    SearchResults,
    GoogleMap,
  },
});

</script>
