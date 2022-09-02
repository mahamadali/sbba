  @extends('app')

  @block("title") {{ 'AboutUs - '.setting('app.title', 'Ali Rocks!') }} @endblock

  @block("styles")
  <link rel="stylesheet" href="{{ url('assets/css/welcome.css') }}" />
  <style type="text/css">
    #about-us {
      /*background-color: #ec1f27;*/
      background-image: linear-gradient(110deg,#72aed9,#fefbb8);
    }
    .about-us-info {
      background-color: #fff;
      padding: 10px;
      border-radius: 10px;
    }
    .section-title {
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  </style>
  @endblock

  @block("content")

  <section id="about-us" class="about-us section-bg pt-3 pb-3">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2>ABOUT US</h2>
      </div>
      <div class="row justify-content-center about-us-info">
        <div class="about-us-container mb-4">
          <p class="mt-3">
           <h2>Who are we?</h2>
         </p>
         <p>
          Solo & Boutique Bar Association LLC (“SBBA”) is a new free bar association focusing on building personal connections and synergy between small and boutique law firms. We don’t promise CLE’s or zoom meetings, and we don’t take ourselves too seriously. But we do promise fun events that will help you foster meaningful connections. Sign up, and we’ll let you know when we have our next free event nearby!
        </p>
        <p class="mt-3">
         <h2>What do you gain from joining?</h2>
       </p>
       <p>
        Fun and hopefully making new friends and connections that are truly meaningful for your practice and career. We know the challenges lawyers at small and boutique firms face – we live them too. None of us have every area of expertise in house but working together we certainly do.
        <p class="mt-3">
          We work hard to create fun events, and events that mix practitioners from small and boutique
          firms and from compatible practice areas. We set you up for success and make it fun to
          succeed. Build your network, make friends, and have a great time.

        </p>
      </p>

      <p class="mt-3">
       <h2>What do we need from you?</h2>
     </p>
     <p>
      All we need is your openness to having a good time and trying a new way to meet some
      helpful and interesting colleagues. SBBA was started by attorneys, for attorneys, and it is all of us having fun and working together that is making it amazing. Sign up, and we’ll see you at the
      next event!
    </p>
  </div>
</div>
</div>
</section>
@endblock

@block("scripts")
<script src="{{ url('assets/js/app.js') }}" type="text/javascript"></script>
@endblock