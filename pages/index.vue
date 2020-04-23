<template>
  <div class="container">
    <div class="page">
      <section class="card card-grey jumbotron">
        <div class="card-info">
          <h1>Бизнес терпит бедствие</h1>
          <div class="card-info__text">
            Мы просим государство помочь предпринимателям, несущим убытки. Если этого не сделать прямо сейчас, после окончания карантина <strong>Россия может остаться вообще без бизнеса.</strong>
          </div>
        </div>
        <img class="card-image" src="~assets/images/head-img.png"/>
      </section>
      <div class="card stats-wrapper">
        <div class="stat">
          <div class="stat__count">
            {{ businessCountAnimated }}
          </div>
          <div class="stat__name">
            организаций<br/>
            терпит бедствие
          </div>
        </div>
        <div class="stat">
          <div class="stat__count">
            {{ jobsCountAnimated }}
          </div>
          <div class="stat__name">
            человек<br/>
            под угрозой увольнения
          </div>
        </div>
      </div>
      <section class="card jumbotron">
        <div class="card-info" style="max-width: 100%">
          <h1>Эта карта — сигнал тревоги</h1>
          <div class="card-info__text">
            Мы призываем предпринимателей, которые терпят крах из-за карантина, размещать на ней метки с обозначением своего бизнеса. С помощью этой карты мы хотим показать масштаб бедствия и обратить внимание властей на проблему гибели малого, среднего, да и крупного бизнеса. Если вам нечем платить зарплату сотрудникам, нечем платить за аренду и по кредитным обязательствам, если вы стоите на грани банкротства — <strong>не молчите, расскажите о своей ситуации</strong>. Если ваш бизнес уже погиб из-за карантина — заявите об этом.
          </div>
        </div>
      </section>

      <div class="map-container">
        <div class="map-title">Кликните на карту, чтобы отметить свой бизнес</div>
        <yandex-map
          :coords="center"
          zoom="3"
          :options="{
            minZoom: 3
          }"
          class="business-map"
          map-type="map"
          @map-was-initialized="map = $event"
        />
        <div class="map-tip wrap"><strong>Расскажите об этой инициативе своим знакомым предпринимателям.</strong> Чтобы наши голоса услышали, их должно быть много! </div>
      </div>
      <section class="card jumbotron petition">
        <div class="card-info only-desktop">
          <h1>Петиция в поддержку бизнеса</h1>
        </div>
        <img class="card-image" src="~assets/images/petition.png"/>
      </section>
      <section class="card card-grey text">
        <div class="card-info only-mobile">
          <h1>Петиция в поддержку бизнеса</h1>
        </div>
        <p><strong>Мы, представители малого, среднего и крупного бизнеса России, сейчас находимся в тяжёлом положении.</strong> Карантин остановил нашу работу, но обязательств меньше не стало — нам нужно платить зарплату, кредиты, налоги, аренду. При этом бизнесу запретили банкротиться, сокращать штат и отправлять людей в неоплачиваемые отпуска. Но те меры поддержки, которые предлагает правительство нашей страны, недостаточны для выживания. </p>
        <p><strong>На протяжении многих лет мы создавали для страны рабочие места, платили налоги, развивали сервис и технологии, занимались благотворительностью.</strong> Мы делали это для того, чтобы заработать, но тем самым мы делали жизнь людей комфортной. Мы строили, чинили, шили, фотографировали, возили товары и развлекали. Если мы не выживем, то вместе с нами будет разрушен привычный образ жизни целой страны. На его восстановление уйдут месяцы, а может быть и годы.  </p>
        <p><strong>Мы сами строили свой бизнес и ни о чём не просили государство. Но сейчас наступил момент, когда нам нужна помощь.</strong> Кризис из-за коронавируса — это не следствие нашей плохой работы. Это форс-мажор мирового масштаба. Спрогнозировать эти обстоятельства было невозможно.</p>
        <p>В Фонде национального благосостояния скопилось практически 13 триллионов рублей — деньги, которые наше государство откладывало «на чёрный день». <strong>Мы просим открыть «кубышку» и обеспечить реальные меры поддержки бизнеса. Это позволит нам выжить в этот кризис.</strong> Расходы государства окупятся — мы сохраним рабочие места, а по окончанию кризиса вернёмся к полноценной работе и сможем снова наполнять бюджет страны. </p>
        <p>Первым шагом должно стать обнуление налогов для малого и среднего бизнеса — одной только отсрочки недостаточно. После выхода из карантина у предпринимателей просто <i>не будет</i> средств на выплаты в бюджет и социальные фонды. Эти расходы нужно компенсировать из ФНБ. Вторым шагом должны стать масштабные прямые выплаты работникам фирм, находящихся в простое, а также потерявшим доход ИП и самозанятым. Это позволит спасти бизнес и российскую экономику от глубокого падения.</p>
        <p><strong>Мы убеждены, что построить сильную и процветающую Россию можно только обладая мощной и устойчивой экономикой.</strong></p>
        <p><strong>Уже больше 270.000 человек с нами.</strong></p>
        <div style="text-align: center"><a target="_blank" style="text-decoration: none;" href="https://www.change.org/obnulenienalogov"><button class="sign-button" >Подписать на Change.org <img style="margin-left: 5px;" src="~assets/images/hand.png"/></button></a></div>
      </section>
      <section class="card jumbotron supporting">
        <div class="card-info" style="display: flex; align-items: center;">
          <h1>Нас поддержали</h1>
          <img class="only-desktop" style="width: 76px; margin-left: 40px" src="~assets/images/megaphone.png"/>
        </div>
        <img class="card-image only-mobile" style="max-width: 150px" src="~assets/images/megaphone.png"/>
      </section>
      <section class="quotes">
        <div class="quote">
          <img class="quote__avatar" src="~assets/images/ava1.png" />
          <div class="quote__card">
            <div class="quote__name">Дмитрий Алексеев</div>
            <div class="quote__position">Гендиректор и совладелец сети магазинов DNS</div>
            <div class="quote__text">Возмущает не только желание повесить все издержки от «недокарантина» на работодателя, но и то, что государство не снимает обязанность по уплате мзды себе. Непонятно где сейчас предприниматели должны найти деньги не только на выплату заработных плат, но и на выплаты во все социальные фонды. </div>
          </div>
        </div>
        <div class="quote">
          <img class="quote__avatar" src="~assets/images/ava2.png"  />
          <div class="quote__card">
            <div class="quote__name">Ефим Колодкин</div>
            <div class="quote__position">Создатель сервиса «Bash Today»</div>
            <div class="quote__text">Без срочного введения новых мер поддержки бизнес просто не выживет. Тысячи собственников потеряют доход и окажутся в долгах, а миллионы людей потеряют рабочие места. Бюджеты регионов и районов лишатся весомой доли доходов. Государство должно создать условия для сохранения рабочих мест. Пора государству брать на себя ответственность за бизнес. Пора принимать решительные меры.</div>
          </div>
        </div>
      </section>
      <section class="card jumbotron contacts" style="padding-bottom: 0">
        <div class="card-info" style="width: 100%">
          <h1>Контакты</h1>
        </div>
      </section>
      <div class="contact-card">
        <div class="contact__avatar">
          <img src="~assets/images/author.png" />
          <div class="contact__author only-mobile">
            <div class="contact__name">Данил Махницкий</div>
            <div class="contact__position">Координатор проекта</div>
          </div>
        </div>
        <div class="contact__info">
            <div class="contact__author only-desktop">
              <div class="contact__name">Данил Махницкий</div>
              <div class="contact__position">Координатор проекта</div>
            </div>
            <div class="contact__text">
              Бывший сотрудник Проектного офиса Минфина России, аспирант РАНХиГС и автор петиции об обнулении налогов для малого и среднего бизнеса
            </div>
        </div>
        <div class="contact__list">
          <a style="display: block;" href="mailto:info@biz-alert.ru">info@biz-alert.ru</a>
          <a target="_blank" href="https://vk.com/d.makhn">Вконтакте</a>
          <a target="_blank" href="https://www.facebook.com/d.makhn">Фейсбук</a>
          <a target="_blank" href="https://tlgg.ru/d_makhn">Телеграм</a>
        </div>
      </div>
      <section class="card jumbotron donate">
        <div class="card-info" style="max-width: 100%">
          <h1>Поддержать проект</h1>
          <div class="card-info__text">
            Это некоммерческий проект. Мы собираем средства на оплату хостинга, продвижение петиции в социальных сетях, планируем изготовление визуальных материалов и видеороликов. Поддержать проект вы можете по следующим реквизитам:
          </div>
        </div>
      </section>
      <div class="card card-grey donate-cards" style="max-width: 858px;">
        <img src="~assets/images/card.png" />
        <div class="card-num">
          <div class="card-num__name">Сбербанк:</div>
          <div class="card_numm__num">2202 2002 5580 1449</div>
        </div>
        <div class="card-num">
          <div class="card-num__name">ВТБ:</div>
          <div class="card_numm__num">4893 4702 7697 0339</div>
        </div>
      </div>
      <section class="card jumbotron media">
        <div class="card-info" style="width: 100%; display: flex; align-items: center;">
          <h1>СМИ о проекте</h1>
          <img class="only-desktop" style="width: 76px; margin-left: 40px" src="~assets/images/tv.png"/>
        </div>
        <img class="card-image only-mobile" style="max-width: 150px" src="~assets/images/tv.png"/>
      </section>
      <section class="media-cards">
        <a href="https://meduza.io/feature/2020/04/14/byvshiy-sotrudnik-minfina-sozdal-kartu-rossiyskogo-biznesa-kotoryy-terpit-bedstvie" target="_blank" class="media-card">
          <img src="/media-logos/meduza.svg" class="media-card__logo"/>
          <div class="media-card__heading">
            Бывший сотрудник Минфина создал карту российского бизнеса, который терпит бедствие
          </div>
        </a>
        <a href="https://tvrain.ru/teleshow/vechernee_shou/karta_biznesa-506931/" target="_blank" class="media-card">
          <img src="/media-logos/tvrain.svg" class="media-card__logo"/>
          <div class="media-card__heading">
            Карта умирающего бизнеса:<br>
            как предприниматели по всей России пытаются достучаться до власти
          </div>
        </a>
        <a href="https://novayagazeta.ru/articles/2020/04/15/84904-ubivat-ekonomiku-goroda-neratsionalno" target="_blank" class="media-card">
          <img src="/media-logos/novayagazeta.png" class="media-card__logo"/>
          <div class="media-card__heading">
            «Убивать экономику города нерационально»<br>
            Интервью создателя интерактивной карты «Бизнес терпит бедствие»
          </div>
        </a>
        <a href="https://secretmag.ru/news/predstavlena-karta-razoreniya-rossiiskogo-biznesa.htm" target="_blank" class="media-card">
          <img src="/media-logos/secretmag.svg" class="media-card__logo"/>
          <div class="media-card__heading">
            Представлена карта разорения российского бизнеса
          </div>
        </a>
        <a href="https://www.kommersant.ru/doc/4325761" target="_blank" class="media-card">
          <img src="/media-logos/kommersant.svg" class="media-card__logo"/>
          <div class="media-card__heading">
            Помощь малому бизнесу не придет.<br>
            Какие компании не могут претендовать на поддержку государства
          </div>
        </a>
        <a href="https://www.vedomosti.ru/management/articles/2020/04/16/828281-zhivetsya-individualnim" target="_blank" class="media-card">
            <img src="/media-logos/vedomosti.svg" class="media-card__logo"/>
            <div class="media-card__heading">
                Как живется индивидуальным предпринимателям в кризис
            </div>
        </a>

      </section>
      <div class="footer">
        Карта бизнеса, терпящего бедствие © 2020 <br/><br/>
        <span>Сделать карту тонущего бизнеса предложил предприниматель <span style="white-space: nowrap">Михаил Зуйков</span></span>
        <div style="margin-top: 5px">Дизайн: <a style="color: black; text-decoration: none;" target="_blank" href="https://tlgg.ru/nickk2007">Никита Куренев</a></div>
        <div style="margin-top: 5px">Разработано за 30к секунд в студии <a style="color: black; text-decoration: none;" target="_blank" href="https://devstation.ru">devstation.ru</a></div>
      </div>
      <Modal title="Добавление организации" v-show="addModal" @close="addModal = false">
        <div slot="body">
          <el-form :model="form" :rules="rules" ref="ruleForm">
            <el-form-item label="Адрес" prop="address">
              <el-input v-model="form.address" @change="updateCoords"></el-input>
            </el-form-item>
            <el-form-item label="Название" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Ваш email" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Список проблем" prop="problems">
              <el-select
                style="width: 100%; display: flex;"
                v-model="form.problems"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="Выберите или добавьте">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Количество рабочих мест под угрозой сокращения" prop="jobs_count">
              <el-input-number v-model="form.jobs_count" :min="1"></el-input-number>
            </el-form-item>
            <el-form-item label="Что случилось / Что могло бы вам помочь?" prop="description">
              <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
          </el-form>
          <div>Отправляя заявку я соглашаюсь с <a href="/policy.pdf" style="text-decoration: none;" target="_blank">политикой конфиденциальности</a></div>
        </div>
        <div slot="footer">
          <el-button type="primary" @click="submitForm">Добавить</el-button>
          <el-button @click="addModal = false">Отмена</el-button>
        </div>
      </Modal>
      <Modal :title="org.name" v-show="infoModal" @close="infoModal = false">
        <div slot="body">
          <div class="info">
            <div class="label">Адрес</div>
            <div class="text">{{ org.address }}</div>
          </div>
          <div class="info">
            <div class="label">Список проблем</div>
            <div class="text">{{ org.problems.join(', ') }}</div>
          </div>
          <div class="info">
            <div class="label">Количество рабочих мест под угрозой сокращения</div>
            <div class="text">{{ org.jobs_count }}</div>
          </div>
          <div v-show="org.description.length > 0" class="info">
            <div class="label">Что случилось / Что может помочь</div>
            <div class="text">{{ org.description }}</div>
          </div>
        </div>
        <div slot="footer">
          <span></span>
        </div>
      </Modal>
      <Modal title="Спасибо!" v-show="signModal" @close="signModal = false">
        <div slot="body">
          <div>
            <h2>Подпишите петицию</h2>
            <h3>В поддержку обнуления налогов для микро, малого и среднего бизнеса</h3>
          </div>
        </div>
        <div slot="footer">
          <a target="_blank" href="https://www.change.org/obnulenienalogov"><el-button type="primary">Подписать!</el-button></a>
          <el-button @click="signModal = false">Закрыть</el-button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap';
  import Modal from "../components/Modal";
  export default {
    name: 'index',
    components: {Modal},
    data() {
      return {
        expanded: null,
        placemarkData: [],
        rules: {
          email: [
            { required: true, message: 'Введите адрес электронной почты', trigger: 'blur' },
            { type: 'email', message: 'Введите корректный адрес', trigger: ['blur'] }
          ],
          address: [
            { required: true, message: 'Введите адрес организации', trigger: 'blur' },
          ],
          name: [
            { required: true, message: 'Введите название организации', trigger: 'blur' },
          ],
          jobs_count: [
            { required: true, message: 'Укажите количество', trigger: 'change' }
          ],
          description: [
            { required: true, message: 'Напишите, что может вам помочь', trigger: 'change' }
          ],
          problems: [
            { type: 'array', required: true, message: 'Напишите с какими проблемами вы столкнулись', trigger: 'blur' }
          ]
        },
        options: [
          {
          value: 'Нет денег на аренду',
          label: 'Нет денег на аренду'
        }, {
          value: 'Нет денег на выплату заработных плат',
          label: 'Нет денег на выплату заработных плат'
        }, {
          value: 'Критическое падение спроса',
          label: 'Критическое падение спроса'
        },{
          value: 'В процессе ликвидации',
          label: 'В процессе ликвидации'
        },{
            value: 'Закрытие на период "каникул"',
            label: 'Закрытие на период "каникул"'
          }
        ,{
          value: 'Закрылся навсегда',
          label: 'Закрылся навсегда'
        },{
            value: 'Другое',
            label: 'Другое'
          }],
        center: [49.358425876699265,87.77077411137508],
        form: {
          email: '',
          address: '',
          coords: [],
          name: '',
          description: '',
          jobs_count: 1,
          problems: []
        },
        org: {
          email: '',
          address: '',
          coords: [],
          name: '',
          description: '',
          jobs_count: 1,
          problems: []
        },
        addModal: false,
        infoModal: false,
        signModal: false,
        ymaps: null,
        map: null,
        bcTween: 1,
        jcTween: 1,
        isClustersSet: false
      }
    },
    async created() {
      this.fetchData()
    },
    computed: {
      businessCountAnimated: function() {
        return this.bcTween.toFixed(0);
      },
      jobsCountAnimated: function() {
        return this.jcTween.toFixed(0);
      },
      businessCount() {
        return this.placemarkData.length || 1
      },
      jobsCount() {
        return this.placemarkData.reduce((sum, a) => {
          return sum + a.jobs_count
        }, 0)
      }
    },
    watch: {
      placemarkData() {
        if (!this.map) {
          return
        }
        this.setClusters()
      },
      businessCount (newValue) {
        gsap.to(this.$data, { duration: 2, bcTween: newValue });
      },
      jobsCount (newValue) {
        gsap.to(this.$data, { duration: 2, jcTween: newValue });
      },
      async map() {
        this.map.events.add('click', async (e) => {
          let coords = e.get('coords');
          this.form.coords = coords
          this.center = coords
          this.addModal = true
        })
        if (this.placemarkData.length > 0) {
          this.setClusters()
        }
      }
    },
    mounted() {
      function resetHeight() {
        document.body.style.height = window.innerHeight + "px";
      }
      window.addEventListener("resize", resetHeight);
      resetHeight();
    },
    methods: {
      updateCoords() {
        window.ymaps.geocode(this.form.address, {results: 1}).then((res) => {
          let firstGeoObject = res.geoObjects.get(0)
          const coords = firstGeoObject.geometry.getCoordinates()
          this.form.coords = coords
        })
      },
      setClusters() {
        if (this.isClustersSet) {
          return
        }
        const clusterer = new window.ymaps.Clusterer({
          preset: 'islands#invertedBlueClusterIcons',
          groupByCoordinates: false,
          clusterDisableClickZoom: false,
          clusterHideIconOnBalloonOpen: false,
          geoObjectHideIconOnBalloonOpen: false
        })

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
        for(let place of this.placemarkData) {
          geoObjects.push(new window.ymaps.Placemark(place.coords, getPointData(place), getPointOptions()))
        }

        clusterer.options.set({
          gridSize: 80,
          clusterDisableClickZoom: true
        });

        clusterer.add(geoObjects);
        this.map.geoObjects.add(clusterer);


        this.isClustersSet = true
      },
      submitForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            let data = {...this.form}
            this.$fireStore.collection("business_mails").doc().set({...data})
            this.$fireStore.collection("business").doc().set({...data, email: null, display: false}).then((doc) => {
              this.placemarkData.push(data)
              this.addModal = false
              this.$message({
                message: 'Организация добавлена! Ваша метка находится на рассмотрении администраторами.',
                type: 'success'
              })
              this.signModal = true
              this.form = {
                address: '',
                coords: [],
                name: '',
                description: '',
                jobs_count: 1,
                problems: '',
                email: '',
              }
            })
          } else {
            this.$message({
              message: 'Пожалуйста заполните все обязательные поля',
              type: 'warning'
            })
            return false;
          }
        });
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
  @import "../assets/styles/mixins.scss"
  .info
    &:not(:last-child)
      margin-bottom: 10px
    .label
      font-weight: bold
  .wrap
    width: 100%
    max-width: 775px
  @mixin mobile
    @media (max-width: 768px)
      @content
  @mixin desktop
    @media (min-width: 769px)
      @content
  @mixin card
    background: #F8F8F9
    padding: 30px 40px
    border-radius: 30px
    @include mobile
      padding: 20px !important
  .card-mini
    @include card
  .only-mobile
    @include desktop
      display: none
  .only-desktop
    @include mobile
      display: none !important
  .jumbotron
    @include mobile
      &:nth-child(2)
        margin-top: 60px
    @include desktop
      .card-info
        max-width: 460px
      margin-top: 60px
  .stats-wrapper
    margin-top: 60px
    display: flex
    justify-content: space-around
    flex-direction: row
    align-items: center
    .stat
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      text-align: center
      &__count
        font-size: 36px
        font-weight: bold
      &__name
        text-align: center
        font-size: 24px
    @include mobile
      flex-direction: column
  .footer
    text-align: center
    font-size: 18px
    margin-top: 110px
    @include mobile
      font-size: 16px
      margin-top: 60px
  .el-scrollbar
    > .el-scrollbar__bar
      opacity: 1
  .sign-button
    display: flex
    justify-content: center
    align-items: center
    text-decoration: none
    border: 1.5px solid #052DFF
    box-sizing: border-box
    border-radius: 30px
    padding: 15px 25px
    background: rgba(0,0,0,0)
    font-weight: bold
    font-size: 16px
    transition: all 0.2s ease
    cursor: pointer
    &:hover
      background: #052DFF
      color: #fff
  .quotes
    display: flex
    flex-direction: column
    align-items: center
    .quote
      &:nth-child(2n)
        flex-direction: row-reverse
        .quote__avatar
          margin-left: 30px
          margin-right: 0
          @include mobile
            margin-left: 7px
            margin-right: 0
      display: flex
      &__text
        margin-top: 10px
        line-height: 150%
        font-size: 18px
        @include mobile
          font-size: 16px
      &__name
        font-size: 36px
        font-weight: bold
        @include mobile
          font-size: 22px
      &__position
        font-weight: bold
      &__avatar
        width: 180px
        height: 180px
        margin-right: 30px
        @include mobile
          margin-right: 7px
          width: 40px
          height: 40px
      &__card
        @include desktop
          max-width: 620px
        @include card
    .quote:not(:last-child)
      margin-bottom: 60px
  .donate-cards
    padding: 30px 40px !important
    display: grid !important
    gap: 60px
    grid-template-columns: 75px 1fr 1fr
    font-size: 24px
    align-items: center
    .card-num__name
      font-weight: bold
    @include mobile
      align-items: flex-start !important
      gap: 15px
      font-size: 18px
      grid-template-columns: 1fr
      padding: 20px !important
  .contacts
    @include desktop
      padding: 60px 38px 30px !important
      h1
        margin-bottom: 0 !important
  .donate
    @include mobile
      margin-top: 60px
    @include desktop
      padding: 60px 38px 30px !important
  .contacts
    @include mobile
      margin-top: 60px
  .contact-card
    display: grid
    grid-template-columns: 140px 1fr 145px
    align-items: center
    gap: 60px
    max-width: 858px
    font-size: 18px
    .contact__avatar
      align-items: center
      @include mobile
        img
          width: 69px
          height: 69px
          margin-right: 13px
      display: flex
    .contact__list
      a
        color: #052DFF !important
        text-decoration: none
      color: #052DFF !important
      font-weight: bold
      display: grid
      gap: 15px
      grid-template-columns: 1fr
      @include mobile
        grid-template-columns: 1fr 1fr
    .contact__text
      line-height: 150%
      @include desktop
        margin-top: 10px
    .contact__name
      @include mobile
        font-size: 22px
      font-size: 36px
    .contact__name, .contact__position
      font-weight: bold
    @include card
    @include mobile
      grid-template-columns: 1fr
      font-size: 16px
      gap: 20px
  .card
    &.supporting
      @include desktop
        padding: 60px 38px 60px !important
      .card-info
        max-width: 100% !important
        h1
          margin-bottom: 0px !important
      @include mobile
        h1
          margin-top: 30px
          margin-bottom: 30px
        flex-direction: column-reverse
    &.text
      flex-direction: column
      p
        width: 100%
        margin-bottom: 30px
        font-size: 18px
        line-height: 150%
        @include mobile
          font-size: 16px
        &:last-child
          margin-bottom: 0
    &.petition
      align-items: center
      .card-info
        @include desktop
          h1
            margin-bottom: 0 !important
          max-width: 540px
      .card-image
        max-width: 140px
    .card-image
      max-width: 260px
      @include mobile
        max-width: 250px
        margin-top: 30px

    &.card-grey
      background: #F8F8F9
    &-info
      &__text
        font-size: 18px
        line-height: 150%
        @include mobile
          font-size: 16px
      h1
        @include mobile
          font-size: 36px
        font-size: 45px
        line-height: 120%
        font-weight: bold
        margin-bottom: 30px
    border-radius: 30px
    width: 100%
    padding: 60px 80px
    display: flex
    justify-content: space-between
    align-items: center
    text-align: left
    @include mobile
      padding: 20px
      flex-direction: column
  .map-tip
    margin-top: 30px
    font-size: 24px
    margin-bottom: 0px !important
  .map-container
    .map-title
      font-weight: bold
    .map-title, .map-tip
      @include mobile
        font-size: 18px
        max-width: calc(100vw - 20px)
        padding: 0 30px
      font-size: 24px
      text-align: left
      width: 100%
      max-width: 775px
      margin-bottom: 30px
    width: 100vw
    @include desktop
      width: 80vw
    min-height: 660px
    border-radius: 25px
    padding: 20px
    background: #fff
    margin-top: 15px
    display: flex
    flex-direction: column
    align-items: center
    @media (max-width: 768px)
      margin-left: -20px
      min-height: 50vh
  .business-map
    @include desktop
      width: 80vw
    width: 100vw
    border-radius: 25px
    height: 660px
    margin-top: 0 !important
    @media (max-width: 768px)
      height: 50vh
  .el-form-item__label
    text-align: left !important
    color: #000 !important
    font-weight: bold
  .el-input-number
    width: 150px !important
  .el-button--primary
    background: #052DFF !important
    border-color: #052DFF !important
    &:hover
      opacity: 0.7
  .el-select .el-input.is-focus .el-input__inner
    border-color: #052DFF !important
  .el-select-dropdown.is-multiple .el-select-dropdown__item.selected
    color: #052DFF !important
  .el-input__inner, .el-tag.el-tag--info, .el-select-dropdown__item
    color: #000 !important
    &:focus
      border-color: #052DFF !important
  .container
    width: calc(100vw - 20px)
    margin: 0 auto
    max-width: 950px
    padding: 10px
  .media
    @include desktop
      padding: 60px 38px 0 !important
      h1
        margin-bottom: 0 !important
  .media
    @include mobile
      margin-top: 60px

  .media-cards
    width: 100%
    display: flex
    padding: 60px 38px 30px !important
    flex-wrap: wrap
    justify-content: space-between
    @include mobile
      padding: 0!important
      flex-direction: column

  .media-card
    width: calc(50% - 16px)
    background: #F8F8F9
    border-radius: 30px
    text-decoration: none
    color: inherit
    margin: 0 0 30px
    padding: 30px 40px
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0)
    transition: box-shadow .5s
    &:hover, &:active
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1)
    @include mobile
      width: 100%
    &__logo
      height: 32px
      @include mobile
        height: 24px
    &__heading
      font-size: 18px
      line-height: 1.5
      margin: 16px 0 0
      height: 136px
</style>
