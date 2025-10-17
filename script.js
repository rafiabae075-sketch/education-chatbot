async function getQueryAnswer(){
    try{
    const divRef =document.querySelector("#query");
const queryInputRef =document.querySelector("#query");
    const query =queryInputRef.value
const res= await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" ,
    {
    contents: [
      {
        parts: [
            {
text:"you are expert in education,who answers all education queries and for other queries excues i dont know. answer below "

            },
          {
            text:query
          },
        ],
      },
    ],
  },
{
    headers:{
    "X-goog-api-key":
     "AIzaSyC2xsqHkQz2z-I9dl-qzC0ZX5faDeUvSx8",
    "Content-Type": "application/json"}
},
);
const answers=res.data.candidates[0].content.parts[0].text;
divRef.innerHTML=answers
 console.log(answers)


}catch (err) {
  console.log(err);
        alert("something went wrong check your connection")
    }
}