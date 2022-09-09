<template>
  <div>
    <!-- Nav bar -->
    <nav class="topnav">
      <div class="container">
        <a class="active" href="/">Home</a>
            <router-link class="nav-link" to="/createro">Create Work Order</router-link>
            <router-link class="nav-link" to="/viewro">View Work Orders</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
            <router-link class="nav-link" to="/invoice">Invoice</router-link>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>
.topnav {
  background-color: #000000;
  overflow: hidden;
}
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a :hover {
  background-color: darkgray;
  color: black;
}

.topnav router-link {
  float: right;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav router-link:hover {
  background-color: #ddd;
  color: white;
}
.topnav router-link.active {
  background-color: darkgray;
  color: white;
}
</style>
