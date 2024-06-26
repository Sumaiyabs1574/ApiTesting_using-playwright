import { test, expect } from "@playwright/test";
test("Create post api request using static request body", async ({request}) => {

const postApiResponse = await request.post('/booking',{

data:{

    
        "firstname": "sumaiya",
        "lastname": "habib",
        "totalprice": 1000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "super bowls"
    
}


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