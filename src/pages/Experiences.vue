<template>
  <div class="ex-bg">
    <h1 style="text-align: center; font-family: cursive; color: #CCFF99; font-size: 50px;">Experiences</h1>
    <br>
    <br>
    <div class="wrapper">
      <div class="center-line">
        <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
      </div>
      <div :class="'row row-' + (i%2)" v-for="(e, i) in experiences" :key="i">
        <section>
          <i class="icon fas fa-home"></i>
          <div class="details">
            <span class="title">{{e.title}}</span>
            <span>{{e.subtitle}}</span>
          </div>
          <p>{{e.detail}}</p>
          <div class="bottom">
            <i>- {{e.I}}</i>
          </div>
        </section>
      </div>
    </div>

    <body>
      <center><a href="/home" target="HomePage">
          <button class="btn-1">Back to HomePage</button>
        </a></center>
    </body>
  </div>
</template>

<script>
//https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/skyexperiences
import axios from 'axios'
export default {
  methods: {
    async fetchExperience() {
      try {
        let res = await axios.get("https://633fc566e44b83bc73c0f545.mockapi.io/profile/v1/skyexperiences")
        this.experiences = res.data
      } catch (error) {

      }
    }
  },
  data() {
    return {
      experiences: []
    }
  },
  beforeMount() {
    this.fetchExperience()
  }

}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html {
  scroll-behavior: smooth;
}

.ex-bg {
  background: url(https://i.pinimg.com/originals/13/e3/b8/13e3b87ba0a9cfad0d95fad4489fe7cb.gif);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
}

::selection {
  color: #fff;
  background: #CCFF99;
}

.wrapper {
  max-width: 1080px;
  margin: 50px auto;
  padding: 0 20px;
  position: relative;
}

.wrapper .center-line {
  position: absolute;
  height: 100%;
  width: 4px;
  background: #fff;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
}

.wrapper .row {
  display: flex;
}

.wrapper .row-0 {
  justify-content: flex-start;
}

.wrapper .row-1 {
  justify-content: flex-end;
}

.wrapper .row section {
  background: #fff;
  border-radius: 5px;
  width: calc(50% - 40px);
  padding: 20px;
  position: relative;
}

.wrapper .row section::before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  top: 28px;
  z-index: -1;
  transform: rotate(45deg);
}

.row-0 section::before {
  right: -7px;
}

.row-1 section::before {
  left: -7px;
}

.row section .icon,
.center-line .scroll-icon {
  position: absolute;
  background: #f2f2f2;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #99FF33;
  font-size: 17px;
  box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.center-line .scroll-icon {
  bottom: 0px;
  left: 50%;
  font-size: 25px;
  transform: translateX(-50%);
}

.row-0 section .icon {
  top: 15px;
  right: -60px;
}

.row-1 section .icon {
  top: 15px;
  left: -60px;
}

.row section .details,
.row section .bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.row section .details .title {
  font-size: 22px;
  font-weight: 600;
}

.row section p {
  margin: 10px 0 17px 0;
}

.row section .bottom a {
  text-decoration: none;
  background: #99FF33;
  color: #fff;
  padding: 7px 15px;
  border-radius: 5px;
  /* font-size: 17px; */
  font-weight: 400;
  transition: all 0.3s ease;
}

.row section .bottom a:hover {
  transform: scale(0.97);
}

@media(max-width: 790px) {
  .wrapper .center-line {
    left: 40px;
  }

  .wrapper .row {
    margin: 30px 0 3px 60px;
  }

  .wrapper .row section {
    width: 100%;
  }

  .row-0 section::before {
    left: -7px;
  }

  .row-0 section .icon {
    left: -60px;
  }
}

@media(max-width: 440px) {

  .wrapper .center-line,
  .row section::before,
  .row section .icon {
    display: none;
  }

  .wrapper .row {
    margin: 10px 0;
  }
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: 0px;
  background: transparent;
  position: relative;
  margin: 20px;
  transition: all 0.25s ease;
}

.btn-1 {
  color: #fff;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0px -0px 0px 0px rgba(143, 64, 248, 0.5),
    0px -0px 0px 0px rgba(39, 200, 255, 0.5);
}

.btn-1:hover {
  transform: translate(0, -6px);
  box-shadow: 10px -10px 25px 0px rgba(143, 64, 248, 0.5),
    -10px 10px 25px 0px rgba(39, 200, 255, 0.5);

}

.btn-1:hover::after {
  transform: rotate(150deg);
}

.btn-1::after {
  content: "";
  width: 400px;
  height: 400px;
  position: absolute;
  top: -50px;
  left: -100px;
  background-color: #ff3cac;
  background-image: linear-gradient(225deg, #27d85c 0%, #26caf8 50%, #c625d0 100%);
  z-index: -1;
  transition: all 0.25s ease;
}
</style>


