import { test, expect } from "@playwright/test";
const bookingApiRequestBody=require ("../test_data/post_request_body.json");
test("Create post api request using static request body", async ({request}) => {

const postApiResponse = await request.post('/booking',{

data:bookingApiRequestBody

})

//validate status code
expect (postApiResponse.ok()).toBeTruthy();
expect (postApiResponse.status()).toBe(200);


const postApiResponseBody = await postApiResponse.json();
console.log(postApiResponseBody);

//Validate api response 
expect(postApiResponseBody.booking).toHaveProperty('firstname','sumaiya')
expect(postApiResponseBody.booking).toHaveProperty('lastname','habib')
expect(postApiResponseBody.booking. bookingdates).toHaveProperty('checkin', '2018-01-01')
expect(postApiResponseBody.booking. bookingdates).toHaveProperty('checkout', '2019-01-01')
})