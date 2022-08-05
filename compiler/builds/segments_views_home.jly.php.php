<?php class_exists('Jolly\Engine') or exit; ?>
<html>
<head>
    <title><?php echo setting('app.title', 'Solo & Boutique Bar Association'); ?></title>
    <meta charset="utf-8">
    <html lang="" data-theme="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,maximum-scale=1,user-scalable=0">
    <link rel="icon" href="<?php echo url('assets/frontend/img/favicon.png'); ?>">

    
      <link href=" <?php echo url('assets/frontend/js/app.186570a1.js'); ?> " rel="preload" as="script">
      <link href=" <?php echo url('assets/frontend/js/chunk-vendors.8af9899c.js'); ?> " rel="preload" as="script">
      <link href=" <?php echo url('assets/frontend/css/app.7c513575.css'); ?> " rel="stylesheet">
      <link rel="stylesheet" type="text/css" href=" <?php echo url('assets/frontend/css/chunk-10e6a05d.0a76f51e.css'); ?> ">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href=" <?php echo url('assets/frontend/css/landing.css'); ?> ">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


        <!-- <link rel="stylesheet" href="<?php echo url('assets/css/welcome.css'); ?>" /> -->
    </head>
    <body>
        <noscript><strong>We're sorry but Bizfluence doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
      <div id="app">
         <div>
            <div data-v-88cae4b0="" class="ui-landing">
               <div data-v-4031e0bf="" data-v-88cae4b0="" class="ui-wrapper-navbar">
                  <div data-v-4031e0bf="" class="ui-wrapper-navbar__inner">
                     <span data-v-4031e0bf="" class="navbar-logo__span" style="color:#ec1f27;text-align: center;">
                        <a href="<?php echo url('/'); ?>" class="logo_hover">
                           <!-- <img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png'); ?>" alt="logo" class="navbar-logo"> -->
                           <h5>SOLO & BOUTIQUE<br>BAR ASSOCIATION</h5>
                           
                        </a>
                     </span>
                     <div data-v-4031e0bf="">
                        <a href="<?php echo route('auth.sign-up'); ?>" data-v-4031e0bf="" class="ui-btn ui-btn__outline" style="padding:5px;padding-left: 20px;padding-right: 20px;">Sign Up</a>
                     </div>
                  </div>
               </div>
               


        <div class="bg-dark">
    <div class="">
        <section class="section1">
        <div class="section1__inner">
             <div class="section1__inner-txt">
                <h1>Have Fun & Get More Referrals</h1>
                <h2 class="home-subtitle">SBBA is a free bar association for solo and boutique law firms that provide services to companies. Enjoy social events and benefit from referrals from other members.</h2>
            </div>
            <div class="section1__inner-img"><img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-02.jpg'); ?>"></div>
        </div>
        </section>

        <section class="section2">
            <div class="section1__inner">
                <div class="section1__inner-img"><img src="<?php echo url('assets/frontend/img/cities1.png'); ?>"></div>
                <div class="section1__inner-txt">
                    <h1>Where Are We?</h1>
                    <h2 class="home-subtitle">We’ve started in <?php echo strtolower(convert_number(count($cities))); ?>  cities. Choose a city and sign up. We’ll alert you when we have networking events near you!</h2>
                    <h3 class="choose-city-label">  
                        <select class="city-options city_name" name="city_name" id="city_name" required>
                            <option value="" >Select</option>
                            <?php foreach($cities as $city) { ?>
                            <option value="<?php echo $city->id; ?>"><?php echo $city->name; ?></option>
                            <?php } ?>
                        </select>
                    </h3>
                </div>
            </div>
        </section>

        <section class="section3">
        <div class="section1__inner">
             <div class="section1__inner-txt">
                <h1>Keep Me In The Loop</h1>
                <h2 class="home-subtitle">Sign-up today — we’ll get you out of the office (or off the laptop) and have a beverage in your hand in no time. Let's have fun! And make getting referrals easier for all of us.</h2>
                <a href="<?php echo route('auth.sign-up'); ?>" class="ui-btn home-signup-footer">Sign Up</a>
            </div>
            <div class="section1__inner-img"></div>
        </div>
        </section>
    </div>
</div>
            
    <section data-v-3c12640f="" data-v-88cae4b0="" class="sectionContact">
      <div class="sectionContact__inner">
       <!-- <div data-v-3c12640f="" class="cnt-main ui-hide-mobile">
        <h1 data-v-3c12640f="">Sign Up Today!</h1>
        <button data-v-3c12640f="" class="ui-btn">Sign Up!</button>
    </div> -->
    <!-- <div data-v-3c12640f="" class="cnt-main cnt-main--mobile ui-hide-none-mobile"><img data-v-3c12640f="" src="<?php echo url('assets/frontend/img/logo.png'); ?>" class="logo"><img data-v-3c12640f="" src="<?php echo url('assets/frontend/img/img-newsletter-mobile.f57bfb75.png'); ?>" class="img"><button data-v-3c12640f="" class="ui-btn">Sign Up Today!</button></div> -->

    <div data-v-3c12640f="" class="cnt-social">
        <div class="ui-landing__footer-inner"><span class="footer-logo__span"><img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png'); ?>" alt="logo" class="footer-logo"></span></div>
        <p>Follow us on social media</p>
        <div data-v-3c12640f="">
            <a data-v-3c12640f="" href="javascript:void(0)" class="follow-ic follow-ic__fb"></a>
            <a data-v-3c12640f="" href="javascript:void(0)" class="follow-ic follow-ic__ig"></a>
            <a data-v-3c12640f="" href="javascript:void(0)" class="follow-ic follow-ic__in"></a>
            <p><a href="<?php echo route('terms-condition'); ?>" target="_blank" class="text-white">Terms & Conditions</a></p>
        </div>
    </div>
    </div>
    </section>

    <!-- <footer data-v-88cae4b0="" class="ui-landing__footer">
                  <div data-v-88cae4b0="" class="ui-landing__footer-inner"><span data-v-88cae4b0="" class="footer-logo__span"><img data-v-88cae4b0="" src="<?php echo url('assets/frontend/img/logo.png'); ?>" alt="logo" class="footer-logo"></span></div>
               </footer> -->
            </div>
         </div>
      </div>
        <script type="text/javascript">
    $(document).on('change', '.city_name', function(){        
    var city_id = this.value;
     setCookie('city_id',city_id,1);
});
    function setCookie(name, value, daysToLive) {
    // Encode value in order to escape semicolons, commas, and whitespace
    var cookie = name + "=" + encodeURIComponent(value);
    
    if(typeof daysToLive === "number") {
        /* Sets the max-age attribute so that the cookie expires
        after the specified number of days */
        cookie += "; max-age=" + (daysToLive*24*60*60);
        
        document.cookie = cookie;
    }
}
</script>
<!-- <script src="<?php echo url('assets/js/app.js'); ?>" type="text/javascript"></script> -->
    </body>
</html>







