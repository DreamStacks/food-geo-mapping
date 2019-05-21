<template>
  <div id="home">

    <div class="content">
      <div class="top">
        <div class="logo">
          <img :src="logo">
        </div>
        <div class="headline">
          <h1>{{ title_cn }}</h1>
          <h2>{{ title_en }}</h2>
        </div>
      </div>
      <p class="poem">{{ poem }}</p>
      <div class="center">

        <div class="classify_logo">
          <img :src="classify[0].img">
          <p>{{ classify[0].title }}</p>
        </div>
        <span class="splice" />
        <div class="classify_logo">
          <img :src="classify[1].img">
          <p>{{ classify[1].title }}</p>

        </div>

      </div>

    </div>

  </div>
</template>
<script>
import logo from '@/assets/logo.png'
import snack_logo from '@/assets/snack_logo.svg'
import fruit_logo from '@/assets/fruit_logo.svg'

export default {
  name: 'DsHome',
  data() {
    return {
      logo,
      // fruit_logo,
      // snack_logo,
      classify: [
        {
          title: '小吃',
          img: snack_logo
        },
        {
          title: '水果',
          img: fruit_logo
        }
      ],
      title_cn: '吃货指南',
      title_en: 'Food-Geo Mapping',
      poem: '所爱隔山海，山海不可平。若为美食往，千里皆可行'

    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';

$bgColor:rgb(51, 51, 51);
$fontColor1:rgb(56,186, 238);
$fontColor2:rgb(255, 240, 1);
$poemColor: #BBB;

#home{
  background: $bgColor;
  height: 1000px;
  .content{
    margin: 0 auto;
    width: 500px;
    >.top{
      @include clearfix;
      >.logo{
        float: left;
        width: 110px;
        height: 110px;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      >.headline{
        float: left;
        width: 390px;
        >h1{
          font-size: 46px;
          line-height: 60px;
          margin: 10px 0 0 0 ;
          color: $fontColor1;
        }
        >h2{
          margin: 0;
          line-height: 40px;
          font-size: 30px;
          color: $fontColor2;
        }
      }
    }
    >.poem{
      font-weight: bold;
      font-size: 16px;
      line-height: 40px;
      color: $poemColor;
    }
    >.center{
      @include clearfix;
      margin: 0 auto;
      width: 343px;
      height: 205px;

      >.splice{
        float: left;
        margin: 0 70px;
        width: 3px;
        height: 100%;
        background-color: #fff;

      }

      >.classify_logo{
        cursor: pointer;
        margin-top: 20px;
        float: left;
        width: 100px;
        height: 100px;
        >img{
          width: 100%;
          height: auto;
        }
        >p{
          font-size: 30px;
          margin: 0;
        }
        &:nth-of-type(1){
          >p{
            color:$fontColor1;
          }
        }
        &:nth-of-type(2){
          >p{
            color:$fontColor2;
          }
        }

      }
    }
  }
}
</style>
