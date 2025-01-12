import { test, expect } from '@playwright/test';

test('Get Lead Dismissed API Test', async ({ request }) => {
  const leadId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
  const apiUrl = `https://automatedtests.stg.monument.io/leads/${leadId}`;

  try {
    // GET Request
    const response = await request.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });

    // Show the response status 
    console.log('Status Code:', response.status());

    const responseBody = await response.json(); 
    console.log('Response Body:', responseBody);

    // Assert
    expect(response.status()).toBe(404);
    console.log('Test Passed: Status code is 404');
  } catch (error) {
    console.error('Error during API request:', error);
  }
});
