document.getElementById("header").innerHTML=`
<a href="/" class="brand">H&#173;o&#173;ly U&#173;n&#173;b&#173;lo&#173;c&#173;k&#173;er</a>
<input id="mnavecb" type="checkbox">
<label for="mnavecb" class="mnave"><span class="mnavebutton"></span></label>
<ul class="navbar">
    <li><a href="/surf.html">W&#173;eb Pr&#173;ox&#173;ie&#173;s</a></li>
    <li><a href="/gtools.html">G&#173;a&#173;me&#173;s</a></li>
    <li><a href="/spotify.html">S&#173;poti&#173;fy</a></li>
    <li><a href="/youtube.html">Yo&#173;uT&#173;u&#173;be</a></li>
    <li><a href="/discord.html">D&#173;isc&#173;or&#173;d</a></li>
    <li><a href="/reddit.html">Re&#173;dd&#173;it</a></li>
    <!-- tabindex="0" is required on the dropdowns -->
    <li class="dropdown-parent"><a href="#">M&#173;or&#173;e <i class="fas fa-ellipsis-v"></i></a>
        <div class="dropdown-child" tabindex="0">
            <ul class="subnavbar">
                <i class="fas fa-bars"></i>
                <li><a href="/bookmarklets.html">Book&#173;mark&#173;lets</a></li>
                <li><a href="/docs.html">Docs</a></li>
                <li><a href="/faq.html">FA&#173;Q</a></li>
                <li><a href="/credits.html">Credit&#173;s</a></li>
                <li><a href="/terms.html">TO&#173;S</a></li>
            </ul>
        </div>
    </li>
    <li class="dropdown-parent"><a href="#">Settings <i class="fas fa-cog"></i></a>
        <div class="dropdown-child" tabindex="0">
            <div id="csel"></div>
        </div>
    </li>
</ul>
`;