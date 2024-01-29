var current_mode = 1;

function switch_mode()
{
    if(current_mode==1)
    {
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.remove("light_mode");
        body_element.classList.add("dark_mode");
        current_mode = 0;
    }
    else
    {
        const body_element = document.getElementsByTagName("body")[0];
        body_element.classList.remove("dark_mode");
        body_element.classList.add("light_mode");
        current_mode = 1;
    }
}