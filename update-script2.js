// Function to update personal information
function updatePersonalInformation() {
    const profileId = document.getElementById("profileIdInfo").value;
    const newName = document.getElementById("newName").value;
    const newAge = document.getElementById("newAge").value;
    const newGender = document.getElementById("newGender").value;
    const newHealthCondition = document.getElementById("newHealthCondition").value;
    const newAadhaar = document.getElementById("newAadhaar").value;
    const newDrivingLicense = document.getElementById("newDrivingLicense").value;

    // Prepare the update payload
    const updateData = {
        profileId: profileId,
        consent: {
            code: "personal-info-update",
            version: "1.4"
        }
    };

    // Only add fields that have been filled in
    if (newName) updateData.newName = newName;
    if (newAge) updateData.newAge = newAge;
    if (newGender) updateData.newGender = newGender;
    if (newHealthCondition) updateData.newHealthCondition = newHealthCondition;
    if (newAadhaar) updateData.newAadhaar = newAadhaar;
    if (newDrivingLicense) updateData.newDrivingLicense = newDrivingLicense;

    fetch('https://dev.abdm.gov.in/api/v3/profile/update/personal-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with actual token
        },
        body: JSON.stringify(updateData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log the response data for debugging
        alert("Personal information updated successfully!");

        // Update the profile page with the new values (assumed available in the DOM)
        updateProfilePage(newName, newAge, newGender, newHealthCondition, newAadhaar, newDrivingLicense);
    })
    .catch(error => {
        console.error('Error updating personal information:', error);
        alert("Failed to update personal information.");
    });
}

// Function to update the profile page with new values
function updateProfilePage(newName, newAge, newGender, newHealthCondition, newAadhaar, newDrivingLicense) {
    // Assuming the profile page has these IDs for displaying data
    if (newName) document.getElementById("profileName").innerText = newName;
    if (newAge) document.getElementById("profileAge").innerText = newAge;
    if (newGender) document.getElementById("profileGender").innerText = newGender;
    if (newHealthCondition) document.getElementById("profileHealthCondition").innerText = newHealthCondition;
    if (newAadhaar) document.getElementById("profileAadhaar").innerText = newAadhaar;
    if (newDrivingLicense) document.getElementById("profileDrivingLicense").innerText = newDrivingLicense;
}

// Other update functions...
// (The remaining functions from the previous implementation go here)
