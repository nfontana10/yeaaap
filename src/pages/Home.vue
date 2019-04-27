<template>
  <div class="home">
    <h1 class="title">YEAAAAAAAAP!</h1>
    <div class="crazy_images">
      <div class="left">
        <h2 class="meet_our_founders">Meet Our Founders...</h2>
        <div class="menu_left">
          <img alt="nick" src="../assets/nick.jpg"/>
          <p class="quote">Only now is the child finally divested of all that he has been. His origins are become remote as is his destiny and not again in all the world's turning will there be terrains so wild and barbarous to try whether the stuff of creation may be shaped to man's will or whether his own heart is not another kind of clay.</p>
        </div>
        <div class="menu_right">
          <img alt="levi" src="../assets/levi.jpg"/>
          <p class="quote">I'd rather laugh with the sinners than cry with the saints, the sinners have much more fun.</p>
        </div>
        <div class="menu_left">
          <img alt="henry" src="../assets/henry.jpg"/>
          <p class="quote">hangin' round</p>
        </div>
      </div>
      <div class="right">
        <img class="main_image" alt="zati" src="../assets/zati.jpg"/>
      </div>
    </div>
    <div>
      <button @click="counter += 1;play()">Yeaaap!</button>
      <p>You have yeappped {{ counter }} times.</p>
      <!-- <audio ref="audioElm" src="require(../assets/yeap_sound.mp3)"></audio> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    play() {
      var audio = new Audio(require('../assets/yeap_sound.mp3'));
      audio.play();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

// Variables
$break-menu: 700px;
$break-quote: 450px;

// Animations
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.title {
  border-bottom: 1px solid #000000;
  font-size: 36px;
}

.crazy_images {
  padding: 0 40px;
  overflow: auto;

  .left {
    float: left;
    width: 45%;
    margin-right: 40px;

    @media screen and (max-width: $break-menu) {
      float: none;
      width: 100%;
    }

    img {
      border: 2px solid #000000;
      width: 100px;
      filter: gray;
      -webkit-filter: grayscale(1);
      filter: grayscale(1);
      
      &:hover,
      &:focus {
        animation: shake 0.5s infinite;
        -webkit-animation: shake 0.5s infinite;
      }
    }

    .menu_left,
    .menu_right {
      min-height: 200px;
      margin-bottom: 30px;

      img {
        @media screen and (max-width: $break-quote) {
          float: none !important;
        }
      }

      .quote {
        @media screen and (max-width: $break-quote) {
          margin: 10px 0 30px 0 !important;
        }
      }
    }

    .menu_left {
      img {
        float: left;
      }

      .quote {
        margin-left: 120px;
      }
    }

    .menu_right {
      img {
        float: right;
      }

      .quote {
        margin-right: 120px;
      }
    }
  }

  .right {
    float: right;
    width: 45%;

    @media screen and (max-width: $break-menu) {
      float: none;
      width: 100%;
    }
  }
}

.main_image {
  max-width: 100%;
  width: 500px;
  border: 2px solid black;
}
</style>
