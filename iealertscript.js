<script src="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/styles/metro/notify-metro.min.css" rel="stylesheet" /><script>
    // message displayed to user goes here
    var ieMessageToUser = "You are currently using Internet Explorer. This browser is no longer supported.\nPlease contact your I.T. Department if you need assistance installing of these recommended browsers:";
    $.notify.addStyle('notifystyles', {
      html: "<div class='clearfix'>"+
 "<div><span data-notify-text/> </div>"+
 "<div>"+
  "<div style='width:100%;margin:auto;padding:10px 0px 10px 0px'>"+
    "<div style='display:inline-block;width:50%;text-align:center'>"+
    "<a href='https://www.google.com/chrome/'>Chrome<div><img style='width:23%' src='https://phandroid.s3.amazonaws.com/wp-content/uploads/2013/12/Google_Chrome_icon.png' alt='' width='50%'></div></a>"+
    "</div>"+
    "<div style='display:inline-block;width:50%'>"+
        "<a class='browserlink' href='https://www.mozilla.org/en-US/firefox/new/'>FireFox<div><img style='width:23%' src='https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/firefox/files/2017/12/firefox-logo-300x310.png' alt='' width='50%'' ></div></a>"+
      "</div>"+
      "</div>"+
      "</div>"+
      "</div>",
        classes: {
               base: {
                    "color": "red",
                    "background-color": "#fcc8bb",
                    "font-weight": "bold",
                    "text-align":"center",
                    "padding": "10px 16px 10px 16px",
                    "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
                    "border": "4px solid #ff3300",
                    "border-radius": "4px",
                    "white-space": "nowrap",
                    "padding-left": "25px",
                    "background-repeat": "no-repeat",
                    "background-position": "3px 7px",
      },
      warn: {

        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
      },
                }
                });
    setTimeout(function() {
        var ua = window.navigator.userAgent;
        var msie = 5 //ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            //alert('Using IE');
            console.log('Using IE');
            jQuery('#body_wrapper .container:first').notify(ieMessageToUser, { position: 'bottom-center', clickToHide: true,arrowShow: false, style: 'notifystyles',autoHide: false });
        }
        else  // If another browser, return 0
        {
            //alert('not IE');
            console.log('not IE');
        }
    }, 1250);
    </script>// JavaScript Document