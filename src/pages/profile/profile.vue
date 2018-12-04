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
            upcoming orders will be displayed here
        </div>
        <div v-if="activeTab == 'prevOrder'">
            past order will be displayed here
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
