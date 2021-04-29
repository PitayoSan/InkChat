<template>
    <div class="columns is-multiline">
        <div class="column is-12" v-for="group of groups" :key="group.usernames">
            <div class="card">
                <div class="card-content">
                    <div class="media flex-container">
                        <div class="media-left v-align">
                            <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content v-align">
                            <p class="title is-4">{{group.name}}</p>
                            <p class="description is-4">{{group.description}}</p>
                        </div>
                        </div>

                        <div class="columns">
                            <div class="column is-6">
                                <b-button expanded type="is-info is-light">Chatear</b-button>    
                            </div>
                            <div class="column is-6">
                                <b-button expanded type="is-danger is-light">Eliminar</b-button>
                            </div>
                            
                        </div>
                </div>
    </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "Groups",
    data() {
        return {
            groups: [
                {
                    name: "Hentai Simulator 7",
                    description: "Proyecto de Ken",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    name: "ISC en Drogas",
                    description: "Aquí no se venden drogas",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    name: "La Banda Gangrena",
                    description: "Aquí sí se venden drogas",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                },
                {
                    name: "Tianguis Tec",
                    description: "Aquí se vende todo menos drogas (tal vez)",
                    icon: "https://bulma.io/images/placeholders/96x96.png",
                }
            ]
        }
    }
}
</script>