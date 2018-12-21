$(()=>{
    const arrayOfPics = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

    const randomNumber = Math.floor(Math.random() * arrayOfPics.length) + 1;

    let quote = '';
    let author = '';

    const quoteOfTheDay = ()=>{
        fetch('https://talaikis.com/api/quotes/random/')
        // fetch('https://healthruwords.p.mashape.com/v1/quotes/')
            .then(function(response) {
                console.log(response);
                return response.json();
        })
            .then(function(myJson) {
                console.log(myJson);
                console.log(JSON.stringify(myJson));
                $('.quote').text(myJson.quote);
                $('.author').text(myJson.author);
                return JSON.stringify(myJson);
        });
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
