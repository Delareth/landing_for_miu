<template>
  <transition name="fade">
    <div class="modal" @click="checkClose" v-if="this.$parent.isModalActive">
      <div class="main_box" ref="mainBox">
        <header>
          <div class="header_text">{{currentName}}</div>
          <div class="header_close" @click="close"></div>
        </header>

        <ul class="modal_levels" v-if="isLevels">
          <li v-for="type in currentList" :key="type">
            {{type}}
          </li>
        </ul>

        <div class="modal_contacts" v-if="!isLevels">
          <a class="modal_contacts_box" href="tel:8(800)350-08-29">
            <div class="modal_contacts_image image_contacts_call"></div>
            <div class="modal_contacts_text">8(800)350-08-29 (звонок бесплатный)</div>
          </a>

          <a class="modal_contacts_box" href="tel:8(862)262-08-32">
            <div class="modal_contacts_image image_contacts_call"></div>
            <div class="modal_contacts_text">8(862)262-08-32</div>
          </a>

          <a class="modal_contacts_box" href="https://www.miu-sochi.ru/lp/mail">
            <div class="modal_contacts_image image_contacts_email"></div>
            <div class="modal_contacts_text">sochi.priem@mail.ru</div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "modal",
  data: function () {
    return {
      currentName: "",
      currentList: [],
      levels: [
        {
          name: "Бакалавриат",
          list: [
            "Юриспруденция",
            "Экономика",
            "Менеджмент",
            "Международные отношения",
            "Психология",
            "Государственное и муниципальное управление",
            "Дизайн",
            "Туризм",
            "Гостиничное дело",
            "Сервис",
            "Социально-культурная деятельность",
            "Технология транспортных процессов",
            "Прикладная информатика",
            "Информатика и вычислительная техника"
          ]
        },
        {
          name: "Магистратура",
          list: [
            "Юриспруденция",
            "Экономика",
            "Государственное и муниципальное управление",
            "Менеджмент",
            "Психология"
          ]
        },
        {
          name: "Аспирантура",
          list: [
            "Юриспруденция",
            "Экономика",
            "Образование и педагогические науки",
            "Психологические науки"
          ]
        }
      ],
      isLevels: false
    }
  },
  methods: {
    checkClose: function(e)
    {
      if (e.target.className === "modal") this.close();
    },
    close: function()
    {
      this.$parent.showModal(false);
    },
    show: function(type)
    {
      if (type === 4)
      {
        this.currentName = "Приемная комиссия";
        this.isLevels = false;

        this.setPosition();
        return;
      }

      this.currentName = this.levels[type].name;
      this.currentList = this.levels[type].list;
      this.isLevels = true;

      this.setPosition();
    },
    setPosition: function()
    {
      this.$nextTick(() => {
        const height = (window.innerHeight - this.$refs.mainBox.offsetHeight) / 2;
        this.$refs.mainBox.style.marginTop = height + "px";
      });
    }
  }
}

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.main_box {
  width: 600px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: .3s all ease-in-out;
}

header {
  position: relative;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 10px 0 10px 0;
}

.header_text {
  text-align: center;
  font: 700 24px Roboto, Helvetica, Arial, Sans Serif;
  color: #33a4ce;
}

.header_close {
  position: absolute;
  top: calc(50% - 8px);
  right: 12px;
  width: 16px;
  height: 16px;
  background: #000;
  -webkit-mask: url("./../assets/close.png") no-repeat;
  mask: url("./../assets/close.png") no-repeat;
  transition: .3s all ease-in-out;
  cursor: pointer;
}

.header_close:hover {
  background: #5d5d5d;
}

.header_close:active {
  transition: .1s all ease-in-out;
  background: #000;
}

.modal_levels {
  padding-bottom: 15px;
  font: 16px MainFont;
}

.modal_contacts {
  padding: 15px 25px 15px 25px;
}

.modal_contacts_box {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  transition: .3s all ease-in-out;
}

.modal_contacts_box:last-child {
  margin-bottom: 0px;
}

.modal_contacts_box:hover {
  color: rgb(66, 66, 66);
  text-decoration: underline;
}

.modal_contacts_image {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.modal_contacts_text {
  font: 16px MainFont;
}

.image_contacts_call {
  background: url("./../assets/contact_call.png") no-repeat;
}

.image_contacts_email {
  background: url("./../assets/contact_email.png") no-repeat;
}

@media screen and (max-width: 700px) {
  .main_box {
    width: calc(100% - 20px);
  }
}

</style>