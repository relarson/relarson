define(function() {
    var init = function() {

        // get tab container
        var container = document.getElementById("tabContainer");
        // set current tab
        var navitem = container.querySelector("#tabs ul li");
        //store which tab we are on
        var ident = navitem.id.split("_")[1];
        navitem.parentNode.setAttribute("data-current",ident);
        //set current tab with class of activetabheader
        navitem.setAttribute("class","tabActiveHeader");

        //hide two tab contents we don't need
        var pages = container.querySelectorAll(".tabcontent");
        for (var i = 1; i < pages.length; i++) {
            pages[i].style.display = "none";
        }

        //this adds click event to tabs
        var tabs = container.querySelectorAll("#tabs ul li");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onclick = displayTab;
        }
    }

    // on click of one of tabs
    function displayTab() {
        var current = this.parentNode.getAttribute("data-current");
        //remove class of activetabheader and hide old contents
        document.getElementById("tab_" + current).removeAttribute("class");
        document.getElementById("tabcontent_" + current).style.display="none";

        var ident = this.id.split("_")[1];
        //add class of activetabheader to new active tab and show contents
        this.setAttribute("class","tabActiveHeader");
        document.getElementById("tabcontent_" + ident).style.display="block";
        this.parentNode.setAttribute("data-current",ident);
    }
    
    return {
        init: init
    }
});

