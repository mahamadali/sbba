@extends('app')

@block("title") {{ setting('app.title', 'Solo & Boutique Bar Association') }} @endblock

@block("styles")
<!-- <link rel="stylesheet" href="{{ url('assets/css/welcome.css') }}" /> -->
@endblock

@block("content")

<div class="bg-dark">
    <div class="">
        <section class="section1">
        <div class="section1__inner">
             <div class="section1__inner-txt">
                <h1>Have Fun & Get More Referrals</h1>
                <h2 class="home-subtitle">SBBA is a free bar association for solo and boutique law firms that provide services to companies. Enjoy social events and benefit from referrals from other members.</h2>
            </div>
            <div class="section1__inner-img"><img src="{{url('assets/frontend/img/Solo_Boutique_Bar_Association-02.jpg')}}"></div>
        </div>
        </section>

        <section class="section2">
            <div class="section1__inner">
                <div class="section1__inner-img"><img src="{{url('assets/frontend/img/cities1.png')}}"></div>
                <div class="section1__inner-txt">
                    <h1>Where Are We?</h1>
                    <h2 class="home-subtitle">We’ve started in {{ strtolower(convert_number(count($cities))) }}  cities. Choose a city and sign up. We’ll alert you when we have networking events near you!</h2>
                    <h3 class="choose-city-label">  
                        <select class="city-options city_name" name="city_name" id="city_name" required>
                            <option value="" >Select</option>
                            @foreach($cities as $city):
                            <option value="{{ $city->id }}">{{ $city->name }}</option>
                            @endforeach
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
                <a href="{{ route('auth.sign-up')}}" class="ui-btn home-signup-footer">Sign Up</a>
            </div>
            <div class="section1__inner-img"></div>
        </div>
        </section>
    </div>
</div>

@endblock

@block("scripts")
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
<!-- <script src="{{ url('assets/js/app.js') }}" type="text/javascript"></script> -->
@endblock