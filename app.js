//Adding a event listener for 'get jokes' button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

//Function to get jokes with the API and then show them to the user.
function getJokes(e) {
    //Getting the input element.
    const number = document.querySelector('input[type="number"]').value;

    //Creating a new XHR variable.
    const xhr = new XMLHttpRequest();

    //Accessing the API to get the jokes based on the number passed by the user.
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    //Creating a function to show the jokes.
    xhr.onload = function() {
        //Creating a variable to show each joke.
        let output = '';

        //Checking if the status of the xhr is 'OK'.
        if (this.status === 200) {
            //Parsing the response to JSON.
            const response = JSON.parse(this.responseText);

            //Checking if the type of the response is 'Success'.
            if (response.type === 'success') {
                //Lopping in all responses caught.
                response.value.forEach(function(joke){
                    //Adding a new 'li' element for each joke.
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                //Showing a error message.
                output += '<li>Something went wrong</li>'
            }
        }

        //Adding all the jokes to the page.
        document.querySelector('.jokes').innerHTML = output;
    }

    //Seding all AJAX actions.
    xhr.send();

    e.preventDefault();
}