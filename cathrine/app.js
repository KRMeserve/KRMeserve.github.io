$(()=>{
    const arrayOfPics = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

    const quotes = ["It doesn’t matter how slow you go, as long as you don’t stop.", "Success is the sum of small efforts, repeated day-in and day-out.", 'Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day, saying, “I will try again tomorrow.”', "If it’s not exactly like you thought it would be, you think it’s a failure. What about the spectrum of colors in between.", "I love you a lot, Cathrine.", "If you don’t like something change it; if you can’t change it, change the way you think about it.", "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.", "Strive not to be a success, but rather to be of value.", "We become what we think about."]
    const authors = ["Confucius", "Robert Collier", 'Mary Anne Radmacher', "Sara Evans", "Kyle, probably said every day", "Mary Engelbreit", "Vaibhav Shah", "Albert Einstein", "Earl Nightingale"]

    const randomNumber = Math.floor(Math.random() * arrayOfPics.length) + 1;

    let quote = '';
    let author = '';

    const quoteOfTheDay = ()=>{
        // fetch('https://talaikis.com/api/quotes/random/')
        // // fetch('https://healthruwords.p.mashape.com/v1/quotes/')
        //     .then(function(response) {
        //         console.log(response);
        //         return response.json();
        // })
        //     .then(function(myJson) {
        //         console.log(myJson);
        //         console.log(JSON.stringify(myJson));
        //         $('.quote').text(myJson.quote);
        //         $('.author').text(myJson.author);
        //         return JSON.stringify(myJson);
        // });
        const randomNum = Math.floor(Math.random() * quotes.length);
        $('.quote').text(quotes[randomNum]);
        $('.author').text(authors[randomNum]);
    }

    quoteOfTheDay();

    $('.random-picture').append('<img>').attr('src', 'img/' + randomNumber + '.jpg');

    const date = new Date();
    const hourNow = date.getHours()

    if (hourNow > 17) {
        $('.greeting').text('Good Evening, Cathrine!')
    } else if (hourNow > 11) {
        $('.greeting').text('Good Afternoon, Cathrine!')
    } else {
        $('.greeting').text('Good Morning, Cathrine!')
    }


    console.log('connected');

});
