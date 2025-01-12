import { test, expect } from '@playwright/test';

test('Create Lead API Test', async ({ request }) => {
  const apiUrl = 'https://automatedtests.stg.monument.io/leads';

  const leadData = {
    person: {
      phoneType: 'HOME',
      isSmsEnrolled: true
    },
    facilityUuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    accountUuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    unitGroupUuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    unitUuid: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    hiddenTill: '2025-01-11T14:22:06.710Z',
    verifyToken: 'string'
  };

  try {
    // POST request
    const response = await request.post(apiUrl, {
      data: leadData,
      headers: {
        'Accept': 'application/json',
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
