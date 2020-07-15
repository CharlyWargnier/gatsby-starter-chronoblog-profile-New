---
title: The GoogleBot Checker is now available in Google Colab! 🎉
date: 2020-07-15
tags: ['post']
cover: ./image.jpg

---



Sneaky crawlers, spammers or other troublemakers are constantly accessing your website while claiming to be Googlebot (a method called [IP spoofing](https://en.wikipedia.org/wiki/IP_address_spoofing)).

  

Thus, verifying Googlebot is a cornerstone to any decent log analysis - that is, if you wanted to get your SEO metrics right! :)

  

Today I’m excited to make the [Googlebot Checker tool](https://github.com/CharlyWargnier/GooglebotChecker) I used in my server logs automation [script](https://colab.research.google.com/drive/1h3IdoDucFg7tIEiSGTjqksuNprgkcced) available separately (you can check my [Search Engine Land column](https://searchengineland.com/leverage-python-and-google-cloud-to-extract-meaningful-seo-insights-from-server-log-data-329199) for more details about automated server logs cleansing).

  

Feel free to use this anti spoofing tool in your own projects or integrate it to your own code!

  

Credit where credit is due, the notebook is an extended port of [SearchTools.io](https://www.searchtools.io/), created by the amazing [Tyler Reardon](http://tylerreardon).

### What the script does

  

As per [Google’s instructions](https://support.google.com/webmasters/answer/80553?hl=en), the script verifies that IP addresses in your uploaded .csv are genuinely from Googlebots, via a series of reverse/forward DNS lookups:

  

-   First, it runs a reverse DNS lookup on the IP addresses provided.
    
-   It then verifies that the domain name is a subdomain of either googlebot.com or google.com.
    
-   It finally runs a forward DNS lookup on the hostname and verifies it matches the original IP address.
    

  

Compared to the online version, the notebook also has a few extra tricks up its sleeve:

  

-   You can upload your own .csv and get an .csv export with the labelled results (true for genuine, false for not genuine)
    
-   The script de-dupes IP addresses before the DNS lookups, speeding up processing time + mitigating potential errors.
    

  

### Schema for CSV upload

  

Your csv can have many columns yet should contain:

  

-   One column IP addresses, named ’IP’
    
-   One column with your all user agent strings, named: ’userAgent’ (capital ‘A’)
    

  

Here’s a [sample file](https://raw.githubusercontent.com/CharlyWargnier/GooglebotChecker/master/sampleFile.csv) you can try out.

  

Note that these reverse-DNS checks are currently spanning Googlebots only. Bingbots and more user agents will be added soon.

  

Keep safe and reach out on [Twitter](https://twitter.com/DataChaz) if questions! ✌️

  
  *EDIT: This blog has been re-uploaded due to ddos attack, and was initially published on April 3rd 2020*