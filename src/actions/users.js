import request from "superagent";

const baseUrl = "http://localhost:4000";

// google login
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export function googleLoginAction(payload) {
  return {
    type: GOOGLE_LOGIN,
    payload
  };
}

export const signUp = data => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(response => {
      console.log("Sign up response test", response);
    })
    .catch(console.error);
};

// export const LOGIN = "LOGIN";
// function doLogin(payload) {
//   return {
//     type: LOGIN,
//     payload
//   };
// }

//Works!
export const login = () => dispatch => {
  request
    .post(
      "https://dialogflow.googleapis.com/v2/projects/lifeline-82492/agent/entityTypes/cd1fd866-ec8d-4c51-b447-92be3611a6ef/entities:batchCreate"
    )
    // .set("Access-Control-Allow-Origin", "http://localhost:3000")
    .set(
      "Authorization",
      "Bearer ya29.ImC0B5Oze8wY8mbq5REDTNMhd_6xqJJmg1nqa6b_MkmriFevHn-v96adRlvZ9iOuMnCgLYKti8YV5MG3jUNjlzVjxO-etUPGGizdV5FRoUG7ri74W-TX1NHATXodKX170oQ"
    )
    .send({
      entities: [
        {
          value: "David",
          synonyms: []
        }
      ],
      languageCode: ""
    })
    .then(response => {
      console.log("response", response);
      // const action = doLogin();
      // dispatch(action);
    })
    .catch(console.error);
};