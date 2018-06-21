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
		<TimelinePost 
			v-for="post in posts"
			:name="post.name" 
			:image="post.image" 
			:filter="post.filter"
			:caption="post.caption">
		</TimelinePost>
	</div>
</template>

<script>
// @ is an alias to /src
import { bus } from '../main';
import TimelinePost from '@/components/timeline-post.vue'

export default {
	components: {
		TimelinePost
	},
	data () {
		return {
			test: 'test',
			posts: []
		}
	},
	created(){
		this.posts = this.$store.state.data;

		// with JSON
		// this.$http
        //     .get("./data.json")
        //     .then(function(data) {
        //         return data.json();
        //     })
        //     .then(function(response) {
		// 		this.posts = response.data;          
		// 	});
	},
	methods:{
		
	},
	computed:{
	}
	
}
</script>

<style lang="scss">
</style>
