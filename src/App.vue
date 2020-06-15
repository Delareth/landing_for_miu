<template>
  <div id="app">
    <!-- Components -->
    <Modal ref="modal"></Modal>
    <!-- Bubbles -->
    <div class="bubble bubble_1 bubble_image_2"></div>
    <div class="bubble bubble_2 bubble_image_3"></div>
    <div class="bubble bubble_3 bubble_image_4"></div>
    <div class="bubble bubble_4 bubble_image_5"></div>
    <div class="bubble bubble_5 bubble_image_2"></div>
    <div class="bubble bubble_6 bubble_image_3"></div>
    <!-- Header Image -->
    <div class="header_bg"></div>

    <header>
      <div class="header_row">
        <div class="header_row_item">МЕЖДУНАРОДНЫЙ ИННОВАЦИОННЫЙ<br>УНИВЕРСИТЕТ</div>
        <div class="header_row_item" @click="showModal(true, 4)">Связаться с нами</div>
      </div>

      <div class="header_center">
        <div class="header_center_item">Качественное образование - гарантия успешной карьеры</div>
        <div class="header_center_item">С нашим университетом Вы сможете получить качественное высшее образование 
          и всестороннее развитие личности.</div>

        <div class="header_center_button" @click="setScrollToForm">Оставить заявку</div>
      </div>
    </header>

    <section class="advantages">
      <div class="advantages_header">Наши преимущества</div>

      <div class="advantages_list">
        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Государственный диплом</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Дистанционное обучение</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Электронная библиотека</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Отсрочка от армии</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Перевод из других вузов</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Льготы по оплате за обучение</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">4 современных корпуса</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Институты во всех регионах России</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Трудоустройство, в том числе в зарубежных компаниях</div>
        </div>

        <div class="advantages_item">
          <div class="advantages_image"></div>
          <div class="advantages_text">Прием иностранных граждан</div>
        </div>
      </div>
    </section>

    <section class="levels">
      <div class="levels_header">Направления</div>

      <div class="levels_list">
        <div class="levels_block" @click="showModal(true, 0)">
          <div class="levels_image"></div>
          <div class="levels_text">Бакалавриат</div>
        </div>

        <div class="levels_block" @click="showModal(true, 1)">
          <div class="levels_image"></div>
          <div class="levels_text">Магистратура</div>
        </div>

        <div class="levels_block" @click="showModal(true, 2)">
          <div class="levels_image"></div>
          <div class="levels_text">Аспирантура</div>
        </div>
      </div>
    </section>

    <section class="info">
      <div class="info_header">Информация по университету</div>
      <div class="info_block">
        <div class="info_text">
          Международный инновационный университет открыт в 1997 году. 
          МИУ - это не только завтрашний день национальной системы высшего образования, это университет, достигший многого уже сегодня. 
          Университет является примером инновационного образовательного центра со своими научными, педагогическими и 
          культурными традициями. Международный инновационный университет в 2017 году вошел в ТОП-10 из 
          1140 негосударственных вузов России по данным Министерства образования и науки РФ. 
          По результатам мониторинга эффективности вузов 2018 года, проводимого Министерством образования и науки РФ, 
          Международный инновационный университет занял первое место из 48 вузов Краснодарского края.
          <div class="info_text_lic">
          Лицензия: № 2437 от 24.10.16 г. (БЕССРОЧНО). Свидетельство о государственной аккредитации: 2384 от 29.11.16 г.
          </div>
        </div>
        <div class="info_image"></div>
      </div>
    </section>

    <section class="form" ref="form">
      <div class="form_header">Подать заявку</div>
      <div class="form_text">В течение рабочего дня с Вами свяжется персональный куратор и ответит на все организационные вопросы</div>

      <form @submit.prevent="sendData">
        <div class="form_block">
          <input v-model="name" type="text" placeholder="Имя" required maxlength="255"
            pattern="[А-Яа-яЁёA-Za-z\s]{2,50}">

          <input v-model="email" type="email" placeholder="Почта" required maxlength="255"
            pattern="[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}">

          <input v-model="phoneNumber" type="tel" required maxlength="15" placeholder="Телефон" @keypress="verifyPhone">
        </div>

        <div>
          <input type="checkbox" class="form-check-input" required checked="checked" value="1">
          <label for="checkboxTicket" class="form_check_label">Согласен на обработку персональных данных и 
            <a href="https://www.miu-sochi.ru/PrivacyPolicy?utm_source=landing&utm_medium=link&utm_campaign=toOfficialPrivacyPolicy" 
            target="_blank">политикой конфиденциальности</a>
          </label>
        </div>
        
        <input type="submit" class="form_button" value="Отправить">
      </form>
    </section>

    <footer>
      <div class="footer_box">
        <div class="footer_links">
          <a target="_blank" href="https://www.miu-sochi.ru">Официальный сайт университета</a>
          <a target="_blank" href="https://www.miu-sochi.ru/PrivacyPolicy">Политика конфиденциальности</a>
          <a target="_blank" href="https://www.miu-sochi.ru/AgreementPolicy">Пользовательское соглашение</a>
        </div>
        <div class="footer_socials">
          <a class="footer_social_box" target="_blank" href="https://vk.com/miusochi" title="Вконтакте">
            <div class="footer_social_image image_vk"></div>
          </a>

          <a class="footer_social_box" target="_blank" href="https://instagram.com/miu.sochi/"  title="Instagram">
            <div class="footer_social_image image_instagram"></div>
          </a>

          <a class="footer_social_box" target="_blank" href="https://www.youtube.com/c/Miu-sochiRu"  title="Youtube">
            <div class="footer_social_image image_youtube"></div>
          </a>

          <a class="footer_social_box" target="_blank" href="https://ok.ru/miusochi"  title="Одноклассники">
            <div class="footer_social_image image_odnoklassniki"></div>
          </a>

          <a class="footer_social_box" target="_blank" href="https://twitter.com/miu_sochi"  title="Twitter">
            <div class="footer_social_image image_twitter"></div>
          </a>
        </div>
      </div>

      <div class="footer_separator"></div>

      <div class="footer_copy">© ОЧУВО «Международный инновационный университет», 2020</div>
    </footer>
  </div>
</template>

<script>

import axios from "axios";
import Modal from "./views/Modal"

export default {
  name: "app",
  components: {
    Modal
  },
  data: function () {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      isModalActive: false
    }
  },
  methods: {
    sendData: async function() 
    {
      try
      {
        const res = await axios({
          url: "http://localhost:3000/api/addCustomer",
          method: "post",
          data: {
            name: this.name,
            email: this.email,
            phoneNumber: this.phoneNumber
          }
        });

        if (res.data.state === "success")
        {
          alert("Ваша заявка одобрена. Наши специалисты свяжутся с Вами!");
        }
        else
        {
          alert("Произошла ошибка во время отправки заявки, повторите позже");
        }
      }
      catch (error)
      {
        alert("Произошла ошибка во время отправки заявки, повторите позже");
      }
    },
    setScrollToForm: function()
    {
      this.$refs.form.scrollIntoView({ behavior: "smooth", block: "center"});
    },
    showModal: function(state, type)
    {
      this.isModalActive = state;

      state ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";

      if (state) this.$refs.modal.show(type);
    },
    verifyPhone: function(e)
    {
      let pattern = /^[0-9]{0,12}$/;

      if (!pattern.test(e.key)) return e.preventDefault();

      if (this.phoneNumber.length == 0) this.phoneNumber = "+";
    }
  }
}

</script>

<style>

@font-face 
{
  font-family: MainFont;
  src: url("./assets/Fonts/11181.otf");
}

#app {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.header_bg {
  position: absolute;
  top: 0px;
  left: 0px;
  background: url("./assets/top_bg.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 1141px;
  z-index: -2;
}

.header_row {
  width: 70%;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
}

.header_row_item {
  display: flex;
  align-items: center;
  height: 64px;
  color: #fff;
}

.header_row_item:first-child {
  font: 20px MainFont;
}

.header_row_item:last-child {
  font: 700 16px MainFont;
  text-decoration: underline;
  cursor: pointer;
}

.header_center {
  width: 40%;
  margin: 72px auto;
  text-align: center;
}

.header_center_item {
  color: #fff;
  margin-bottom: 36px;
  font: 400 16px Roboto, Helvetica, Arial, Sans Serif;
}

.header_center_item:first-child {
  font: 600 36px Roboto, Helvetica, Arial, Sans Serif;
}

.header_center_button {
  margin: 0 auto;
  width: 260px;
  height: 52px;
  background: #f2fffe;
  color: rgb(7, 186, 165);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 700 16px Roboto, Helvetica, Arial, Sans Serif;
  transition: .3s all ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  user-select: none;
}

.header_center_button:hover {
  color: #00d664;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.header_center_button:active {
  background: #f2fffe;
  color: rgb(7, 186, 165);
}

.advantages {
  margin: 0 auto;
  margin-top: 108px;
  width: 60%;
}

.advantages_header {
  text-align: center;
  color: #fff;
  font: 600 26px Roboto, Helvetica, Arial, Sans Serif;
}

.advantages_list {
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
}

.advantages_item {
  margin: 0 auto;
  width: 35%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 13px;
}

.advantages_item:last-child {
  margin-bottom: 0px;
}

.advantages_image {
  min-width: 32px;
  height: 32px;
  margin-right: 10px;
  background: url("./assets/tick.png") no-repeat;
}

.advantages_text {
  color: #33a4ce;
  font: 600 15px MainFont;
}

.levels {
  margin: 108px 0 72px 0;
}

.levels_header {
  text-align: center;
  color: #000;
  font: 600 26px Roboto, Helvetica, Arial, Sans Serif;
}

.levels_list {
  margin: 0 auto;
  margin-top: 36px;
  width: 50%;
  display: flex;
  justify-content: space-around;
}

.levels_block {
  width: 150px;
  text-align: center;
  cursor: pointer;
}

.levels_block:hover > .levels_text {
  color: #00d664;
}

.levels_image {
  margin: 0 auto;
  width: 72px;
  height: 72px;
  background: url("./assets/graduation.png") no-repeat;
  background-size: contain;
}

.levels_text {
  margin-top: 10px;
  color: #000;
  font: 20px MainFont;
  transition: .3s all ease-in-out;
}

.info {
  width: 100%;
  padding: 36px 0 36px 0;
}

.info_header {
  text-align: center;
  color: #000;
  font: 600 26px Roboto, Helvetica, Arial, Sans Serif;
}

.info_block {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 36px;
}

.info_text {
  width: 50%;
  margin-top: 10px;
  color: #000;
  font: 20px MainFont;
}

.info_text_lic {
  font: 600 20px MainFont;
}

.info_image {
  width: 383px;
  height: 471px;
  background: url("./assets/build-image.jpg") no-repeat;
}

.form {
  width: 40%;
  margin: 0 auto;
  margin-top: 36px;
}

.form_header {
  text-align: center;
  color: #000;
  font: 600 26px Roboto, Helvetica, Arial, Sans Serif;
}

.form_text {
  margin: 36px 0 18px 0;
  font: 16px MainFont;
}

.form_block > input {
  width: calc(50% - 54px);
  background: #ededed;
  border: none;
  outline: none;
  border-radius: 10px;
  margin: 0 20px 10px 0;
  padding: 10px 16px;
  font: 16px MainFont;
  transition: .3s all ease-in-out;
}

.form_block > input:focus {
  box-shadow: 0 0 10px rgba(61, 188, 235, 0.3);
}

.form_check_label {
  font: 700 16px MainTextFont;
  color: #33a4ce;
}

.form_check_label > a {
  color: #3cbceb;
  text-decoration: none;
}

.form_button {
  border: none;
  outline: none;
  cursor: pointer;
  width: 30%;
  height: 52px;
  margin: 36px 0 0 35%;

  background: #33a4ce;
  color: rgb(241, 241, 241);
  border-radius: 100px;
  font: 700 16px Roboto, Helvetica, Arial, Sans Serif;
  transition: .3s all ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.form_button:hover {
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.form_button:active {
  color: rgb(241, 241, 241);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

footer {
  background: url("./assets/footer_bg.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  margin-top: 72px;
  position: relative;
  z-index: -2;
}

.footer_box {
  width: 60%;
  margin: 0 auto;
  padding-top: 36px;

  display: flex;
}

.footer_links {
  flex: 0 0 50%;
}

.footer_links > a {
  display: block;
  margin-bottom: 10px;
  font: 18px MainFont;
  text-decoration: none;
  color: rgb(241, 241, 241);
  transition: .2s all ease-in-out;
}

.footer_links > a:hover {
  text-decoration: underline;
  color: #fff;
}

.footer_socials {
  flex: 0 0 50%;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footer_social_box {
  width: 54px;
  height: 54px;
  background: rgba(241, 241, 241, 0.6);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s all ease-in-out;
}

.footer_social_box:hover {
  background: rgba(241, 241, 241, 0.7);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.footer_social_box:active > .footer_social_image {
  width: 30px;
  height: 30px;
}

.footer_social_image {
  width: 32px;
  height: 32px;
}

.footer_separator {
  width: 100%;
  margin: 36px 0 36px 0;
  border-bottom: 1px solid #fff;
  opacity: .2;
}

.footer_copy {
  text-align: center;
  font: 16px MainFont;
  color: #fff;
  padding-bottom: 36px;
}

.bubble {
  position: absolute;
  z-index: -1;
}

.bubble_1 {
  top: 203px;
  left: 20%;
}

.bubble_2 {
  top: 425px;
  right: 25%;
}

.bubble_3 {
  top: 1277px;
  left: 15%;
}

.bubble_4 {
  top: 1685px;
  right: 42%;
}

.bubble_5 {
  top: 2093px;
  left: 19%;
}

.bubble_6 {
  top: 2222px;
  right: 10%;
}

.bubble_image_1 {
  width: 54px;
  height: 54px;
  background: url("./assets/bubble-1.svg") no-repeat;
}

.bubble_image_2 {
  width: 117px;
  height: 117px;
  background: url("./assets/bubble-2.svg") no-repeat;
}

.bubble_image_3 {
  width: 170px;
  height: 170px;
  background: url("./assets/bubble-3.svg") no-repeat;
}

.bubble_image_4 {
  width: 146px;
  height: 146px;
  background: url("./assets/bubble-4.svg") no-repeat;
}

.bubble_image_5 {
  width: 68px;
  height: 68px;
  background: url("./assets/bubble-5.svg") no-repeat;
}

.image_vk {
  background: url("./assets/vk.png") no-repeat;
  background-size: contain;
}

.image_instagram {
  background: url("./assets/instagram.png") no-repeat;
  background-size: contain;
}

.image_odnoklassniki {
  background: url("./assets/odnoklassniki.png") no-repeat;
  background-size: contain;
}

.image_youtube {
  background: url("./assets/youtube.png") no-repeat;
  background-size: contain;
}

.image_twitter {
  background: url("./assets/twitter.png") no-repeat;
  background-size: contain;
}

@media only screen and (max-width: 800px) {
  .header_row {
    width: 90%;
  }

  .header_center {
    width: 90%;
  }

  .advantages {
    width: 100%;
  }

  .advantages_item {
    height: inherit;
  }

  .levels_list {
    flex-wrap: wrap;
  }

  .levels_block {
    margin-bottom: 36px;
  }

  .levels_block:last-child {
    margin-bottom: 0px;
  }

  .info_block {
    width: 90%;
  }

  .info_text {
    width: 100%;
  }

  .info_image {
    display: none;
  }

  .form {
    width: 90%;
  }

  .form_block > input {
    width: 80%;
  }

  .form_block {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .form_button {
    width: 90%;
    margin-left: 5%;
  }

  .footer_box {
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer_links {
    text-align: center;
  }

  .footer_links > a {
    margin-bottom: 18px;
  }

  .footer_socials {
    margin-top: 18px;
    flex: 0 0 100%;
  }

  .bubble_1 {
    top: 203px;
    left: 11%;
  }

  .bubble_2 {
    top: 548px;
    right: 8%;
  }

  .bubble_3 {
    top: 1097px;
    left: 8%;
  }

  .bubble_4 {
    top: 1785px;
    right: 7%;
  }

  .bubble_5 {
    top: 2513px;
    left: 9%;
  }

  .bubble_6 {
    display: none;
  }
}

@media only screen and (min-width: 800px) and (max-width: 1280px) {
  .form {
    width: 50%;
  }

  .form_button {
    width: 70%;
    margin-left: 15%;
  }

  .bubble_4 {
    top: 1825px;
    right: 47%;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1024px) {
  .footer_box {
    width: 80%;
  }

  .bubble_4 {
    top: 1905px;
    right: 47%;
  }
}

</style>