@extends('backend/app')

@block("title") {{ setting('app.title', 'Quotations') }} @endblock

@block("styles")
@endblock

@block("content")

  <div class="card card-inverse-light-with-black-text flatten-border">
    <div class="card-header">
      Edit Subscription Plan
    </div>
    <div class="card-body">
      <form method="post" action="{{ route('admin.subscriptions.update') }}">
        <input type="hidden" name="id" value="{{ $subscription->id }}" />
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Title</label>
              <input type="text" class="form-control" name="title" value="{{ $subscription->title }}" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Description</label>
              <textarea class="form-control" name="description">{{ $subscription->description }}</textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Price</label>
              <input type="text" class="form-control" name="price" value="{{ $subscription->price }}" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label>Days</label>
              <select name="days" class="form-control">
                <option value="365" @if($subscription->days == 365): selected @endif>365 Days</option>
                <option value="30" @if($subscription->days == 30): selected @endif>30 Days</option>
                <option value="7" @if($subscription->days == 7): selected @endif>7 Days</option>
              </select>
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
@endblock