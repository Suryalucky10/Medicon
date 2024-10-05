document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const regex = /([^&=]+)=([^&]*)/g;
        let m;

        while (m = regex.exec(queryString)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        return params;
    }

    // Get user details from URL
    const params = getQueryParams();
    const name = params.name || "Not Provided"; // Default if not provided
    const age = params.age || "Not Provided"; // Example if you want to include age
    const gender = params.gender || "Not Provided"; // Example if you want to include gender
    const healthCondition = params.health || "Not Provided"; // Example if you want to include health condition
    const aadhaar = params.aadhaar || "Not Provided"; // Example for aadhaar
    const mobile = params.mobile || "Not Provided"; // Example for mobile
    const email = params.email || "Not Provided"; // Example for email
    const drivingLicense = params.dl || "Not Provided"; // Example for driving license

    // Update the HTML with user details
    document.getElementById("userName").innerText = name;
    document.getElementById("userAge").innerText = age;
    document.getElementById("userGender").innerText = gender;
    document.getElementById("userHealthCondition").innerText = healthCondition;
    document.getElementById("userAadhaar").innerText = aadhaar;
    document.getElementById("userMobile").innerText = mobile;
    document.getElementById("userEmail").innerText = email;
    document.getElementById("userDL").innerText = drivingLicense;
});
