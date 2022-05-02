const ApiService =
    {



        fetchDataFromApi: async function fetchDataFromApi(url) {
            const httpResponse = await fetch(url, {
                method: 'GET', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(function (res) {
                console.log("res" + res);
                console.log("GET httpresponse.status" + res.status);
                return res.json();
            }).catch(function (res) {
                console.log("catch res:" + res);
            });

            return httpResponse;


            // const data =  httpResponse.json();
            // let competencies = data.query.competencies;
            // Object.keys(competencies).forEach(id => {
            //     let competency = competencies[id];
            //     console.log(competency.title, competency.foo[0]);
            // });
            // console.log("api fetch data:" + data);
            // return httpResponse;
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
                console.log("POST httpresponse.status" + res.status);
            }).catch(function (res) {
                console.log("catch res:" + res);
            })
        }
    };

export default ApiService;