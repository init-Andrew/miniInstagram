<template>
    <div id="app">
        <transition name="component-fade" mode="out-in">
            <router-view/>
        </transition>
        <div class="bottom-navigation">
            <router-link to="/">
                <i class="fas fa-home"></i>
            </router-link>
            <router-link to="/search">
                <i class="fas fa-search"></i>
            </router-link>
            <router-link to="/upload">
                <i class="far fa-plus-square"></i>
            </router-link>
            <router-link to="/notifications">
                <i class="far fa-heart"></i>
            </router-link>
            <router-link to="/">
                <i class="far fa-circle"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
    }
};
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}
html {
    margin: 0;
    padding: 0;
    height: 100%;
}
body {
    padding: 0;
    margin: 0;
    height: 100%;
    background: #f1f1f1;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 800px;
    overflow:hidden;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    margin: 0 auto;
    color: #2c3e50;
    position: relative;
    .component-fade-enter-active{
        transition: opacity 0.15s ease;
    }
    .component-fade-enter, 
    .component-fade-leave-to{
        opacity: 0;
    }
    a{color:#2C3E50;}
    .simplebar-track{
        z-index: 11;
        cursor: pointer;
    }
    .top-bar {
        position: sticky;
        -webkit-position: sticky;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: #fafafa;
        border-bottom: 1px solid #b2b2b2;
        z-index: 10;
        img {
            display: flex;
            max-width: 160px;
            height: auto;
            margin-bottom: -5px;
        }
        i,
        svg {
            font-size: 30px;
            cursor: pointer;
        }
    }
}
.bottom-navigation {
    position: sticky;
    -webkit-position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #fafafa;
    border-top: 1px solid #b2b2b2;
    z-index: 10;
    a {
        font-weight: bold;
        color: #2c3e50;
        i,
        svg {
            font-size: 30px;
        }
        &.router-link-exact-active i{
            color: #42b983;
        }
    }
}
</style>
