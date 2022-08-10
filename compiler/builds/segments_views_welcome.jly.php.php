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
      <link rel="stylesheet" type="text/css" href=" <?php echo url('assets/frontend/css/styles.css'); ?> ">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


        <!-- <link rel="stylesheet" href="<?php echo url('assets/css/welcome.css'); ?>" /> -->
    </head>
    <body>
        <noscript><strong>We're sorry but Bizfluence doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
      <div id="app">
         <div>
            <div data-v-88cae4b0="" class="ui-landing">
               <!-- <div data-v-4031e0bf="" data-v-88cae4b0="" class="ui-wrapper-navbar">
                  <div data-v-4031e0bf="" class="ui-wrapper-navbar__inner">
                     <span data-v-4031e0bf="" class="navbar-logo__span" style="color:#ec1f27;text-align: center;">
                        <a href="<?php echo url('/'); ?>" class="logo_hover">
                            <img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png'); ?>" alt="logo" class="navbar-logo bg-white" style="border-radius:4px"> 
                        </a>
                     <h2 style="float:right;margin-top:2rem;">SOLO & BOUTIQUE BAR ASSOCIATION</h2>
                     </span>
                     <div data-v-4031e0bf="">
                        <a href="<?php echo route('landing'); ?>" data-v-4031e0bf="" class="text-white" style="padding:5px;padding-left: 20px;padding-right: 20px;">Home</a>
                        <a href="<?php echo route('about-us'); ?>" data-v-4031e0bf="" class="text-white" style="padding:5px;padding-left: 20px;padding-right: 20px;">About Us</a>
                        <a href="<?php echo route('auth.sign-up'); ?>" data-v-4031e0bf="" class="ui-btn ui-btn__outline" style="padding:5px;padding-left: 20px;padding-right: 20px;">Sign Up</a>
                     </div>
                  </div>
               </div> -->

               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                 <div class="container-fluid">
                   <a class="navbar-brand" href="<?php echo url('/'); ?>">
                      <img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png'); ?>" alt="logo" class="navbar-logo bg-white" style="border-radius:4px">
                   </a>
                     <h3 class="title_desk theme-text-red">SOLO & BOUTIQUE BAR ASSOCIATION</h3>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                     <ul class="navbar-nav">
                       <li class="nav-item">
                         <a class="nav-link <?php echo (Bones\Str::contains(request()->currentPage(), '/home')) ? 'active' : ''; ?>" aria-current="page" href="<?php echo route('landing'); ?>">Home</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link <?php echo (Bones\Str::contains(request()->currentPage(), '/about-us')) ? 'active' : ''; ?>" href="<?php echo route('about-us'); ?>">About Us</a>
                       </li>
                       <li class="nav-item">
                         <button class="btn btn-outline-danger" type="submit">Sign Up</button>
                       </li>
                     </ul>
                   </div>
                 </div>
               </nav>
               


        <section data-v-70ba3ad3="" data-v-88cae4b0="" class="section1">
  <div data-v-70ba3ad3="" class="section1__inner">
     <div data-v-70ba3ad3="" class="section1__inner-txt">
        <h1 data-v-70ba3ad3="">Who Are We?</h1>
        <h2 class="home-subtitle">We are a free bar association for solo and boutique law firms that provide services to companies. Enjoy social events and benefit from referrals from other members.</h2>
    </div>
    <div data-v-70ba3ad3="" class="section1__inner-img"><img data-v-70ba3ad3="" src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-02.jpg'); ?>"></div>
</div>
</section>
<section data-v-76520ee6="" data-v-88cae4b0="" class="section2">
  <div data-v-76520ee6="" class="section2__inner">
     <div data-v-76520ee6="" class="section2__inner-img"><img data-v-76520ee6="" src="<?php echo url('assets/frontend/img/cities1.png'); ?>"></div>
     <div data-v-76520ee6="" class="section2__inner-txt">
        <h1 data-v-76520ee6="">Where Are We?</h1>
        <h2 data-v-76520ee6="">We’ve started in <?php echo strtolower(convert_number(count($cities))); ?>  cities. Choose a city and sign up. We’ll alert you when we have networking events near you!</h2>
    </div>
    <div data-v-76520ee6="" class="section2__inner-txt-bottom">
        <h3 class="choose-city-label">  
            <select class="city-options city_name" name="city_name" id="city_name" required>
                <option value="" >Select</option>
                <?php foreach($cities as $city) { ?>
                <option value="<?php echo $city->id; ?>"><?php echo $city->name; ?></option>
                <?php } ?>
            </select>
        </h3>
        
        <!-- <div data-v-76520ee6="" class="section2__inner-txt">
            <h2 data-v-76520ee6="" style="min-width:100%">Choose a city and sign up. We’ll alert you when we have networking events near you!</h2>
        </div> -->
    </div>
</div>
</section>
<!-- <section data-v-76c57121="" data-v-88cae4b0="" class="section3">
  <div data-v-76c57121="" class="section3__inner">
     <div data-v-76c57121="" class="section3__inner-txt">
        <div data-v-76520ee6="" class="section2__inner-txt">
            <h1 data-v-76520ee6="" class="ml-3 mt-1">Build a Referral Network</h1>                        
        </div>
        <h2 class="home-subtitle">Our referral network (coming soon!) will let members easily find other members in particular practice areas. Create a firm profile. Get referrals and help fellow members.</h2>
    </div>
    <div data-v-76c57121="" class="section3__inner-img"><img data-v-76c57121="" src="<?php echo url('assets/frontend/img/where_we_Are.jpg'); ?>"></div>
</div>
</section> -->
<!-- <section data-v-6c47e4b3="" data-v-88cae4b0="" class="section4"> -->

<section data-v-70ba3ad3="" data-v-88cae4b0="" class="section1">
  <div data-v-70ba3ad3="" class="section1__inner">
     <div data-v-70ba3ad3="" class="section1__inner-txt">
        <h1 data-v-70ba3ad3="">How To Join</h1>
        <h2 class="home-subtitle">Sign-up today — we’ll get you out of the office (or off the laptop) and have a beverage in your hand in no time. Let's have fun! And make getting referrals easier for all of us.</h2>
        <a href="<?php echo route('auth.sign-up'); ?>" class="ui-btn home-signup-footer">Sign Up</a>
    </div>
    <div data-v-70ba3ad3="" class="section1__inner-img">
        
    </div>
</div>
</section>

<!-- <section data-v-76c57121="" data-v-88cae4b0="" class="section3">
  <div data-v-6c47e4b3="" class="section4__inner" style="padding-left:12%;display: block;">
     <div data-v-6c47e4b3="" class="section4__inner-txt-top">
        <h1 data-v-6c47e4b3="">Keep Me In The Loop</h1>
    </div>
    <div data-v-6c47e4b3="" class="section4__inner-txt">
        <h2 data-v-6c47e4b3="">Sign-up today — we’ll get you out of the office (or off the laptop) and have a beverage in your hand in no time. Let's have fun! And make getting referrals easier for all of us.</h2>
        <a href="<?php echo route('auth.sign-up'); ?>" class="ui-btn home-signup-footer">Sign Up</a>
    </div>
</div>
</section> -->

<!-- <section data-v-0a90d734="" data-v-88cae4b0="" class="section5">
  <div data-v-0a90d734="" class="section5__inner">
   <div data-v-0a90d734="" class="section5__inner-txt">
    <h1 data-v-0a90d734="">Networking Features</h1>
    <h2 data-v-0a90d734="">Build your own content feed with the networks that pertain to your business.</h2>
    <h2 data-v-0a90d734="">Easily reach your audience.</h2>
    <h2 data-v-0a90d734="">Filter your networks by language and geographic location.</h2>
    <h2 data-v-0a90d734="">Live chats for each network audience.</h2>
</div>
<div data-v-0a90d734="" class="section5__inner-img"><img data-v-0a90d734="" src="<?php echo url('assets/frontend/img/img-section5.976d72c3.png'); ?>"></div>
</div>
</section>
<section data-v-462220de="" data-v-88cae4b0="" class="section6">
  <div data-v-462220de="" class="section6__inner">
   <div data-v-462220de="" class="section6__inner-img">
    <img data-v-462220de="" src="<?php echo url('assets/frontend/img/img-section6.ef88575c.png'); ?>">
    <h1 data-v-462220de="">100 percent free messaging functionality</h1>
</div>
<div data-v-462220de="" class="section6__inner-txt">
    <h1 data-v-462220de="">Features In The Works</h1>
    <h2 data-v-462220de="">Integrated CRM for easy lead generation</h2>
    <h2 data-v-462220de="">Book meeting and calls</h2>
    <h2 data-v-462220de="">Buy products and services</h2>
    <h2 data-v-462220de="">Website and commerce tools</h2>
    <h2 data-v-462220de="">Recruit employees</h2>
    <h2 data-v-462220de="">Earn status through engagement</h2>
</div>
</div>
</section>
<section data-v-a53dd7e6="" data-v-88cae4b0="" class="section7">
  <div data-v-a53dd7e6="" class="section7__inner">
   <div data-v-a53dd7e6="" class="section7__inner-txt">
    <h1 data-v-a53dd7e6="">What Our Users Think</h1>
    <img data-v-a53dd7e6="" src="<?php echo url('assets/frontend/img/img-section7-a.9b05e631.png'); ?>">
    <div data-v-a53dd7e6="" class="download-app"><a data-v-a53dd7e6="" href="https://play.google.com/store/apps/details?id=com.bizfluenceapp.android" target="_blank" class="googleplay"><img data-v-a53dd7e6="" src="<?php echo url('assets/frontend/img/google-play-badge.8b39bd80.png'); ?>"></a><a data-v-a53dd7e6="" href="https://apps.apple.com/us/app/bizfluence-business-network/id1547006576#?platform=iphone" target="_blank" class="googleplay"><img data-v-a53dd7e6="" src="<?php echo url('assets/frontend/img/apple-store-badge.7b489163.png'); ?>"></a></div>
</div>
<div data-v-a53dd7e6="" class="section7__inner-img">
    <img data-v-a53dd7e6="" src="<?php echo url('assets/frontend/img/img-section7-b.5a307410.png'); ?>">
    <h2 data-v-a53dd7e6="">Desktop version is available for all users at <b data-v-a53dd7e6="">Bizfluenceapp.com</b></h2>
</div>
</div>
</section>
<section data-v-aa5528bc="" data-v-88cae4b0="" class="section8">
  <div data-v-aa5528bc="" class="section8__inner">
   <div data-v-aa5528bc="" class="section8__inner-img">
    <h1 data-v-aa5528bc="">Staying Safe</h1>
    <img data-v-aa5528bc="" src="<?php echo url('assets/frontend/img/img-section8.e6198f00.png'); ?>">
</div>
<div data-v-aa5528bc="" class="section8__inner-txt">
    <h2 data-v-aa5528bc="">Aggressive policies against scammers and spammers.</h2>
    <h2 data-v-aa5528bc="">Block users so you can’t see them and they can’t see you</h2>
    <h2 data-v-aa5528bc="">Verified profile transactions.</h2>
    <h2 data-v-aa5528bc="">Bots not tolerated.</h2>
    <h2 data-v-aa5528bc="">Request to chat.</h2>
</div>
</div>
</section>
<section data-v-2a2ba63f="" data-v-88cae4b0="" class="sectionTeam">
  <div data-v-2a2ba63f="" class="sectionTeam__inner">
   <h1 data-v-2a2ba63f="">Meet Your Team</h1>
   <div data-v-2a2ba63f="" class="team-wr">
    <div data-v-2a2ba63f="" class="team-wr__content">
     <img data-v-2a2ba63f="" src="<?php echo url('assets/frontend/img/26aa59a1437d3aa73eb200ec6a94713a.png'); ?>">
     <h3 data-v-2a2ba63f="">Jacob Davis | CEO</h3>
     <p data-v-2a2ba63f="">Cybersecurity, EdTech, Digital Marketing Content, Strategy and Automations, Web-Dev, Cloud Solutions, AP/VR Holograms, and AI. “As small business founders ourselves we realized a void in options for social business platforms.”</p>
 </div>
 <div data-v-2a2ba63f="" class="team-wr__separator"></div>
 <div data-v-2a2ba63f="" class="team-wr__content">
     <img data-v-2a2ba63f="" src="<?php echo url('assets/frontend/img/8a2a541ce02c894a7fb08311e879ea67.png'); ?>">
     <h3 data-v-2a2ba63f="">Joel Wolh | CMO</h3>
     <p data-v-2a2ba63f="">Built a successful Amazon Partner Advertising Agency. Podcaster, Speaker, Networker. Ex-Linkedin Influencer, host of Linkedin Global events. Founder of the popular Amazon PowWow events.</p>
 </div>
</div>
</div>
</section> -->
            
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
            <!-- <a data-v-3c12640f="" href="javascript:void(0)" class="follow-ic follow-ic__in"></a> -->
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
     window.location.href = '<?php echo route("auth.sign-up"); ?>';
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







