@extends('backend/app')

@block("title") {{ setting('app.title') }} @endblock

@block("styles")
@endblock

@block("content")

  <div class="card card-inverse-light-with-black-text flatten-border">
      <form method="post" action="{{ route('admin.homepage_sections.store_section') }}">
        {{ prevent_csrf_field() }}
    <div class="card-header">
      Home Page Section1
    </div>
    <div class="card-body">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label> Section 1 Title</label>
              <input type="text" class="form-control" name="section1_heading" value="{{ $home_area_data->section1_heading }}" required />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-group">
              <label> Section 1 Content</label>
              <textarea class="form-control" rows="5" name="section1_content" id="section1_content" required>{{ $home_area_data->section1_content }}</textarea>
            </div>
          </div>
        </div>
    </div>
     <div class="card-header">
      Home Page Section2
    </div>
     <div class="card-body">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label> Section 2 Title</label>
              <input type="text" class="form-control" name="section2_heading" value="{{ $home_area_data->section2_heading }}" required/>
            </div>
          </div>
        </div>

         <div class="row">
          <div class="col">
            <div class="form-group">
              <label> Section 2 Content</label>
              <textarea class="form-control" rows="5" name="section2_content" id="section2_content" required>{{ $home_area_data->section2_content }}</textarea>
            </div>
          </div>
        </div> 
    </div>

    <div class="card-header">
      Home Page Section3
    </div>
     <div class="card-body">
    
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label> Section 3 Title</label>
              <input type="text" class="form-control" name="section3_heading" value="{{ $home_area_data->section3_heading }}" required/>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-group">
              <label> Section 3 Content</label>
              <textarea class="form-control" rows="5" name="section3_content" id="section3_content" required>{{ $home_area_data->section3_content }}</textarea>
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