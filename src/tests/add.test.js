const add = (a,b) => ( a+b );


test('Should add 2 numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});


const generateGreeting = (name) => !!name ? `Hello ${name}!` : `Hello Anonymous!` ;

test('Name should be part of Greeting', () => {
        const result = generateGreeting("chethan");
        expect(result).toBe("Hello chethan!");
});

test('if the name passed "" or null ,Anonymous should be part of Greeting', () => {
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous!");
});
