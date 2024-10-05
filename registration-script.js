// Global variable for session token
let sessionToken = '';

// Utility function to generate a UUID for API requests
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// Utility function to encrypt data before sending to the API
function encryptData(data) {
    // Placeholder for encryption logic (e.g., RSA encryption with a public key)
    // Replace this with actual encryption logic as required by your use case
    return btoa(data); // Base64 encoding for demo purposes
}

// Function to handle session generation
document.getElementById("sessionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const clientId = document.getElementById("clientId").value;
    const clientSecret = document.getElementById("clientSecret").value;

    fetch('https://dev.abdm.gov.in/api/hiecm/gateway/v3/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, clientSecret })
    })
    .then(response => response.json())
    .then(data => {
        sessionToken = data.accessToken;
        document.getElementById("sessionStatus").innerText = "Session Token Generated Successfully!";
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("sessionStatus").innerText = "Failed to generate session token.";
    });
});

// Function to generate Aadhaar OTP
function generateAadhaarOTP() {
    const aadhaarNumber = document.getElementById("aadhaarNumber").value;
    const encryptedAadhaar = encryptData(aadhaarNumber);

    fetch('https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/request/otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'REQUEST-ID': generateUUID(),
            'TIMESTAMP': new Date().toISOString()
        },
        body: JSON.stringify({
            "txnId": "", // Leave empty or manage based on state
            "scope": ["abha-enrol"],
            "loginHint": "aadhaar",
            "loginId": encryptedAadhaar,
            "otpSystem": "aadhaar"
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("OTP sent to Aadhaar-linked mobile number!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to send OTP.");
    });
}

// Function to create ABHA using Aadhaar
function createABHAViaAadhaar() {
    const txnId = ""; // Retrieve this value after generating OTP
    const otpValue = document.getElementById("aadhaarOtp").value;

    fetch('https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/enrol/byAadhar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'REQUEST-ID': generateUUID(),
            'TIMESTAMP': new Date().toISOString()
        },
        body: JSON.stringify({
            "authData": {
                "authMethods": ["otp"],
                "otp": {
                    "txnId": txnId,
                    "otpValue": encryptData(otpValue)
                }
            },
            "consent": {
                "code": "abha-enrollment",
                "version": "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("ABHA number created successfully!");
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to create ABHA.");
    });
}

// Function to generate Mobile OTP
function generateMobileOTP() {
    const mobileNumber = document.getElementById("mobileNumber").value;
    const encryptedMobile = encryptData(mobileNumber);

    fetch('https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/request/otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'REQUEST-ID': generateUUID(),
            'TIMESTAMP': new Date().toISOString()
        },
        body: JSON.stringify({
            "txnId": "",
            "scope": ["abha-enrol", "mobile-verify"],
            "loginHint": "mobile",
            "loginId": encryptedMobile,
            "otpSystem": "abdm"
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("OTP sent to the provided mobile number!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to send Mobile OTP.");
    });
}

// Function to create ABHA using Mobile Number
function createABHAViaMobile() {
    const txnId = ""; // Retrieve this value after generating OTP
    const otpValue = document.getElementById("mobileOtp").value;

    fetch('https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/enrol/byMobile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'REQUEST-ID': generateUUID(),
            'TIMESTAMP': new Date().toISOString()
        },
        body: JSON.stringify({
            "authData": {
                "authMethods": ["otp"],
                "otp": {
                    "txnId": txnId,
                    "otpValue": encryptData(otpValue)
                }
            },
            "consent": {
                "code": "abha-enrollment",
                "version": "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("ABHA number created successfully!");
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to create ABHA using Mobile.");
    });
}

// Function to generate OTP using Driving License
function generateDLOTP() {
    const dlNumber = document.getElementById("dlNumber").value;
    const encryptedDL = encryptData(dlNumber);

    fetch('https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/request/otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'REQUEST-ID': generateUUID(),
            'TIMESTAMP': new Date().toISOString()
        },
        body: JSON.stringify({
            "txnId": "",
            "scope": ["abha-enrol", "dl-flow"],
            "loginHint": "dl",
            "loginId": encryptedDL,
            "otpSystem": "abdm"
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("OTP sent to the provided driving license number!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to send Driving License OTP.");
    });
}

// Function to create ABHA using Driving License
function createABHAViaDL() {
    const txnId = ""; // Retrieve this value after generating OTP
    const otpValue = document.getElementById("dlOtp").value;

    fetch('https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/enrol/byDL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'REQUEST-ID': generateUUID(),
            'TIMESTAMP': new Date().toISOString()
        },
        body: JSON.stringify({
            "authData": {
                "authMethods": ["otp"],
                "otp": {
                    "txnId": txnId,
                    "otpValue": encryptData(otpValue)
                }
            },
            "consent": {
                "code": "abha-enrollment",
                "version": "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("ABHA number created successfully using Driving License!");
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to create ABHA using Driving License.");
    });
}

// Function to create ABHA using Demo Authentication
function createABHAViaDemo() {
    const demoDetails = document.getElementById("demoDetails").value;

    fetch('https://abhasbx.abdm.gov.in/abha/api/v3/enrollment/enrol/byDemoAuth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`,
            'REQUEST-ID': generateUUID(),
            'TIMESTAMP': new Date().toISOString()
        },
        body: JSON.stringify({
            "demoDetails": encryptData(demoDetails)
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("ABHA number created successfully using demo authentication!");
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to create ABHA using Demo Authentication.");
    });
}
