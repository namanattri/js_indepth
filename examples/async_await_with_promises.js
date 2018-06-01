//function contain an asynchronous operation
function speak(msg, timeout) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(msg+' after '+timeout+' seconds.'), timeout * 1000);
    });
}

speak('Hello world', 5).then(message => {
    console.log(message);
});

//async function containing serially running asynchronous process 
async function serialFunction() {
    console.log(await speak('Hello awaited', 5)); //will execute after 5 seconds
    console.log(await speak('Hello awaited', 10)); //will execute after 15 seconds
    console.log(await speak('Hello awaited', 2)); //will execute after 17 econds
    console.log(await speak('Hello awaited', 8)); //will execute after 25 seconds
    console.log(await speak('Hello awaited', 1)); //will execute after 26 seconds
    return true;
}

serialFunction();

//Parallel execution

//function contain an asynchronous operation
//console.log from the inside for better analysis of the async control flow
function innerSpeech(msg, timeout) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Inner speech: '+msg+' time: '+timeout);
            resolve(msg+' after '+timeout+' seconds.');
        }, timeout * 1000);
    });
}

//async function containing parallel running async processes
async function parallelFunction() {
    let result = await Promise.all([
        innerSpeech('First', 3), //will run after 3 seconds
        innerSpeech('Second', 1), //will run after 1 second
        innerSpeech('Third', 5), //will run after 5 seconds
        innerSpeech('Fourth', 2), //will run after 2 seconds
        innerSpeech('Fifth', 1) //will run after 1 seconds
    ]);
    
    console.log('Result', typeof result, JSON.stringify(result));
}

parallelFunction();
