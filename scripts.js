// scripts.js

function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('mail');
    var phone = document.getElementById('telephone');
    var agentPreference = document.getElementById('agent_preference');

    // Name validation
    if (name.value.trim() === '') {
        name.setCustomValidity('Name is required.');
    } else {
        name.setCustomValidity('');
    }

    // Email validation
    if (email.value.trim() === '') {
        email.setCustomValidity('Email is required.');
    } else {
        email.setCustomValidity('');
    }

    // Phone number validation
    if (phone.value.trim() === '') {
        phone.setCustomValidity('Phone number is required.');
    } else {
        phone.setCustomValidity('');
    }

    // Agent preference validation
    if (agentPreference.value.trim() === '') {
        agentPreference.setCustomValidity('Agent preference is required.');
    } else {
        agentPreference.setCustomValidity('');
    }
    return true;
}
