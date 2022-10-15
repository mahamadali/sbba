@extends('backend/app')

@block("title") {{ setting('app.title') }} @endblock

@block("styles")
@endblock

@block("content")

<div class="card card-inverse-light-with-black-text flatten-border">
  <form method="post" action="{{ route('admin.cms.footer.store') }}">
    {{ prevent_csrf_field() }}
    <div class="card-header">
      Footer
    </div>
    <div class="card-body">

      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Follow on social media link text</label>
            <input type="text" id="follow_on_social_media_line_text" name="follow_on_social_media_line_text" required value="{{ $footerData->follow_on_social_media_line_text }}" class="form-control"> 
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Follow on social media facebook link</label>
            <input type="text" id="facebook_link" name="facebook_link" value="{{ $footerData->facebook_link }}" class="form-control"> 
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Follow on social media instagram link</label>
            <input type="text" id="instagram_link" name="instagram_link" value="{{ $footerData->instagram_link }}" class="form-control"> 
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Terms & condition link</label>
            <input type="url" id="terms_and_conditions_link" name="terms_and_conditions_link" required value="{{ $footerData->terms_and_conditions_link }}" class="form-control"> 
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Privacy policy link</label>
            <input type="url" id="privacy_policy_link" name="privacy_policy_link" required value="{{ $footerData->privacy_policy_link }}" class="form-control"> 
          </div>
        </div>
      </div>

       <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Contact us link</label>
            <input type="url" id="contact_us_link" name="contact_us_link" required value="{{ $footerData->contact_us_link }}" class="form-control"> 
          </div>
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
@endblock