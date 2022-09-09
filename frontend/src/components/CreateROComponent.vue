<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2> Create a Work Order </h2>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                <label>Work Order #:</label>
                    <input type="text" class="form-control" v-model="workorder.workOrder" >
                </div>

                <div class="form-group">
                    <label>Shop Name:</label>
                    <input type="text" class="form-control" v-model="workorder.shopName" >
                </div>

                <div class="form-group">
                    <label>First Name:</label>
                    <input type="text" class="form-control" v-model="workorder.firstName" >
                </div>

                <div class="form-group">
                    <label>Last Name:</label>
                    <input type="text" class="form-control" v-model="workorder.lastName" >
                </div>

                <div class="form-group">
                    <label>Car Make:</label>
                    <input type="text" class="form-control" v-model="workorder.carMake" >
                </div>

                <div class="form-group">
                    <label>Car Model:</label>
                    <input type="text" class="form-control" v-model="workorder.carModel" >
                </div>

                <div class="form-group">
                    <label>Car Year:</label>
                    <input type="text" class="form-control" v-model="workorder.carYear" >
                </div>

                <div class="form-group">
                    <label>Car Vin:</label>
                    <input type="text" class="form-control" v-model="workorder.carVin" >
                </div>

                <div class="form-group">
                    <label>Mileage:</label>
                    <input type="text" class="form-control" v-model="workorder.mileage" >
                </div>

                <div class="form-group">
                    <label>License Plate:</label>
                    <input type="text" class="form-control" v-model="workorder.licPlate" >
                </div>

                <div class="form-group">
                    <label>Work Performed:</label>
                    <input type="text" class="form-control" v-model="workorder.workPerf" >
                </div>


                <div class="form-group">
                    <label>Total Price:</label>
                    <input type="text" class="form-control" v-model="workorder.price">
                </div>         

                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }} </li>
                    </ul>
                </p>
                <button class="btn btn-danger mt-3">Create Work Order</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: '#CreateRO',
        data() {
            return {
                errors: [],
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
        
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/workorder'; // path to database on server
 
                this.errors = []; //throw any errors
                
 
                axios.post(apiURL, this.workorder).then(() => {
                    this.$router.push('/viewro') //says go look at the /viewro view
                    this.workorder = {
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
                }).catch(errors => { //if unhandled throw errors
                    this.errors.push("There's an error submitting form." + errors.response.data);
                })
            }
        }
    }; 
  
</script>

<style scoped>
 .form-group{
     column-span: 100%;
 }
</style>
