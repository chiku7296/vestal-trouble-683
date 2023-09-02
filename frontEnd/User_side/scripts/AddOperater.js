let formdata=document.querySelectorAll("#OperatorForm");
console.log(formdata);
let i=0;

let baseURL = `http://localhost:8080`;
// Add an event listener to the form
document.getElementById("OperatorForm").addEventListener("submit", function (event) {
     // Prevent the default form submission
     event.preventDefault();

     // Get all the input elements within the form
     const formInputs = document.querySelectorAll("#OperatorForm input");
   
     // Create an empty object to store the form data
     const formData = {};
   
     // Iterate through the input elements and collect the data
     formInputs.forEach(input => {
       formData[input.name] = input.value;
     })
     console.log(formData)
     fetch(`${baseURL}/addOperator`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the Content-Type header for JSON data
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
              alert("Network response was not ok");
            }
            // Assuming the response contains JSON data, you can parse it
          //  return response.json();
          })
          .then((data) => {
            // Handle the response data if required
            alert("Succefully Added");
            console.log(data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the fetch request
            console.error("Fetch error:", error);
          });
})