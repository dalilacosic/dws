var title = document.getElementById("title");
var date = document.getElementById("release_date");
var poster = document.getElementById("poster_path");
var overview = document.getElementById("overview");

var submitBtn = document.getElementById("submitBtn");

//function to add things to data
function submitClick() {
    let movie = firebase.database().ref('movies');
 
    var newOne = {
        Title: title.value,
        Poster_path: poster.value,
        Release_date: date.value,
        Overview: overview.value,
       // Author: firebase.auth().currentUser.displayName ? firebase.auth().currentUser.displayName : firebase.auth().currentUser.email
    }
    movie.push(newOne);
    window.alert("Uspješno ste dodali film!");
} 


    var rootRef =  firebase.database().ref('movies');

    rootRef.on("child_added", snap => {
        var name = snap.child("Title").val();
        var date = snap.child("Release_date").val();
        var post = snap.child("Poster_path").val();
        var over = snap.child("Overview").val();
        

        $("#table_body").append("<tr style='border-bottom:0.6px solid #a25e5c;'><td style='padding-left:15px;'>"+name+ "</td><td>" + date + "</td><td><a target='_blank' style='color: #a25e5c;' href='"+post+"'>"+post+"</a></td><td style='padding: 25px 0px;padding-right: 20px;text-align:justify;'>"+over+"</td><td style='padding-right:15px;'><button class='btn btn-light' id='deleteBtn' onclick='deleteClick()'>Obriši</button></td></tr>");
    })


    function deleteClick() {

        window.alert("Obrisano");
        
    }
    
    
    
    