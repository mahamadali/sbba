@extends('backend/app')

@block("title") {{ setting('app.title', 'Templates') }} @endblock

@block("styles")
@endblock

@block("content")

  <div class="card card-inverse-light-with-black-text flatten-border">
    <div class="card-header">
      Edit Template
    </div>
    <div class="card-body">
      <form method="post" action="{{ route('admin.messagesetting.update') }}">
        <input type="hidden" name="id" value="{{ $template->id }}" />
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Title</label>
              <input type="text" class="form-control" name="title" value="{{ $template->title }}" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Content</label>
              <textarea class="form-control" name="content" id="content" cols="5" rows="5">{{ $template->content ?? '' }}</textarea>
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
      </form>
    </div>
  </div>

@endblock

@block("scripts")
<script src="https://cdn.tiny.cloud/1/1oygzsxmj2z65b12oe2xsmopyeb339ctejhzi5fgpu8ftp4r/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
<script>
// tinymce.init({
//   selector:'textarea',
//   menubar :false,
// });
</script>
@endblock