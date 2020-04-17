<template>
  <div class="fullsize">
    <yandex-map
      :coords="center"
      zoom="3"
      :options="{
            minZoom: 3
      }"
      style="width: 100vw; height: 100vh;"
      map-type="map"
      @map-was-initialized="map = $event"
    />
  </div>
</template>

<script>
  import Modal from "../components/Modal";
  export default {
    name: 'embed',
    components: {Modal},
    data() {
      return {
        placemarkData: [],
        center: [49.358425876699265,87.77077411137508],
        ymaps: null,
        map: null,
        isClustersSet: false
      }
    },
    async created() {
      this.fetchData()
    },
    watch: {
      placemarkData() {
        if (!this.map) {
          return
        }
        this.setClusters()
      },
      async map() {
        if (this.placemarkData.length > 0) {
          this.setClusters()
        }
      }
    },
    methods: {
      setClusters() {
        if (this.isClustersSet) {
          return
        }
        const clusterer = new window.ymaps.Clusterer({
          /**
           * Через кластеризатор можно указать только стили кластеров,
           * стили для меток нужно назначать каждой метке отдельно.
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
           */
          preset: 'islands#invertedBlueClusterIcons',
          /**
           * Ставим true, если хотим кластеризовать только точки с одинаковыми координатами.
           */
          groupByCoordinates: false,
          /**
           * Опции кластеров указываем в кластеризаторе с префиксом "cluster".
           * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ClusterPlacemark.xml
           */
          clusterDisableClickZoom: false,
          clusterHideIconOnBalloonOpen: false,
          geoObjectHideIconOnBalloonOpen: false
        })
        /**
         * Функция возвращает объект, содержащий данные метки.
         * Поле данных clusterCaption будет отображено в списке геообъектов в балуне кластера.
         * Поле balloonContentBody - источник данных для контента балуна.
         * Оба поля поддерживают HTML-разметку.
         * Список полей данных, которые используют стандартные макеты содержимого иконки метки
         * и балуна геообъектов, можно посмотреть в документации.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
         */
        const getPointData = function (point) {
          return {
            balloonContentHeader: `<strong>${point.name}</strong>`,
            balloonContentBody: `
              <div class="info">
                <div class="label">Адрес</div>
                <div class="text">${point.address}</div>
              </div>
              <div class="info">
                <div class="label">Список проблем</div>
                <div class="text">${point.problems.join(', ')}</div>
              </div>
              <div class="info">
                <div class="label">Количество рабочих мест под угрозой сокращения</div>
                <div class="text">${point.jobs_count}</div>
              </div>
              <div class="info">
                <div class="label">Что случилось / Что может помочь</div>
                <div class="text">${point.description.length > 0 ? point.description : ' – '}</div>
              </div>
            `,
            balloonContentFooter: '<strong></strong>',
            clusterCaption: `<strong>${point.name}</strong>`
          };
        }
        const getPointOptions = function () {
          return {
            preset: 'islands#blueIcon'
          };
        }
        const geoObjects = []
        let points = [
          [55.831903,37.411961], [55.763338,37.565466], [55.763338,37.565466], [55.744522,37.616378], [55.780898,37.642889], [55.793559,37.435983], [55.800584,37.675638], [55.716733,37.589988], [55.775724,37.560840], [55.822144,37.433781], [55.874170,37.669838], [55.716770,37.482338], [55.780850,37.750210], [55.810906,37.654142], [55.865386,37.713329], [55.847121,37.525797], [55.778655,37.710743], [55.623415,37.717934], [55.863193,37.737000], [55.866770,37.760113], [55.698261,37.730838], [55.633800,37.564769], [55.639996,37.539400], [55.690230,37.405853], [55.775970,37.512900], [55.775777,37.442180], [55.811814,37.440448], [55.751841,37.404853], [55.627303,37.728976], [55.816515,37.597163], [55.664352,37.689397], [55.679195,37.600961], [55.673873,37.658425], [55.681006,37.605126], [55.876327,37.431744], [55.843363,37.778445], [55.875445,37.549348], [55.662903,37.702087], [55.746099,37.434113], [55.838660,37.712326], [55.774838,37.415725], [55.871539,37.630223], [55.657037,37.571271], [55.691046,37.711026], [55.803972,37.659610], [55.616448,37.452759], [55.781329,37.442781], [55.844708,37.748870], [55.723123,37.406067], [55.858585,37.484980]
        ]
        for(let place of this.placemarkData) {
          geoObjects.push(new window.ymaps.Placemark(place.coords, getPointData(place), getPointOptions()))
        }
        /**
         * Можно менять опции кластеризатора после создания.
         */
        clusterer.options.set({
          gridSize: 80,
          clusterDisableClickZoom: true
        });

        /**
         * В кластеризатор можно добавить javascript-массив меток (не геоколлекцию) или одну метку.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#add
         */
        clusterer.add(geoObjects);
        this.map.geoObjects.add(clusterer);

        /**
         * Спозиционируем карту так, чтобы на ней были видны все объекты.
         */

        this.isClustersSet = true
      },
      async fetchData() {
        let data = await fetch('/list')
        let placemarkData = []
        if (data.ok) {
          placemarkData = await data.json();
        }
        this.placemarkData = placemarkData
      }
    }
  }
</script>

<style lang="sass">
  .fullsize
    width: 100vw
    height: 100vh
  .info
    &:not(:last-child)
      margin-bottom: 10px
    .label
      font-weight: bold
</style>
