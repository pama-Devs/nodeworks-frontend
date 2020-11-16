const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    const form = new FormData();
    for(let [key, val] of Object.entries(formData)) {
        form.append(key, val);
    }
    fetch('http://localhost:1000/form', {
        method: 'POST',
        body: form
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
}

const subscribeNewsletter = (e) => {
    e.preventDefault();
    const formData = {
        email: document.getElementById('subscribe').value
    }
    const form = new FormData();
        form.append('email', formData.email);
    fetch('http://localhost:1000/subscribe', {
        method: 'POST',
        body: form
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
}