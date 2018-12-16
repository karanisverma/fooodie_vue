<template>
<div class="profile">
<div class="wrapper">
    <section class="profile-sidebar">
        <div class="profile-details">
            <div class="avatar"></div>
                <div class="user-details-wrapper">
                <div class="email">
                    <p><span>Email : </span> testuser@gmail.com</p>
                </div>
                <div class="phone">
                    <p><span>Phone : </span>9993312277</p>
                </div>
            </div>
        </div>
        <div class="profile-menu">
            <ul>
                <li @click= "switchTab('upcomingOrder')" :class="{'current-tab' : activeTab == 'upcomingOrder'}">Upcoming Order</li>
                <li @click= "switchTab('prevOrder')" :class="{'current-tab' : activeTab == 'prevOrder'}">Previous Order</li>
                <li @click= "switchTab('savedAddress')" :class="{'current-tab' : activeTab == 'savedAddress'}">Saved Address</li>
            </ul>
        </div>
    </section>
    <section class="detail">
        <div v-if="activeTab == 'upcomingOrder'">
            <div class="orders-wrapper">
                <div class="order" v-for="order in pendingOrders" :key="order.order_id">
                    <div class="order-title">
                        <span>#{{order.order_id}}</span>
                        <span :class="[order.status.toLowerCase(),'tag']">{{order.status}}</span>
                    </div>
                    <div class="order-details">
                        <div class="time-amount-wrapper">
                            <span>Time: {{getFormattedDate(order.time)}}</span>
                            <span>Amount: {{order.paidamount}}</span>
                        </div>
                        <div class="order-item-wrapper">
                            <span>
                                Order Details:
                            </span>
                        <div class="items">
                            <div class="ordered-items" v-for ="item in order.order" :key="item.product_id">
                            <span>{{item.product_name}}</span>
                            <span>{{item.quantity}}</span>
                        </div>
                        </div>
                        </div>
                    
                        <div class="location">
                            <span>Flat Number : {{order.location.flat_number}}</span>
                            <span>Landmark : {{order.location.landmark}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTab == 'prevOrder'">
            <div class="orders-wrapper">
                <div class="order" v-for="order in previousOrders" :key="order.order_id">
                    <div class="order-title">
                        <span>#{{order.order_id}}</span>
                        <span :class="[order.status.toLowerCase(),'tag']">{{order.status}}</span>
                    </div>
                    <div class="order-details">
                        <div class="time-amount-wrapper">
                            <span>Time: {{getFormattedDate(order.time)}}</span>
                            <span>Amount: {{order.paidamount}}</span>
                        </div>
                        <div class="order-item-wrapper">
                            <span>
                                Order Details:
                            </span>
                        <div class="items">
                            <div class="ordered-items" v-for ="item in order.order" :key="item.product_id">
                            <span>{{item.product_name}}</span>
                            <span>{{item.quantity}}</span>
                        </div>
                        </div>
                        </div>
                    
                        <div class="location">
                            <span>Flat Number : {{order.location.flat_number}}</span>
                            <span>Landmark : {{order.location.landmark}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="address" v-if="activeTab == 'savedAddress'" v-for="address, i in addresses">
            <h3>{{address.flat_number}}</h3>
            <p id="full-address"></p>{{address.google_map_formatted_address}}
        </div>
    </section>
</div>
</div>
</template>

<script>
import './profile.scss'
import Profile from './profile'
export default Profile
</script>
