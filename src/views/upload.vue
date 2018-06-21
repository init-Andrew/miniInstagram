<template>
    <div class="wrapper">
        <div class="top-bar">
            <router-link to="/">
                <a href="#">Cancel</a>
            </router-link>
            <span class="next" @click="initFilters">{{ status }}</span>
        </div>
        <div id="upload-container">
            <div class="image-preview">
                <div class="image" :style="'background-image:url(' + preview +');'"></div>
            </div>
            <div class="upload-navigation">
                <label>
                    Upload File
                    <input type="file" accept="image/*" id="upload_image" @change="checkFile" />
                </label>
                <div id="random_image" @click="randomImage">Random Image</div>
            </div>
        </div>
        <div id="filters-container">
            <figure class="main" :class="'' + filterPreview + ''">
                <div class="image" :style="'background-image:url(' + preview +');'"></div>
            </figure>
            <div data-simplebar data-simplebar-auto-hide="false">
                <div class="choose-filter">
                    <div class="filter" v-for="filter in filters" :data-filter="filter" @click="applyFilter">
                        <p>{{ filter }}</p>
                        <figure :class="'' + filter + ''">
                            <div class="image" :style="'background-image:url(' + preview +');'"></div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div id="submit-container">
            <div class="caption-container">
                <div class="submit-photo-preview">
                    <figure :class="filterPreview">
                        <div class="image" :style="'background-image:url(' + preview + ');'"></div>
                    </figure>
                </div>
                <div class="caption">
                    <input type="text" v-model.lazy="caption" placeholder="Write a caption..." />
                </div>
            </div>
            <div class="tag-container">
                <p>
                    <i class="fas fa-user-tag"></i> Tag People
                </p>
            </div>
            <div class="location-container">
                <p>
                    <i class="fas fa-map-marker"></i> Add Location
                </p>
                <div class="location-tag-container">
                    <span class="location-tag">Asgard</span>
                    <span class="location-tag">Narnia</span>
                    <span class="location-tag">GitHub</span>
                </div>
            </div>
            <div class="other-socials">
                <div class="row">
                    <p>
                        <i class="fab fa-facebook"></i>
                        Facebook
                        <label class="switch">
                            <input type="checkbox" class="switch-input">
                            <span class="switch-label" data-on="On" data-off="Off"></span>
                            <span class="switch-handle"></span>
                        </label>
                    </p>
                </div>
                <div class="row">
                    <p>
                        <i class="fab fa-twitter"></i>
                        Twitter
                        <label class="switch">
                            <input type="checkbox" class="switch-input">
                            <span class="switch-label" data-on="On" data-off="Off"></span>
                            <span class="switch-handle"></span>
                        </label>
                    </p>
                </div>
                <div class="row">
                    <p>
                        <i class="fab fa-tumblr"></i>
                        Tumblr
                        <label class="switch">
                            <input type="checkbox" class="switch-input">
                            <span class="switch-label" data-on="On" data-off="Off"></span>
                            <span class="switch-handle"></span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from "../main";

export default {
    data() {
        return {
            images: [
                "http://dev.awesome-coding.com/ig/1.jpg",
                "http://dev.awesome-coding.com/ig/2.jpg",
                "http://dev.awesome-coding.com/ig/3.jpg",
                "http://dev.awesome-coding.com/ig/4.jpg",
                "http://dev.awesome-coding.com/ig/5.jpg",
                "http://dev.awesome-coding.com/ig/6.jpg",
                "http://dev.awesome-coding.com/ig/8.jpg",
                "http://dev.awesome-coding.com/ig/11.jpg"
            ],
            filters: [
                "_1977",
                "aden",
                "brannan",
                "brooklyn",
                "clarendon",
                "earlybird",
                "gingham",
                "hudson",
                "inkwell",
                "kelvin",
                "lark",
                "lofi",
                "maven",
                "mayfair",
                "moon",
                "nashville",
                "perpetua",
                "reyes",
                "rise",
                "slumber",
                "stinson",
                "toaster",
                "valencia",
                "walden",
                "willow",
                "xpro2"
            ],
            preview:
                "http://dev.awesome-coding.com/img_placeholder/placeholder.jpg",
            filterPreview: "aa",
            step: 0,
            status: "Next",
            caption: ""
        };
    },
    mounted() {},
    methods: {
        checkFile(e) {
            const file = e.target.files;
            if (!file.length) {
                alert("Nope!");
                return;
            }
            const fileName = file[0];
            this.showImage(fileName);
        },
        showImage(img) {
            const reader = new FileReader();
            var self = this;
            reader.onload = function() {
                var dataURL = reader.result;
                console.log(dataURL);
                self.preview = dataURL;
            };
            reader.readAsDataURL(img);
        },
        randomImage() {
            var number = Math.floor(Math.random() * this.images.length);
            this.preview = this.images[number];
        },
        initFilters() {
            if (this.step == 0) {
                var placeholder =
                    "http://dev.awesome-coding.com/img_placeholder/placeholder.jpg";
                var image = this.preview;
                if (image == placeholder) {
                    alert("Upload or select a random image!");
                    return;
                }
                var uploadContainer = document.getElementById(
                    "upload-container"
                );
                var filtersContainer = document.getElementById(
                    "filters-container"
                );
                uploadContainer.style.display = "none";
                filtersContainer.style.display = "flex";
                setTimeout(() => {
                    this.step = 1;
                }, 100);
            }
            if (this.step == 1) {
                var filtersContainer = document.getElementById(
                    "filters-container"
                );
                var submitContainer = document.getElementById(
                    "submit-container"
                );

                filtersContainer.style.display = "none";
                submitContainer.style.display = "block";

                this.status = "Share";
                setTimeout(() => {
                    this.step = 2;
                }, 100);
            }
            if (this.step == 2) {
                var obj = {
                    image: this.preview,
                    filter: this.filterPreview,
                    caption: this.caption,
                    name: "User"
                };
                this.$store.commit("newPost", obj);
                this.$router.push("/");
            }
        },
        applyFilter(e) {
            var filter = e.target.dataset.filter;
            this.filterPreview = filter.toString();
        }
    }
};
</script>

<style scoped lang="scss">
.wrapper {
    height: calc(100% - 74px);
    .top-bar {
        a {
            text-decoration: none;
            font-size: 20px;
            color: #262626;
        }
        .next {
            font-size: 20px;
            color: #3897f0;
            font-weight: 700;
            cursor: pointer;
        }
    }

    #upload-container {
        display: flex;
        flex-direction: column;
        height: calc(100% - 60px);
        .image-preview {
            width: 100%;
            display: flex;
            flex: 1;
            .image {
                background-size: cover;
                background-position: center center;
                display: block;
                width: 100%;
            }
        }
        .upload-navigation {
            border-top: 1px solid #b2b2b2;
            padding: 10px;
            width: 100%;
            background: #fafafa;
            display: flex;
            align-self: flex-end;
            justify-content: space-between;
            #random_image {
                cursor: pointer;
                padding: 6px 60px;
                color: #b2b2b2;
                background: transparent;
                border: 0;
                font-size: 18px;
                user-select: none;
                &:hover {
                    color: #262626;
                }
            }
            label {
                font-size: 18px;
                color: #b2b2b2;
                cursor: pointer;
                display: inline-block;
                overflow: hidden;
                padding: 6px 60px;
                user-select: none;
                input[type="file"] {
                    height: 0.1px;
                    width: 0.1px;
                    opacity: 0;
                    overflow: hidden;
                    position: absolute;
                    z-index: -1;
                }
                &:hover {
                    color: #262626;
                }
            }
        }
    }
    #filters-container {
        display: none;
        flex-direction: column;
        height: calc(100% - 61px);
        figure.main {
            margin: 0;
            width: 100%;
            display: flex;
            flex: 1;
        }
        .image {
            background-size: cover;
            background-position: center center;
            display: block;
            width: 100%;
        }
        .choose-filter {
            display: flex;
            flex-direction: row;
            width: 100%;
            user-select: none;
            .filter {
                padding: 0 0 5px 5px;
                cursor: pointer;
                p {
                    text-transform: capitalize;
                    text-align: center;
                    margin: 5px;
                    color: #999999;
                    pointer-events: none;
                }
                figure {
                    pointer-events: none;
                    width: 100px;
                    height: 100px;
                    margin: 0;
                    .image {
                        height: 100%;
                    }
                }
            }
        }
    }
    #submit-container {
        display: none;
        .caption-container {
            display: flex;
            padding: 10px;
            .submit-photo-preview {
                flex: 20%;
                height: 115px;
                figure {
                    margin: 0;
                    width: 100%;
                    height: 100%;
                }
                .image {
                    background-size: cover;
                    background-position: center center;
                    width: 100%;
                    height: 100%;
                }
            }
            .caption {
                flex: 80%;
                padding-left: 10px;
                input {
                    height: 55px;
                    width: 100%;
                    font-size: 20px;
                    border: 0;
                    &::-webkit-input-placeholder {
                        color: #999999;
                    }
                    &::-moz-placeholder {
                        color: #999999;
                    }
                    &:-ms-input-placeholder {
                        color: #999999;
                    }
                    &:-moz-placeholder {
                        color: #999999;
                    }
                }
            }
        }
        .tag-container {
            background: #fafafa;
            padding: 20px 0;
            border-top: 1px solid #dbdbdb;
            border-bottom: 1px solid #dbdbdb;
            p {
                background: #fff;
                border-top: 1px solid #dbdbdb;
                border-bottom: 1px solid #dbdbdb;
                padding: 15px 20px;
                margin: 0;
                font-size: 22px;
                i {
                    width: 35px;
                    padding-right: 5px;
                    color: #999999;
                }
            }
        }
        .location-container {
            @extend .tag-container;
            padding-top: 0;
            border-top: 0;
            p {
                border-top: 0;
            }
            .location-tag-container {
                background: #fff;
                border-bottom: 1px solid #dbdbdb;
                display: flex;
                padding: 10px;
                .location-tag {
                    background: #fafafa;
                    padding: 6px 25px;
                    margin-right: 15px;
                    font-size: 20px;
                    cursor: pointer;
                    user-select: none;
                    border-radius: 5px;
                }
            }
        }
        .other-socials {
            .switch {
                float: right;
                position: relative;
                vertical-align: top;
                width: 56px;
                height: 20px;
                padding: 3px;
                background-color: white;
                border-radius: 18px;
                box-shadow: inset 0 -1px white,
                    inset 0 1px 1px rgba(0, 0, 0, 0.05);
                cursor: pointer;
                background-image: -webkit-linear-gradient(
                    top,
                    #eeeeee,
                    white 25px
                );
                background-image: -moz-linear-gradient(
                    top,
                    #eeeeee,
                    white 25px
                );
                background-image: -o-linear-gradient(top, #eeeeee, white 25px);
                background-image: linear-gradient(
                    to bottom,
                    #eeeeee,
                    white 25px
                );
                .switch-input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    &:checked ~ .switch-label {
                        background: #47a8d8;
                        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15),
                            inset 0 0 3px rgba(0, 0, 0, 0.2);
                        &::before {
                            opacity: 0;
                        }
                        &::after {
                            opacity: 1;
                        }
                    }
                    &:checked ~ .switch-handle {
                        left: 40px;
                        box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2);
                    }
                }
                .switch-label {
                    position: relative;
                    display: block;
                    height: inherit;
                    font-size: 10px;
                    text-transform: uppercase;
                    background: #eceeef;
                    border-radius: inherit;
                    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12),
                        inset 0 0 2px rgba(0, 0, 0, 0.15);
                    -webkit-transition: 0.15s ease-out;
                    -moz-transition: 0.15s ease-out;
                    -o-transition: 0.15s ease-out;
                    transition: 0.15s ease-out;
                    -webkit-transition-property: opacity background;
                    -moz-transition-property: opacity background;
                    -o-transition-property: opacity background;
                    transition-property: opacity background;

                    &::before,
                    &::after {
                        position: absolute;
                        top: 50%;
                        margin-top: -0.5em;
                        line-height: 1;
                        -webkit-transition: inherit;
                        -moz-transition: inherit;
                        -o-transition: inherit;
                        transition: inherit;
                    }
                    &::before {
                        content: attr(data-off);
                        right: 11px;
                        color: #aaa;
                        text-shadow: 0 1px rgba(255, 255, 255, 0.5);
                    }
                    &::after {
                        content: attr(data-on);
                        left: 11px;
                        color: white;
                        text-shadow: 0 1px rgba(0, 0, 0, 0.2);
                        opacity: 0;
                    }
                }
                .switch-handle {
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    width: 18px;
                    height: 18px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
                    background-image: -webkit-linear-gradient(
                        top,
                        white 40%,
                        #f0f0f0
                    );
                    background-image: -moz-linear-gradient(
                        top,
                        white 40%,
                        #f0f0f0
                    );
                    background-image: -o-linear-gradient(
                        top,
                        white 40%,
                        #f0f0f0
                    );
                    background-image: linear-gradient(
                        to bottom,
                        white 40%,
                        #f0f0f0
                    );
                    -webkit-transition: left 0.15s ease-out;
                    -moz-transition: left 0.15s ease-out;
                    -o-transition: left 0.15s ease-out;
                    transition: left 0.15s ease-out;
                    &::before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin: -6px 0 0 -6px;
                        width: 12px;
                        height: 12px;
                        background: #f9f9f9;
                        border-radius: 6px;
                        box-shadow: inset 0 1px rgba(0, 0, 0, 0.02);
                        background-image: -webkit-linear-gradient(
                            top,
                            #eeeeee,
                            white
                        );
                        background-image: -moz-linear-gradient(
                            top,
                            #eeeeee,
                            white
                        );
                        background-image: -o-linear-gradient(
                            top,
                            #eeeeee,
                            white
                        );
                        background-image: linear-gradient(
                            to bottom,
                            #eeeeee,
                            white
                        );
                    }
                }
            }
            .row {
                padding: 15px 25px;
                border-bottom: 1px solid #dbdbdb;
                p {
                    padding: 0;
                    margin: 0;
                    font-size: 22px;
                }
                i {
                    width: 35px;
                    padding-right: 5px;
                    color: #999999;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>