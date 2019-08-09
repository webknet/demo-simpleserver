<template>
    <div>
        <div class="pa-5 pt-5 white elevation-3">
            <h2 class="font-weight-light ml-5 mb-3">Filter</h2>
            <v-layout class="mx-2" row wrap>
                <v-flex xs12 sm3 ml-5>
                    <v-select
                        v-model="market"
                        :items="markets"
                        label="Place"
                        prepend-icon="map"
                        clear-icon='$vuetify.icons.clear'
                        clearable
                        ></v-select>
                </v-flex>
                <v-flex  xs12 sm3 ml-5>
                    <v-select
                        v-model="propertyType"
                        :items="propertyTypes"
                        label="Property type"
                        prepend-icon="location_city"
                        clear-icon='$vuetify.icons.clear'
                        clearable
                        ></v-select>
                </v-flex>
                <v-flex  xs12 sm3 ml-5>
                    <v-select
                        v-model="bedType"
                        :items="bedTypes"
                        label="Bed type"
                        prepend-icon="local_hotel"
                        clear-icon='$vuetify.icons.clear'
                        clearable
                        ></v-select>
                </v-flex>
                <v-flex xs12 sm2 class="text-right">
                    <v-btn icon @click="getItems(true)"><v-icon large>search</v-icon></v-btn>
                </v-flex>
            </v-layout>
        </div>
        <v-progress-linear            
            :indeterminate ="loading"
        ></v-progress-linear>  
        <v-container class="mt-3" grid-list-xs> 
            <div v-if="documents.length > 0">
                <div v-if="parseInt(total/totalByPage) > 1" class="text-center">
                    <v-pagination                        
                        v-model="page"
                        :length="parseInt(total/totalByPage)"
                        :total-visible="7"
                        ></v-pagination>
                </div>            
                <v-layout row wrap>
                    <v-flex xs12 md6 lg4 xl3 v-for="doc in documents" :key="doc._id">
                        <v-card max-width="400" class="ma-3" >
                            <v-img
                                height="200px"
                                class="white--text"
                                :src="doc.images.picture_url"
                                >
                                <v-card-title class="align-end fill-height">
                                    {{ doc.name }}</v-card-title>
                                    
                            </v-img>            
                            <v-card-text>                        
                                <v-layout align-center>
                                    <v-rating
                                        :value="doc.review_scores.review_scores_rating /20"
                                        color="yellow darken-3"
                                        background-color="grey darken-1"
                                        empty-icon="$vuetify.icons.ratingFull"
                                        half-increments
                                        readonly
                                        ></v-rating>
                                        <div class="grey--text ml-4">{{ doc.review_scores.review_scores_rating /20 || 'N/A' }} ({{doc.number_of_reviews}})</div>
                                </v-layout>
                                <div class="title"><v-icon color="red">bookmark_border</v-icon> {{ doc.property_type }}</div>
                                
                                <div class="cation"><v-icon color="blue-grey lighten-3">local_hotel</v-icon> {{ doc.bed_type }}</div>
                                <div class="module line-clamp mt-3">
                                    <p >{{ doc.summary }}</p>
                                </div> 
                                
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-avatar>
                                        <v-img :src="doc.host.host_picture_url"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline">
                                            {{ doc.host.host_name }}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            {{ doc.host.host_about}}
                                        </v-list-item-subtitle>                        
                                    </v-list-item-content>
                                </v-list-item> 
                                <v-list-item>
                                    <div class="module line-clamp mt-3">
                                        <p >{{ doc.access }}</p>
                                    </div> 
                                </v-list-item>
                            
                            </v-card-text>
                            <v-card-actions>
                                <v-icon>place</v-icon>
                                    <span>{{ doc.address.market}}</span>
                                <v-spacer></v-spacer>
                                <v-btn icon><v-icon color="info">bookmark</v-icon></v-btn>
                                <v-btn icon><v-icon color="orange">share</v-icon></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
                <div v-if="parseInt(total/totalByPage) > 1" class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="parseInt(total/totalByPage)"
                        :total-visible="7"
                        ></v-pagination>
                </div>
            </div>
            <div  v-else style="text-align: center;padding-top: 60px;">
                <div v-if="loading">
                    <h1 class="font-weight-light">Loading...</h1>
                </div>
                <div v-else>
                    <h1 class="font-weight-light">No data found</h1>
                    <h3 class="font-weight-light">try again</h3>
                </div>
            </div> 
        </v-container>
    </div>
</template>

<script>
    import api from '@/api'

    export default {
        data: () =>({
            loading: false,
            documents: [],
            markets: [],
            market: null,
            propertyTypes: [],
            propertyType: null,
            bedTypes: [],
            bedType: null,
            page: 1,
            total: 0,
            totalByPage: 20
        }),
        watch: {
            page() { 
                this.$vuetify.goTo(0, {duration: 500, offset: 0, easing: 'easeOutQuad'})
                this.getItems() 
            }
        },
        methods: {
            loadSelects() {
                this.distinct('address.market')
                    .then(result => this.markets = result.data)
                this.distinct('property_type')
                    .then(result => this.propertyTypes = result.data)
                this.distinct('bed_type')
                    .then(result => this.bedTypes = result.data)
                
            },
            distinct(field) {
                const query = {
                    collection: {
                        name: 'listingsAndReviews',
                        action: 'query',
                        query: 'Distinct'
                    },
                    value: {
                        field                        
                    }
                }

                return api.query(query)
            },
            getItems(initial_page) {
                this.page = initial_page ? 1 : this.page
                this.loading = true
                const filter = {}
                if (this.market) filter['address.market'] = this.market
                if (this.propertyType) filter.property_type = this.propertyType
                if (this.bedType) filter.bed_type = this.bedType

                const query = {
                    collection: {
                        name:'listingsAndReviews',
                        action: 'query',
                        query: 'Many',
                        fields: { 
                            'review_scores.review_scores_rating': 1,
                            'images.picture_url': 1,
                            'host.host_picture_url': 1,
                            'host.host_name': 1,
                            'host.host_about': 1,
                            'address.market': 1,
                            name: 1,
                            number_of_reviews: 1,
                            property_type: 1,
                            summary: 1,
                            access: 1,
                            bed_type: 1
                            } 
                    },
                    value: {
                        filter,
                        sort: {},
                        skip: (this.page * this.totalByPage) -this.totalByPage,
                        limit: this.totalByPage
                    }
                }
                
                api.query(query).then( result => {
                    this.documents = result.data.result
                    this.total = result.data.count
                    this.loading = false
                })
            }
        },
        mounted() {
            this.loadSelects();
            this.getItems(true)
            
        }
    }
</script>

<style>
    .module {
        margin: 0 0 1em 0;
        overflow: hidden;
    }
    .module p {
        margin: 0;
    }

    .line-clamp {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
    }
</style>
