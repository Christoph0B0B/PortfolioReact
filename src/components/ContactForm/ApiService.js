
const ApiService =
{
    fetchDataFromApi: async function fetchDataFromApi(url) {
        const httpResponse = await fetch(url, {method: 'GET'});
        const data = await httpResponse.json();
        return data;
        // setName(data.name);
        // setEmail(data.email);
        // console.log("setName");
    },

    sendDataToApi: async function sendDataToApi(url, contact) {
        console.log("name: " + contact.name, "email: " + contact.email);
        const httpResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: new Date(), name: contact.name, email: contact.email})
        }).then(function (res) {
            console.log("res" + res);
        }).catch(function (res) {
            console.log("catch res:" + res);
        })
    }
};

export default ApiService;