async function getData() {
    try {
      let response = await fetch('https://api-to-call.com/endpoint', { 
        method: 'POST', 
        body: JSON.stringify({id: 200}), 
        dataType: 'json'
      });
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.log(error);
    }
}

console.log(getData());
