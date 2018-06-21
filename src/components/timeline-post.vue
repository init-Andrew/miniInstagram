<template>
    <div class="timeline-post">
        <div class="user-info">
            <div class="avatar">
                <div :style="{ 'background-image': 'url(' + image + ')' }"></div>
            </div>
            <div class="username">{{ name }}</div>
            <div class="options">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
        <figure class="photo-container" :class="filter" @dblclick="handleClick">
            <img :src="image" />
        </figure>
        <div class="description">
            <div class="likes">
                <i class="fa-heart" :class="{ far: !liked, fas: liked, active: liked }" @click="handleClick"></i>
                <strong>{{ number }} likes</strong>
            </div>
            <div class="caption">
                <strong>{{ name }}</strong> {{ caption }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },
        caption: {
            type: String
        },
        image: {
            type: String
        },
        filter: {
            type: String
        },
        hearts: {
            type: String
        }
    },
    data() {
        return {
            number: 0,
            liked: false
        };
    },
    created() {
        this.randomNumber();
    },
    methods: {
        randomNumber() {
            this.number = Math.floor(Math.random() * 1001);
            return this.number;
        },
        handleClick() {
            if (!this.liked) {
                this.liked = true;
                return this.number++;
            } else {
                this.liked = false;
                return this.number--;
            }
        }
    }
};
</script>

<style scoped lang="scss">
    .timeline-post {
        margin: 20px 0;
        border-radius: 4px;
        .user-info {
            background: #ffffff;
            display: flex;
            padding: 10px 0;
            align-items: center;
            .avatar {
                flex-basis: 10%;
                div {
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                    border-radius: 100%;
                    display: block;
                    width: 30px;
                    height: 30px;
                    margin: 0 auto;
                }
            }
            .username {
                flex-basis: 80%;
                font-weight: 600;
                font-size: 17px;
            }
            .options {
                flex-basis: 10%;
                text-align: center;
                cursor: pointer;
            }
        }
        .photo-container {
            margin:0;
            img {
                width: 100%;
                height: auto;
                display: block;
            }
        }
        .description {
            padding: 10px;
            .likes {
                display: block;
                i,
                svg {
                    height: 33px;
                    font-size: 30px;
                    display: inline-block;
                    cursor: pointer;
                    &.active {
                        color: rgb(237, 73, 86);
                        position: relative;
                        &::after{
                            content:'';
                            position: absolute;
                            border-radius: 100%;
                            animation: pulse 2s 1;
                            top:3px;
                            left:4px;
                            width:22px;
                            height: 22px;
                        }
                    }
                }
                strong {
                    font-weight: 600;
                    padding: 5px 0;
                    display: block;
                    font-size: 19px;
                }
                @-webkit-keyframes pulse {
                    0% {
                        -webkit-box-shadow: 0 0 0 0 rgba(237, 73, 86 ,0.4);
                    }
                    70% {
                        -webkit-box-shadow: 0 0 0 10px rgba(237, 73, 86 ,0);
                    }
                    100% {
                        -webkit-box-shadow: 0 0 0 0 rgba(237, 73, 86 ,0);
                    }
                }
                @keyframes pulse {
                    0% {
                        -moz-box-shadow: 0 0 0 0 rgba(237, 73, 86 ,0.4);
                        box-shadow: 0 0 0 0 rgba(237, 73, 86 ,0.4);
                    }
                    70% {
                        -moz-box-shadow: 0 0 0 10px rgba(237, 73, 86 ,0);
                        box-shadow: 0 0 0 10px rgba(237, 73, 86 ,0);
                    }
                    100% {
                        -moz-box-shadow: 0 0 0 0 rgba(237, 73, 86 ,0);
                        box-shadow: 0 0 0 0 rgba(237, 73, 86 ,0);
                    }
                }
            }
            .caption {
                font-size: 18px;
            }
        }
    }
</style>
