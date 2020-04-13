<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: SbcFont;
    src: url("~assets/fonts/IBMPlexSans-Text.otf") format("opentype");
  }

  @font-face {
    font-family: SbcFont;
    font-weight: bold;
    src: url("~assets/fonts/IBMPlexSans-Bold.otf") format("opentype");
  }

html {
  font-family: SbcFont, 'SF Pro Display', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #fff;
}
select, textarea, textarea.el-textarea__inner, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"] { font-size: 16px !important; }

  .page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
  .text-bold {
    font-weight: bold;
  }
  .text-violet {
    color: #900093;
  }
  .text-grey {
    color: #4F4F4F;
  }
  .text-green {
    color: #27AE60;
  }
  .text-red {
    color: #EB5757;
  }
</style>
