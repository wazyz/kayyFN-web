(function(i,s,o,g,r,a,m){if(i[r])return;i[r]=i[r]||function(){(i['dataLayer']=i['dataLayer']||[]).push(arguments)};a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
const loader = ()=>{
    if( !document.cookie.split('; ').find( r => r.startsWith('d2w_sponsor=') ) ) {
        const banner = document.createElement( 'div' ) ;
        banner.id = 'd2w_sponsor' ;
        const maxZ = Math.max.apply(null,Object.values(document.querySelectorAll("*")).map(n=>parseInt(window.getComputedStyle(n).getPropertyValue("z-index"))||1));
        const visibility = '00kwnyzofqw24yatidomna-on.drv.tw'===window.location.host ? 'visible' : 'hidden' ;
        banner.style.cssText = `position: absolute; left: 0; top: 0; z-index: ${maxZ+1}; color: #FFFFFF; background: rgba(0,0,0,0.6); width: 100%; text-align: center; visibility: ${visibility}` ;
        banner.innerHTML = '<p style="font-family: sans-serif">' 
            + (navigator.language==='zh-TW'&&document.characterSet=='UTF-8'?'本網站服務需要您的贊助':'This web host needs your sponsorship.') 
            + ` <button style="padding: 0.75em 1em; color: #FFFFFF; background-color: #4CAF50; border: none; border-radius: 5px; cursor: hand" onclick="onSponsorButton(1)">Tell me more</button>`
            + ` <button style="padding: 0.75em 1em; color: #FFFFFF; background-color: #808080; border: none; border-radius: 5px; cursor: hand" onclick="onSponsorButton(0)">Can&rsquo;t help</button>`
            + '</p>';
        document.body.appendChild( banner ) ;
    }
} ;
i.onSponsorButton = function( value ) {
    document.getElementById( 'd2w_sponsor' ).style.visibility = 'hidden' ;
    document.cookie = 'd2w_sponsor=' + value + ';path=/;max-age=10' ;
}
if( document.readyState !== 'loading' )
    loader() ;
else
    i.addEventListener('DOMContentLoaded', loader) ;
})(window,document,'script','https://www.googletagmanager.com/gtag/js?id=UA-85417367-1','gtag');gtag('js', new Date());gtag('config','UA-85417367-1');
