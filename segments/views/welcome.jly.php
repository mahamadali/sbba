@extends('app')

@block("title") {{ setting('app.title', 'Solo & Boutique Bar Association') }} @endblock

@block("styles")
<!-- <link rel="stylesheet" href="{{ url('assets/css/welcome.css') }}" /> -->

@endblock

@block("content")
<section data-v-70ba3ad3="" data-v-88cae4b0="" class="section1">
  <div data-v-70ba3ad3="" class="section1__inner">
     <div data-v-70ba3ad3="" class="section1__inner-txt">
        <h1 data-v-70ba3ad3="">{{ $HomeSectionArea->section1_heading }}</h1>
        <h2 class="home-subtitle home-page-text-color">{{ $HomeSectionArea->section1_content }}</h2>
    </div>
    <div data-v-70ba3ad3="" class="section1__inner-img" style="margin-bottom:3.5rem;margin-right:3.5rem;text-align: right;"><img data-v-70ba3ad3="" src="{{ url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png') }}" class="img-section1" style="height: 250px;
    width: 349px;"></div>
</div>
</section>
<section data-v-76520ee6="" data-v-88cae4b0="" class="section2">
  <div data-v-76520ee6="" class="section2__inner">
     <div data-v-76520ee6="" class="section2__inner-img" style="margin-bottom:1.5rem;"><img data-v-76520ee6="" src="{{url('assets/frontend/img/cities1.png')}}" class="img-section3"></div>
     <div data-v-76520ee6="" class="section2__inner-txt">
        <h1 data-v-76520ee6="">{{ $HomeSectionArea->section2_heading }}</h1>
        <?php
             $city_count = strtolower(convert_number($cities->count()));
            $new_val_section2 = str_replace("total_city", $city_count, $HomeSectionArea->section2_content);
        ?>
        <h2 class="home-page-text-color" data-v-76520ee6="">{{ $new_val_section2 }}</h2>
    </div>
    </div>
    <div class="city-dropdown">
            <h3 class="choose-city-label">  
                <select class="city-options city_name" name="city_name" id="city_name" required>
                    <option value="" >Select</option>
                    @foreach($cities as $city):
                    <option value="{{ $city->id }}">{{ $city->name }}</option>
                    @endforeach
                </select>
            </h3>
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
    <div data-v-76c57121="" class="section3__inner-img"><img data-v-76c57121="" src="{{url('assets/frontend/img/where_we_Are.jpg')}}"></div>
</div>
</section> -->
<!-- <section data-v-6c47e4b3="" data-v-88cae4b0="" class="section4"> -->

<section data-v-70ba3ad3="" data-v-88cae4b0="" class="section1">
  <div data-v-70ba3ad3="" class="section1__inner">
     <div data-v-70ba3ad3="" class="section1__inner-txt section3_inner-txt">
        <h1 data-v-70ba3ad3="">{{ $HomeSectionArea->section3_heading }}</h1>
        <h2 class="home-subtitle home-page-text-color">{{ $HomeSectionArea->section3_content }}</h2>
        <a href="{{ route('auth.sign-up')}}" class="ui-btn home-signup-footer">Sign Up</a>
    </div>
     <div data-v-70ba3ad3="" class="section1__inner-img section3__inner-img " style="margin-bottom: 7.5rem;text-align: right;margin-left: 6rem;"><img data-v-70ba3ad3="" src="{{ url('assets/frontend/img/slide3-img.png') }}" class="img-section3" style="min-width: 560px;"></div>
</div>
</section>

<!-- <section data-v-76c57121="" data-v-88cae4b0="" class="section3">
  <div data-v-6c47e4b3="" class="section4__inner" style="padding-left:12%;display: block;">
     <div data-v-6c47e4b3="" class="section4__inner-txt-top">
        <h1 data-v-6c47e4b3="">Keep Me In The Loop</h1>
    </div>
    <div data-v-6c47e4b3="" class="section4__inner-txt">
        <h2 data-v-6c47e4b3="">Sign-up today — we’ll get you out of the office (or off the laptop) and have a beverage in your hand in no time. Let's have fun! And make getting referrals easier for all of us.</h2>
        <a href="{{ route('auth.sign-up')}}" class="ui-btn home-signup-footer">Sign Up</a>
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
<div data-v-0a90d734="" class="section5__inner-img"><img data-v-0a90d734="" src="{{url('assets/frontend/img/img-section5.976d72c3.png')}}"></div>
</div>
</section>
<section data-v-462220de="" data-v-88cae4b0="" class="section6">
  <div data-v-462220de="" class="section6__inner">
   <div data-v-462220de="" class="section6__inner-img">
    <img data-v-462220de="" src="{{url('assets/frontend/img/img-section6.ef88575c.png')}}">
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
    <img data-v-a53dd7e6="" src="{{url('assets/frontend/img/img-section7-a.9b05e631.png')}}">
    <div data-v-a53dd7e6="" class="download-app"><a data-v-a53dd7e6="" href="https://play.google.com/store/apps/details?id=com.bizfluenceapp.android" target="_blank" class="googleplay"><img data-v-a53dd7e6="" src="{{url('assets/frontend/img/google-play-badge.8b39bd80.png')}}"></a><a data-v-a53dd7e6="" href="https://apps.apple.com/us/app/bizfluence-business-network/id1547006576#?platform=iphone" target="_blank" class="googleplay"><img data-v-a53dd7e6="" src="{{url('assets/frontend/img/apple-store-badge.7b489163.png')}}"></a></div>
</div>
<div data-v-a53dd7e6="" class="section7__inner-img">
    <img data-v-a53dd7e6="" src="{{url('assets/frontend/img/img-section7-b.5a307410.png')}}">
    <h2 data-v-a53dd7e6="">Desktop version is available for all users at <b data-v-a53dd7e6="">Bizfluenceapp.com</b></h2>
</div>
</div>
</section>
<section data-v-aa5528bc="" data-v-88cae4b0="" class="section8">
  <div data-v-aa5528bc="" class="section8__inner">
   <div data-v-aa5528bc="" class="section8__inner-img">
    <h1 data-v-aa5528bc="">Staying Safe</h1>
    <img data-v-aa5528bc="" src="{{url('assets/frontend/img/img-section8.e6198f00.png')}}">
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
     <img data-v-2a2ba63f="" src="{{url('assets/frontend/img/26aa59a1437d3aa73eb200ec6a94713a.png')}}">
     <h3 data-v-2a2ba63f="">Jacob Davis | CEO</h3>
     <p data-v-2a2ba63f="">Cybersecurity, EdTech, Digital Marketing Content, Strategy and Automations, Web-Dev, Cloud Solutions, AP/VR Holograms, and AI. “As small business founders ourselves we realized a void in options for social business platforms.”</p>
 </div>
 <div data-v-2a2ba63f="" class="team-wr__separator"></div>
 <div data-v-2a2ba63f="" class="team-wr__content">
     <img data-v-2a2ba63f="" src="{{url('assets/frontend/img/8a2a541ce02c894a7fb08311e879ea67.png')}}">
     <h3 data-v-2a2ba63f="">Joel Wolh | CMO</h3>
     <p data-v-2a2ba63f="">Built a successful Amazon Partner Advertising Agency. Podcaster, Speaker, Networker. Ex-Linkedin Influencer, host of Linkedin Global events. Founder of the popular Amazon PowWow events.</p>
 </div>
</div>
</div>
</section> -->

@endblock

@block("scripts")
<script type="text/javascript">
    $(document).on('change', '.city_name', function(){        
    var city_id = this.value;
     setCookie('city_id',city_id,1);
     window.location.href = '{{ route("auth.sign-up") }}';
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
<!-- <script src="{{ url('assets/js/app.js') }}" type="text/javascript"></script> -->
@endblock