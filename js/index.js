const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const $$$ = document.getElementById.bind(document);


const tab_item = $$$("menu");
const btn_toggle = $$$("button_nav");
const navBar = $$$("myNavBar");
const closeIcon = $$$("cancel");
const openIcon = $$$("ham");
const menuItems = document.querySelectorAll(".navbar-item");

menuItems.forEach(function(menuItem) {
    menuItem.onlclick = function toggleCollapse() {
        if (document.getElementById("menu").classList.contains("showMenu")) {
            tab_item.classList.remove("showMenu");
            closeIcon.style.display = "none";
            openIcon.style.display = "block"
        }
        else{
            tab_item.classList.add("showMenu");
            closeIcon.style.display = "block";
            openIcon.style.display = "none";
        }
        openIcon.addEventListener("click",toggleCollapse);
    }
})




$$$("buttons_submit").addEventListener('click',function() {
    var client ={
        nom_data: $$$("nom").value,
        prenom_data: $$$("prenom").value,
        email_data: $$$("email").value,
        message_data: $$$("msg").value,

        presentation: function () {
            if (this.nom_data!="" && this.prenom_data!="" && this.email_data!="" && this.message_data!="") {
                alert("Bonjour, je suis "+this.nom_data+" "+this.prenom_data+" "+", vous pouvez me contacter sur "+this.email_data);
            }
        }
    }  

    client.presentation();
})





