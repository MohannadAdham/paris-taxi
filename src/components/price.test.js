import calculatePrice from './helpers';

test('calculates the price of a ride in a normal time', () => {
    const distance = 2;
    const startTime = "2020-07-15T13:01:17.031Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(6);
  });
  
  test('calculates the price of a ride in a busy period', () => {
    const distance = 2;
    const startTime = "2020-07-15T14:01:17.031Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(7);
  });

  test('calculates the price of a night ride', () => {
    const distance = 2;
    const startTime = "2020-07-15T22:01:17.031Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(6.5);
  });


  test('calculates the price of a ride that starts at exactly 8PM (Night time)', () => {
    const distance = 2;
    const startTime = "2020-07-15T18:00:00.000Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(6.5);
  });


  test('calculates the price of a ride that starts at exactly 6AM (Normal time)', () => {
    const distance = 2;
    const startTime = "2020-07-15T04:00:00.000Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(6);
  });

  test('calculates the price of a ride that starts at exactly 4PM (Busy time)', () => {
    const distance = 2;
    const startTime = "2020-07-15T14:00:00.000Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(7);
  });

  test('calculates the price of a ride that starts at exactly 7PM (Normal time)', () => {
    const distance = 2;
    const startTime = "2020-07-15T17:00:00.000Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(6);
  });

  test('calculates the price of a normal time ride with 0 distance', () => {
    const distance = 0;
    const startTime = "2020-07-15T7:00:00.000Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(1);
  });

  test('calculates the price of a normal time ride with a distance of exactly 1/5 of a mile', () => {
    const distance = 0.2;
    const startTime = "2020-07-15T7:00:00.000Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(1.5);
  });

  test('calculates the price of a normal time ride with a distance les than 1/5 of a mile', () => {
    const distance = 0.1;
    const startTime = "2020-07-15T7:00:00.000Z";
    const price = calculatePrice(distance, startTime);
    expect(price).toBe(1.25);
  });