<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://www.facebook.com/5550296508/posts/10162411764306509',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
  
   
    'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    
    'sec-fetch-mode: navigate',
    'sec-fetch-user: ?1',
   
   
  		
    'cookie: datr=QGgFYdhWgha-QOwFUUksCDTg;  c_user=1475120237;xs=11%3A4kYfFwDO0Df88w%3A2%3A1635854028%3A-1%3A6570%3A%3AAcXg0r3lx3aMEQMrbN5Nf5oRdrn88_sivj7Tgd-D9BM;'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
