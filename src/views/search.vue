<template>
    <div data-simplebar>
        <div class="top-bar">
			<router-link to="/upload">
				<i class="fas fa-camera"></i>
			</router-link>
			<img src="../assets/notig.png">
			<router-link to="/notifications">
				<i class="far fa-paper-plane"></i>
			</router-link>
		</div>
        <div class="masonry">
            <div class="item" v-for="picture in pictures"><img :src="picture"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pictures: [
                'https://picsum.photos/300/250/?image=1011',
                'https://picsum.photos/300/350/?image=1083',
                'https://picsum.photos/300/400/?image=1014',
                'https://picsum.photos/300/550/?image=1013',
                'https://picsum.photos/300/400/?image=1015',
                'https://picsum.photos/300/350/?image=1016',
                'https://picsum.photos/300/250/?image=1022',
                'https://picsum.photos/300/350/?image=1018',
                'https://picsum.photos/300/450/?image=1019',
                'https://picsum.photos/300/250/?image=1020',
                'https://picsum.photos/300/350/?image=1021',
                'https://picsum.photos/300/400/?image=1015',
                'https://picsum.photos/300/350/?image=1016',
                'https://picsum.photos/300/250/?image=1022',
                'https://picsum.photos/300/350/?image=1018',
                'https://picsum.photos/300/450/?image=1019',
                'https://picsum.photos/300/250/?image=1020',
            ]
        };
    },
    mounted() {
        var el = document.getElementsByClassName('masonry');
        el[0].style.visibility = 'visible';
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.masonry {
    visibility: hidden;
    column-count: 3;
    -moz-column-gap: 0;
    -webkit-column-gap: 0;
    column-gap: 0;
}

.item {
    border: 1px solid #dedede;
    display: inline-block;
    width: 100%;
    margin:0 0 -6px;
    transition: 1s ease all;
    -webkit-transition: 1s ease all;
    img {
        display: block;
        width: 100%;
        height: auto;
    }
}
@media (max-width: 700px) {
    .masonry {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }
}
@media (max-width: 400px) {
    .masonry {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}


</style>
