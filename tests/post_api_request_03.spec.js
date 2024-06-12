import { test, expect } from "@playwright/test";
import{faker} from '@faker-js/faker';
 const{DateTime}=require('luxon');
test("Create post api request using dynamic request body", async ({request,baseURL}) => {

 const firstName=faker.person.firstName();
 const lasttName=faker.person.lastName();
const totalPrice= faker.number.int(1000);
 const checkInDate =DateTime.now().toFormat('yyyy-MM-dd');
 const checkOutDate =DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

//create post api request
const postApiResponse = await request.post(`/booking`,{

data:{
"firstname":firstName,
"lastname": lasttName,
"totalprice":  totalPrice,
"depositpaid": true,
"bookingdates": {
    "checkin": checkInDate,
    "checkout": checkOutDate
},
"additionalneeds": "super bowls"

}


})
await console.log(postApiResponse)
//validate status code
expect (postApiResponse.ok()).toBeTruthy();
expect (postApiResponse.status()).toBe(200);


const postApiResponseBody = await postApiResponse.json();
console.log(postApiResponseBody);

//Validate api response 
expect(postApiResponseBody.booking).toHaveProperty('firstname',firstName)
expect(postApiResponseBody.booking).toHaveProperty('lastname',lasttName)
expect(postApiResponseBody.booking. bookingdates).toHaveProperty('checkin', checkInDate)
expect(postApiResponseBody.booking. bookingdates).toHaveProperty('checkout', checkOutDate)
})