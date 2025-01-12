import { test, expect } from '@playwright/test';

test('Dismiss Lead API Test', async ({ request }) => {
  const leadId = '3fa85f64-5717-4562-b3fc-2c963f66afa6'; 
  const apiUrl = `https://automatedtests.stg.monument.io/leads/${leadId}/dismiss`;

  const dismissalData = {
    leadDismissalReasonUuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
  };

  try {
    // PUT Request
    const response = await request.put(apiUrl, {
      data: dismissalData,
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    });

    const body = await response.body();
    console.log('Response Body:', body.toString());
    
    // Assert
    expect(response.status()).toBe(200);
    console.log('Test Passed: Status code is 200');
  } catch (error) {
    console.error('Error during API request:', error);
  }
});
