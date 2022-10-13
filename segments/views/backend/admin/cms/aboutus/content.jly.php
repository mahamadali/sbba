@extends('backend/app')

@block("title") {{ setting('app.title') }} @endblock

@block("styles")
<link rel="stylesheet" href="https://richtexteditor.com/richtexteditor/rte_theme_default.css" />
@endblock

@block("content")

<div class="card card-inverse-light-with-black-text flatten-border">
  <form method="post" action="{{ route('admin.cms.about-us.store') }}">
    {{ prevent_csrf_field() }}
    <div class="card-header">
      About Us
    </div>
    <div class="card-body">

      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>AboutUs Content</label>
            <textarea id="about-us-content" name="content" required>{{ $aboutUsData->content }}</textarea> 
          </div>
            <!-- <input type="hidden" name="about-us-content-old" id="about-us-content-old" value="{{ $aboutUsData->content }}"> -->
        </div>
      </div>
      <div class="row mt-2">
          <div class="col">
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg">Save</button>
            </div>
          </div>
        </div>
    </div>
  </form>
</div>


@endblock

@block("scripts")
<script type="text/javascript" src="https://richtexteditor.com/richtexteditor/rte.js"></script>
<script type="text/javascript" src='https://richtexteditor.com/richtexteditor/plugins/all_plugins.js'></script>
<script>
  var editor1 = new RichTextEditor("#about-us-content");
  //var editor1_val = $('#about-us-content').html();
  //editor1.setHTMLCode();
  
</script>
@endblock