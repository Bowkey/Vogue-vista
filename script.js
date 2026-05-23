function sendMail(){
  let params = {
    name: document.getElementById("name").value,
    country: document.getElementById("country").value
  };

  emailjs.send("service_fw0xmth", "template_e0g7enl", params)
    .then(function(res){
      alert("success " + res.status);
    })
    .catch(function(err){
      alert("failed: " + JSON.stringify(err));
    });
}