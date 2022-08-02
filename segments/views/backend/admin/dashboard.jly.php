@extends('backend/app')

@block("title") {{ setting('app.title') }} @endblock

@block("styles")

@endblock

@block("content")

<div class="row">
  <div class="col-md-12 grid-margin">
    <div class="row">
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Welcome {{ auth()->full_name }}</h3>
        <h6 class="font-weight-normal mb-0">All systems are running smoothly!
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12 grid-margin transparent">
    <div class="row">
      <div class="col-md-3 mb-4 stretch-card transparent">
        <div class="card card-tale">
          <div class="card-body">
            <p class="mb-4">Total Users</p>
            <p class="fs-30 mb-2">{{ $total_users }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-3 mb-4 stretch-card transparent">
        <div class="card card-dark-blue">
          <div class="card-body">
            <p class="mb-4">Total Cities</p>
            <p class="fs-30 mb-2">{{ $total_cities }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 stretch-card transparent">
        <div class="card card-light-blue">
          <div class="card-body">
            <p class="mb-4">Total Practice Area</p>
            <p class="fs-30 mb-2">{{ $total_practice_area }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
@endblock

@block("scripts")

@endblock