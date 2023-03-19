export async function signin_api(email,password){

    return fetch("http://127.0.0.1:8000/auth/login/", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ email, password }),

      }).then(res => res.json()).then(response => {
        console.log("response: ",response)
        return response;

      }).catch(error => {
        console.log("error: ",error.message)
        return error.message;
        
      })
}