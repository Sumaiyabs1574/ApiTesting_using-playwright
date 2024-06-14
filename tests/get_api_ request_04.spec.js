import { test, expect } from "@playwright/test";
const bookingApiRequestBody=require ("../test_data/post_request_body.json");
test("Create get api request", async ({request}) => {

const getApiResponse = await request.post('/booking',{

data:bookingApiRequestBody

})
 const bid=getApiResponse.bookingid


 const getApiResponseBody= await request.get(`b/booking/${bid}`);
await console.log(getApiResponseBody.json)

})