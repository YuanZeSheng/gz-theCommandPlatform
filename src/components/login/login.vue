<template>
  <div class="login-wrap">
    <div class="headerBox">
      <div class="leftBox">
        <div class="logBack"></div>
        <div class="logTextBack"></div>
      </div>

      <div class="rightBox">
        <p class="tiBoxPos">
          <span class="duStyle">21<span class="iconDuStyle">°c</span></span>
          <img class="tqIconStyle" src="./images/tianqi.png" />
          <span class="tqStyleType">阴<br />天</span>
        </p>

        <p class="dateStyle">
          2020年10月08日<span class="mounTyStyle">星期五</span>
        </p>
      </div>
    </div>

    <p class="messageBox">
      <img src="./images/喇叭.png" alt="" />
      【通知】经济发展经济发展经济发展经济发展...更多
    </p>

    <div class="containerBox">
      <div class="boxStyle1">
        <div class="bo1" @click="handleChangeLoginModalFalg">
          <p class="routeJumpText">
            <span class="numberStyles">1</span>、领导服务
          </p>
        </div>
        <div class="bo2" @click="handleChangeLoginModalFalg">
          <p class="routeJumpText">
            <span class="numberStyles">2</span>、委办局服务
          </p>
        </div>
      </div>

      <div class="boxStyle2" @click="handleChangeLoginModalFalg">
        <p class="routeJumpText">
          <span class="numberStyles">3</span>、专家服务
        </p>
      </div>

      <div class="boxStyle3">
        <div class="box3Top" @click="handleChangeLoginModalFalg">
          <p class="routeJumpText">
            <span class="numberStyles">4</span>、政策导读
          </p>
        </div>

        <div class="box3Bottom">
          <div class="box3BottmLeft" @click="handleChangeLoginModalFalg">
            <p class="routeJumpText">
              <span class="numberStyles">5</span>、城市进度
            </p>
          </div>
          <div class="box3BottmRight" @click="handleChangeLoginModalFalg">
            <p class="routeJumpText">
              <span class="numberStyles">6</span>、系统说明
            </p>
          </div>
        </div>
      </div>

      <div class="boxStyle4" @click="handleChangeLoginModalFalg">
        <p class="routeJumpText">
          <span class="numberStyles">7</span>、配置管理
        </p>
      </div>
    </div>

    <div class="footerText"></div>

    <el-dialog
      :visible.sync="loginModFlag"
      width="30%"
    >
      <div class="ms-login">
        <div class="ms-title">登录</div>
        <el-form
          :model="param"
          :rules="rules"
          ref="login"
          label-width="0px"
          class="ms-content"
        >
          <el-form-item prop="userName">
            <el-input v-model="param.userName" placeholder="请输入账号">
              <el-button slot="prepend" icon="el-icon-user-solid"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="param.passWord"
              @keyup.enter.native="submitForm()"
            >
              <el-button slot="prepend" icon="el-icon-lock"></el-button>
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm()">登录</el-button>
          </div>
          <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      loginModFlag: false,
      param: {
        userName: "",
        passWord: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  watch: {
    loginModFlag() {
      this.$nextTick(() => {
        if (this.$refs.login !== undefined) {
          this.$refs.login.resetFields();
        }
      });
    }
  },
  methods: {
    handleChangeLoginModalFalg() {
      this.loginModFlag = true;
    },
    submitForm() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          let that = this;
          let param = {};
          param.userName = this.param.userName;
          param.passWord = this.param.passWord;

          this.api.relogin(param).then(function (res) {
            if (res.code == 200) {
              localStorage.setItem("ms_username", res.data.userName);
              localStorage.setItem("ms_usernameid", res.data.userId);
              localStorage.setItem("name", res.data.name);

              localStorage.setItem("accessRole", res.data.accessRole);

              that.$message.success("登录成功");
              that.$router.push("/home/index1");
            } else {
              that.$message.error(res.message);
            }
          });
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.containerBox {
  width: 100%;
  height: 552px;
  display: flex;
  justify-content: space-between;

  .boxStyle1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .bo1,
    .bo2 {
      width: 484px;
      height: 260px;
      box-sizing: border-box;
      padding: 30px;
      position: relative;
    }

    .bo1 {
      background: url("./images/服务.png") no-repeat 106px 104px #049c06;
      background-position: right 43px top 43px;
      background-repeat: no-repeat;
    }

    .bo2 {
      background: url("./images/委办局.png") no-repeat 106px 104px #603cbc;
      background-position: right 43px top 43px;
      background-repeat: no-repeat;
    }
  }

  .boxStyle2 {
    box-sizing: border-box;
    padding: 30px;
    height: 100%;
    width: 229px;
    margin: 0 30px;
    background: url("./images/专家.png") no-repeat 87px 103px #d04622;
    background-position: center 43px;
    position: relative;
  }

  .boxStyle3 {
    width: 604px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 30px;
    .box3Top {
      padding: 30px;
      box-sizing: border-box;
      position: relative;
      height: 260px;
      width: 100%;
      background: url("./images/政策.png") no-repeat 91px 103px #2a7cef;
      background-position: right 51px top 43px;
    }

    .box3Bottom {
      display: flex;
      justify-content: space-between;
      .box3BottmLeft,
      .box3BottmRight {
        position: relative;
        box-sizing: border-box;
        padding: 30px;
        width: 293px;
        height: 260px;
      }
      .box3BottmLeft {
        background: url("./images/城市.png") no-repeat 108px 102px #048a9e;
        background-position: right 40px top 38px;
      }

      .box3BottmRight {
        background: url("./images/系统.png") no-repeat 101px 101px #c2184a;
        background-position: right 46px top 39px;
      }
    }
  }

  .boxStyle4 {
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    width: 230px;
    height: 100%;
    background: url("./images/配置管.png") no-repeat 111px 105px #369b80;
    background-position: left 70px top 43px;
  }
}

.headerBox {
  display: flex;
  justify-content: space-between;
  position: relative;
  .leftBox {
    .logBack {
      margin-right: 29px;
    }
    display: flex;
  }

  .rightBox {
    position: absolute;
    right: 0;
    top: -20px;
    .tiBoxPos {
      position: relative;
      img {
        vertical-align: top;
        margin-top: 20px;
        margin-left: 10px;
        // position: absolute;
      }
      .tqStyleType {
        display: inline-block;
        margin-left: 9px;
        font-size: 20px;
        vertical-align: inherit;
      }
    }

    .dateStyle {
      margin-top: -15px;
      // position: absolute;
      font-size: 20px;
      .mounTyStyle {
        display: inline-block;
        margin-left: 15px;
      }
    }
    color: #fff;
    .tqIconStyle {
      display: inline-block;
      width: 59px;
      height: 59px;
    }
    .duStyle {
      font-family: Microsoft YaHei;
      color: #f6f8fa;
      font-size: 60px;
      .iconDuStyle {
        font-size: 48px;
      }
    }
  }
}

.messageBox {
  margin-top: 100px;
  height: 25px;
  margin-bottom: 40px;
  cursor: pointer;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 500;
  text-decoration: underline;
  color: #f6f8fa;
  img {
    margin-right: 12px;
    vertical-align: text-top;
    display: inline-block;
    width: 27px;
    height: 27px;
  }
}

.logBack {
  width: 79px;
  height: 79px;
  background: url("./images/logo.png") no-repeat;
  background-size: 100% 100%;
}

.logTextBack {
  width: 892px;
  height: 79px;
  background: url("./images/title.png") no-repeat;
  background-size: 100% 100%;
}

.login-wrap {
  box-sizing: border-box;
  padding: 76px 132px;
  position: relative;
  width: 100%;
  height: 100%;
  background: url("./images/loginBackground.png") no-repeat;
  background-size: 100% 100%;
  /* background: black; */
  /* background-image: url(../../assets/img/login-bg.jpg); */
  /* background-size: 100%; */
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: black;
  border-bottom: 1px solid #ddd;
}
/deep/ .el-dialog {
  margin-top: 20% !important;
}
/deep/ .el-dialog__body {
  position: relative;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 380px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  // background: rgba(255, 255, 255, 0.3);
  background: #fff;
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}

.routeJumpText {
  position: absolute;
  bottom: 6px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 600;
  color: #f6f8fa;
  .numberStyles {
    font-size: 48px;
    font-family: DengXian;
    font-weight: bold;
    color: #f6f8fa;
  }
}

.bo1,
.bo2,
.boxStyle2,
.box3Top,
.box3BottmLeft,
.box3BottmRight,
.boxStyle4 {
  cursor: pointer;
}

/deep/ .el-dialog__header {
  height: 0 !important;
}

/deep/ .el-dialog__body {
  padding: 0 !important;
}

/deep/ .el-dialog__headerbtn {
  display: none;
}
</style>