<template>
<div>
    <h1>Work Orders</h1>
      <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>WO</th>
                        <th>Shop Name</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>VIN</th>      
                        <th>Work Performed</th>                   
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="workorder in workorder" :key="workorder._id">
                        <td>{{ workorder.workOrder }}</td>
                        <td>{{ workorder.shopName }}</td>
                        <td>{{ workorder.carMake }}</td>
                        <td>{{ workorder.carModel }}</td>
                        <td>{{ workorder.carYear }}</td>
                        <td>{{ workorder.carVin }}</td>
                        <td>{{ workorder.workPerf }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>   
</template>

<script>
    import axios from "axios";

    export default {

        data() {
            return {
                workorder: {
                    workOrder: '',
                    shopName: '',
                    firstName: '',
                    lastName: '',
                    carMake: '',
                    carModel: '',
                    carYear: '',
                    carVin: '',
                    mileage: '',
                    licPlate: '',
                    workPerf:'',
                    price:''
                }
            }
        },
        created() {
            let apiURL = 'http://localhost:3000/workorder';
            axios.get(apiURL).then(res => {
                this.workorder = res.data
            }).catch(error => {
                console.log(error)
            })
        }}
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }

</style>
