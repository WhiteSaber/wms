<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div style="display: flex; margin-top: 5px; margin-right: 10px;">
        <el-image
          @click="zdhBtn"
          style="width: 20px; height: 20px; cursor: pointer;"
          :src="require('@/assets/images/static/zdh.png')"
          v-if="!full"
        >
        </el-image>
        <el-image
          @click="qxzdhBtn"
          style="width: 20px; height: 20px; cursor: pointer;"
          :src="require('@/assets/images/static/qxzdh.png')"
          v-else
        >
        </el-image>
      </div>
      <div>
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                回到首页
              </el-dropdown-item>
            </router-link>
            <!-- <a target="_blank" href="https://github.com/iotjin/jh-vue-admin">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/zh/">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a> -->
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data() {
    return {
      //true是进入全屏，false是退出全屏
      full: false,
    };
  },
  created() {
    //指向问题先保存
    let that = this;
    //这里是监听ESC的
    window.onresize = function () {
      if (!that.checkFull()) {
        // 退出全屏后要执行的动作
        console.log("退出全屏");
        that.full = false;
      }
    };
  },
  mounted() {
    //这里是监听F11案件的
    window.addEventListener("keydown", this.KeyDown, true); // 监听按键事件
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    // 最大化按钮
    zdhBtn() {
      this.full = true;
      document.documentElement.webkitRequestFullScreen();
    },
    // 取消最大化按钮
    qxzdhBtn() {
      this.full = false;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
     //监听解决F11打开后无法esc退出同时退出全屏的按钮也失效问题。
    KeyDown(event) {
      if (event.keyCode === '122') {
        event.returnValue = false;
        this.zdhBtn(); //这里方的是触发全屏的方法
      }
    },
    //监听ESC事件，解决点击按钮全屏后按ESC退出再点击按钮不生效问题。
    checkFull() {
      //判断浏览器是否处于全屏状态 （需要考虑兼容问题）
      //火狐浏览器
      var isFull =
        document.mozFullScreen ||
        document.fullScreen ||
        //谷歌浏览器及Webkit内核浏览器
        document.webkitIsFullScreen ||
        document.webkitRequestFullScreen ||
        document.mozRequestFullScreen ||
        document.msFullscreenEnabled;
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    },
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
