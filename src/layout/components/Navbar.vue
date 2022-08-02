<template>
  <div class="navbar">
    <img src="../../assets/image/ZfXlogo.png" alt="" class="logo" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../assets/image/loginLogo.png" class="user-avatar" />
          <span class="welcome">欢迎您，</span>
          <span class="user">admin</span>
          <span class="out">退出</span>
          <i class="el-icon-caret-bottom" />
        </div>
      </el-dropdown>
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
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  overflow: hidden;
  // position: relative;
  background: #ccc;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: url('../../assets/image/bg.png') no-repeat;
  background-size: 100% 100%;
  .logo {
    width: 85px;
    margin: 12.5px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
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
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .welcome {
          position: absolute;
          right: 155px;
          color: #fff;
          bottom: 12px;
          // margin-right: 50px;
        }
        .user {
          position: absolute;
          right: 110px;
          color: #fff;
          bottom: 12px;
        }
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          margin-right: 230px;
          margin-top: 3px;
        }
        .out {
          position: absolute;
          right: 30px;
          bottom: 12px;
          font-size: 15px;
          color: #fff;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: 10px;
          top: 14px;
          font-size: 18px;
          color: #fff;
        }
      }
    }
  }
}
</style>
