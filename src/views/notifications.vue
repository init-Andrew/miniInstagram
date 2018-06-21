<template>
    <div class="wrapper">
        <div class="top-bar">
            <router-link to="/upload">
                <i class="fas fa-camera"></i>
            </router-link>
            <img src="../assets/notig.png">
            <router-link to="/notifications">
                <i class="far fa-paper-plane"></i>
            </router-link>
        </div>
        <ul>
            <li v-for="notification in notifications">
                <div class="avatar">
                    <div :style="'background-image:url('+ notification.image+ ');'"></div>
                </div>
                <div class="caption">
                    <strong> {{ notification.name }}</strong>
                    {{ randomAction() }}.
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            actions: [
                "liked your post",
                "started following you",
                "liked your comment",
                "tagged you in a post",
                "added a new photo",
                "send you a message"
            ],
            notifications: []
        };
    },
    created() {
        this.notifications = this.$store.state.data;
    },
    methods: {
        randomAction() {
            var actions = this.actions;
            var randomAction =
                actions[Math.floor(Math.random() * actions.length)];
            return randomAction;
        }
    }
};
</script>

<style scoped lang="scss">
.wrapper {
    display: block;
    height: calc(100% - 74px);
    overflow: hidden;
    ul {
        padding: 10px;
        li {
            margin-bottom: 2px;
            list-style: none;
            border-bottom: 1px solid #dedede;
            display: flex;
            margin: auto 10px;
            .avatar {
                overflow: hidden;
                flex: 15%;
                margin: 10px auto;
                div {
                    background-size: cover;
                    background-position: center center;
                    border-radius: 100%;
                    border: 1px solid #dedede;
                    width: 50px;
                    height: 50px;
                }
            }
            .caption {
                flex: 85%;
                margin: auto 10px;
            }
        }
    }
}
</style>
