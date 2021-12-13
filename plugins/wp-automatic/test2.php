<?php 

$wp_automatic_fb_cuser = '100009474528759';
$wp_automatic_fb_xs = '20%3ArTAkiCGfvrY0AQ%3A2%3A1623183728%3A-1%3A-1';

//curl ini
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER,0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_TIMEOUT,20);
curl_setopt($ch, CURLOPT_REFERER, 'http://www.bing.com/');
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36');
curl_setopt($ch, CURLOPT_MAXREDIRS, 5); // Good leeway for redirections.
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // Many login forms redirect at least once.
curl_setopt($ch, CURLOPT_COOKIEJAR , "cookie.txt");


//curl get
$x='error';
$url='https://www.facebook.com/100063646927208/posts/277138654417697';
curl_setopt($ch, CURLOPT_HTTPGET, 1);
curl_setopt($ch, CURLOPT_URL, trim($url));
 
// authorization again to clean group special post cookies
curl_setopt ( $ch, CURLOPT_COOKIE, 'xs=' . $wp_automatic_fb_xs . ';c_user=' . $wp_automatic_fb_cuser . ';datr=QGgFYdhWgha-QOwFUUksCDTg' );
curl_setopt ( $ch,CURLOPT_HTTPHEADER, array('sec-fetch-site: none', 'sec-fetch-mode: navigate','sec-fetch-user: ?1','sec-fetch-dest: document' ));

// new UI required headers
$headers [] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9";
$headers [] = "Sec-Fetch-User: ?1";
curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );

$exec2 = curl_exec ( $ch );

echo $exec2;
exit;
 