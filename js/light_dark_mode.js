function check_mode()
{
    if(sessionStorage.getItem("current_mode")===null)
    {
        sessionStorage.setItem("current_mode", "dark");
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.add("dark_mode");
        document.getElementById("mode_switcher").src = "/images/light_mode_icon.png"
    }
    else{
        if(sessionStorage.getItem("current_mode")=="light")
        {
            const body_element = document.getElementsByTagName("body")[0];
            body_element.classList.add("light_mode");
            document.getElementById("mode_switcher").src = "/images/dark_mode_icon.png"
        }
        else
        {
            const body_element = document.getElementsByTagName("body")[0];
            body_element.classList.add("dark_mode");
            document.getElementById("mode_switcher").src = "/images/light_mode_icon.png"
        }
    }
}

function switch_mode()
{
    if(sessionStorage.getItem("current_mode")=="light")
    {
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.remove("light_mode");
        body_element.classList.add("dark_mode");
        sessionStorage.setItem("current_mode", "dark")
        document.getElementById("mode_switcher").src = "/images/light_mode_icon.png"
    }
    else
    {
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.remove("dark_mode");
        body_element.classList.add("light_mode");
        sessionStorage.setItem("current_mode", "light");
        document.getElementById("mode_switcher").src = "/images/dark_mode_icon.png"
    }
}

function check_like_dislike(blog_name)
{
    check_mode();
    console.log("entered check like dislike\n");
    if(localStorage.getItem(blog_name+"_like_count")===null)
    {
        localStorage.setItem(blog_name+"_like_count", "0");
    }
    if(localStorage.getItem(blog_name+"_dislike_count")===null)
    {
        localStorage.setItem(blog_name+"_dislike_count", "0");
    }
    document.getElementById(blog_name+"_like_count").innerHTML = localStorage.getItem(blog_name+"_like_count");
    document.getElementById(blog_name+"_dislike_count").innerHTML = localStorage.getItem(blog_name+"_dislike_count");
    if(localStorage.getItem(blog_name+"_liked")===null)
    {
        localStorage.setItem(blog_name+"_liked", "0");
    }
    if(localStorage.getItem(blog_name+"_disliked")===null)
    {
        localStorage.setItem(blog_name+"_disliked", "0");
    }
    if(localStorage.getItem(blog_name+"_liked")=="1") 
    {
        document.getElementById(blog_name+"_like").classList.add("clicked");
    }
    if(localStorage.getItem(blog_name+"_disliked")=="1") 
    {
        document.getElementById(blog_name+"_dislike").classList.add("clicked");
    }
}

function like(blog_name)
{
    if(localStorage.getItem(blog_name+"_liked")=="1")
    {
        localStorage.setItem(blog_name+"_liked", "0");
        let y = parseInt(localStorage.getItem(blog_name+"_like_count"));
        y = y - 1;
        localStorage.setItem(blog_name+"_like_count", y.toString());
        document.getElementById(blog_name+"_like").classList.remove("clicked");
        document.getElementById(blog_name+"_like_count").innerHTML = localStorage.getItem(blog_name+"_like_count");
        return;
    }
    if(localStorage.getItem(blog_name+"_disliked")=="1")
    {
        let x = parseInt(localStorage.getItem(blog_name+"_dislike_count"));
        x = x-1;
        localStorage.setItem(blog_name+"_dislike_count", x.toString());
        localStorage.setItem(blog_name+"_disliked", "0");
        document.getElementById(blog_name+"_dislike").classList.remove("clicked");
        document.getElementById(blog_name+"_dislike_count").innerHTML = localStorage.getItem(blog_name+"_dislike_count");
    }
    localStorage.setItem(blog_name+"_liked", "1");
    let y = parseInt(localStorage.getItem(blog_name+"_like_count"));
    y = y + 1;
    localStorage.setItem(blog_name+"_like_count", y.toString());
    document.getElementById(blog_name+"_like").classList.add("clicked");
    document.getElementById(blog_name+"_like_count").innerHTML = localStorage.getItem(blog_name+"_like_count");
}

function dislike(blog_name)
{
    if(localStorage.getItem(blog_name+"_disliked")=="1")
    {
        localStorage.setItem(blog_name+"_disliked", "0");
        let y = parseInt(localStorage.getItem(blog_name+"_dislike_count"));
        y = y - 1;
        localStorage.setItem(blog_name+"_dislike_count", y.toString());
        document.getElementById(blog_name+"_dislike").classList.remove("clicked");
        document.getElementById(blog_name+"_dislike_count").innerHTML = localStorage.getItem(blog_name+"_dislike_count");
        return;
    }
    if(localStorage.getItem(blog_name+"_liked")=="1")
    {
        let x = parseInt(localStorage.getItem(blog_name+"_like_count"));
        x = x-1;
        localStorage.setItem(blog_name+"_like_count", x.toString());
        localStorage.setItem(blog_name+"_liked", "0");
        document.getElementById(blog_name+"_like").classList.remove("clicked");
        document.getElementById(blog_name+"_like_count").innerHTML = localStorage.getItem(blog_name+"_like_count");
    }
    localStorage.setItem(blog_name+"_disliked", "1");
    let y = parseInt(localStorage.getItem(blog_name+"_dislike_count"));
    y = y + 1;
    localStorage.setItem(blog_name+"_dislike_count", y.toString());
    document.getElementById(blog_name+"_dislike").classList.add("clicked");
    document.getElementById(blog_name+"_dislike_count").innerHTML = localStorage.getItem(blog_name+"_dislike_count");
}