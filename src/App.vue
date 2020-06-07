<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
  min-width: 1250px;
  overflow-x: scroll;
}
.el-tabs__item {
  font-size: 20px !important;
  text-align: center;
  height: auto !important;
  line-height: inherit !important;
  padding-bottom: 21px !important;
  font-family: Microsoft YaHei !important;
  font-weight: 600 !important;
  // padding: 0 40px;
  width: 220px !important;
}
.el-tabs__nav {
}
.el-tabs__header {
  margin-bottom: 30px !important;
}
.el-tabs__active-bar {
  height: 8px !important;
}

.el-dialog__header {
  padding: 0 !important;
  height: 82px;
  background: linear-gradient(
    -2deg,
    rgba(47, 120, 231, 1) 0%,
    rgba(108, 173, 238, 1) 100%
  );
  line-height: 82px;

  .el-dialog__title {
    padding-left: 31px !important;
    font-size: 26px !important;
    font-family: Microsoft YaHei;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .el-dialog__headerbtn {
    font-size: 24px;
    .el-icon-close {
      color: #fff;
    }
  }
}

.el-form-item__label {
  font-size: 16px !important;
}

</style>
