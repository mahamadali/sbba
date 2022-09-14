  @extends('app')

  @block("title") {{ 'ContactUs - '.setting('app.title', 'Ali Rocks!') }} @endblock
  @block("styles")
  @endblock
  @block("content")

  <section id="about-us" class="about-us section-bg pt-3 pb-3">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2>Contact US</h2>
      </div>
      <div class="row justify-content-center about-us-info">
        <div class="about-us-container mb-4">
          <p class="mt-3">
           <h2><a href="mailto:sbbacommunity@gmail.com.">sbbacommunity@gmail.com</a></h2>
         </p>
  </div>
</div>
</div>
</section>
@endblock
