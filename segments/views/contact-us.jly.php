  @extends('app')

  @block("title") {{ 'ContactUs - '.setting('app.title', 'Ali Rocks!') }} @endblock
  @block("styles")
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style type="text/css">
    .sectionContact
    {
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  </style>
  @endblock
  @block("content")

  <section id="about-us" class="about-us section-bg pt-3 pb-3">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="row justify-content-center about-us-info">
        <div class="about-us-container mb-4 mt-4 text-left">
          <p class="mt-3">
           <h2><a href="mailto:sbbacommunity@gmail.com."><i class="fa fa-envelope" style="font-size:28px;color:black"></i>&nbsp;sbbacommunity@gmail.com</a></h2>
         </p>
  </div>
</div>
</div>
</section>
@endblock
@block("scripts")
<script src="{{ url('assets/js/app.js') }}" type="text/javascript"></script>
@endblock