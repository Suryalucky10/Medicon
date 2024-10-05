// Function to update mobile number
function updateMobileNumber() {
    const profileId = document.getElementById("profileIdMobile").value;
    const newPhoneNumber = document.getElementById("newPhoneNumber").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/update/mobile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            newPhoneNumber: newPhoneNumber,
            consent: {
                code: "mobile-update",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Mobile number updated successfully!");
    })
    .catch(error => {
        console.error('Error updating mobile number:', error);
        alert("Failed to update mobile number.");
    });
}

// Function to update email address
function updateEmailAddress() {
    const profileId = document.getElementById("profileIdEmail").value;
    const newEmailAddress = document.getElementById("newEmailAddress").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/update/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            newEmailAddress: newEmailAddress,
            consent: {
                code: "email-update",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Email address updated successfully!");
    })
    .catch(error => {
        console.error('Error updating email address:', error);
        alert("Failed to update email address.");
    });
}

// Function to deactivate ABHA number
function deactivateABHA() {
    const profileId = document.getElementById("profileIdDeactivate").value;
    const reason = document.getElementById("deactivateReason").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/deactivate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            reason: reason,
            consent: {
                code: "profile-deactivate",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("ABHA number deactivated successfully!");
    })
    .catch(error => {
        console.error('Error deactivating ABHA:', error);
        alert("Failed to deactivate ABHA number.");
    });
}

// Function to reactivate ABHA number
function reactivateABHA() {
    const profileId = document.getElementById("profileIdReactivate").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/reactivate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            consent: {
                code: "profile-reactivate",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("ABHA number reactivated successfully!");
    })
    .catch(error => {
        console.error('Error reactivating ABHA:', error);
        alert("Failed to reactivate ABHA number.");
    });
}

// Function to delete ABHA number
function deleteABHA() {
    const profileId = document.getElementById("profileIdDelete").value;
    const reason = document.getElementById("deleteReason").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            reason: reason,
            consent: {
                code: "profile-delete",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("ABHA number deleted successfully!");
    })
    .catch(error => {
        console.error('Error deleting ABHA:', error);
        alert("Failed to delete ABHA number.");
    });
}

// Function to submit KYC
function reKYC() {
    const profileId = document.getElementById("profileIdKYC").value;
    const kycData = document.getElementById("kycData").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/re-kyc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            kycData: kycData,
            consent: {
                code: "kyc-update",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("KYC submitted successfully!");
    })
    .catch(error => {
        console.error('Error submitting KYC:', error);
        alert("Failed to submit KYC.");
    });
}

// Function to set password
function setPassword() {
    const profileId = document.getElementById("profileIdSet").value;
    const password = document.getElementById("newPassword").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/password/set', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            password: password,
            consent: {
                code: "password-set",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Password set successfully!");
    })
    .catch(error => {
        console.error('Error setting password:', error);
        alert("Failed to set password.");
    });
}

// Function to update password
function updatePassword() {
    const profileId = document.getElementById("profileIdUpdate").value;
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPasswordUpdate").value;

    fetch('https://dev.abdm.gov.in/api/v3/profile/password/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify({
            profileId: profileId,
            oldPassword: oldPassword,
            newPassword: newPassword,
            consent: {
                code: "password-update",
                version: "1.4"
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Password updated successfully!");
    })
    .catch(error => {
        console.error('Error updating password:', error);
        alert("Failed to update password.");
    });
}