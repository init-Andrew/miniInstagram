import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        "data": [
            {
                "name": "Jane Doe",
                "image": "https://picsum.photos/600/850/?image=817",
                "filter": "_1977",
                "caption": "Let me take a nap... great shot, anyway."
            },
            {
                "name": "Abida Sims",
                "image": "https://picsum.photos/600/850/?image=923",
                "filter": "aden",
                "caption": "Fabulous!! I approve the use of avatar and style!"
            },
            {
                "name": "Myrtle Terrell",
                "image": "https://picsum.photos/600/850/?image=1082",
                "filter": "brannan",
                "caption": "So neat and elegant!"
            },
            {
                "name": "Ismail Macdonald",
                "image": "https://picsum.photos/600/850/?image=1075",
                "filter": "brooklyn",
                "caption": "Such shot, many style, so bold"
            },
            {
                "name": "Shakir Chase",
                "image": "https://picsum.photos/600/850/?image=1067",
                "filter": "clarendon",
                "caption": "I think I'm crying. It's that excellent."
            },
            {
                "name": "Anne Liu",
                "image": "https://picsum.photos/600/850/?image=1062",
                "filter": "earlybird",
                "caption": "Light. Mmh wondering if this comment will hit the generateor as well..."
            },
            {
                "name": "Louie Knapp",
                "image": "https://picsum.photos/600/850/?image=1051",
                "filter": "gingham",
                "caption": "This shapes blew my mind."
            },
            {
                "name": "Neha Nolan",
                "image": "https://picsum.photos/600/850/?image=1033",
                "filter": "hudson",
                "caption": "Very thought out! Ahhhhhhh..."
            }
        ]
    },
    mutations: {
        newPost (state, message) {
            state.data[0].name = message.name;
            state.data[0].image = message.image;
            state.data[0].filter = message.filter;
            state.data[0].caption = message.caption;
        }
    }
})