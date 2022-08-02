@extends('backend/app')

@block("title") {{ setting('app.title', 'Quotations') }} @endblock

@block("styles")
@endblock

@block("content")

<div class="content-wrapper">
    <div class="row">
    <div class="col-12">
        <div class="card">
        <div class="card-body">
            <div class="row">
            <div class="col-lg-4">
                <div class="border-bottom text-center pb-4">
                
                
                <div class="mb-3">
                    <h3>{{ $user->getFullNameProperty()  }}</h3>
                    <div class="d-flex align-items-center justify-content-center">
                    </div>
                </div>
                
                </div>
                
                <div class="py-4">
                <p class="clearfix">
                    <span class="float-left">
                    Name
                    </span>
                    <span class="float-right text-muted">
                    {{ $user->getFullNameProperty()  }}
                    </span>
                </p>
               
                <p class="clearfix">
                    <span class="float-left">
                    Email
                    </span>
                    <span class="float-right text-muted">
                    {{ $user->email  }}
                    </span>
                </p>

                <p class="clearfix">
                    <span class="float-left">
                    City
                    </span>
                    <span class="float-right text-muted">
                        {{ $user->city_id != '' ?  $user->getCity()->name : 'N/A' }}
                    </span>
                </p>

                </div>
            </div>

            <div class="col-lg-8">
            <h3>Practice Area</h3>
              <div class="card">
              <div class="table-responsive">  
                    <table id="user-listing" class="table dataTable no-footer">
                    <thead>
                        <th class="sorting_asc">#</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        @if(!empty($user->practiceArea())):
                        @foreach($user->practiceArea() as $key => $practice_area):
                            <tr>
                                <td>{{  $key + 1}}</td>
                                <td>
                                    @if(!empty($practice_area->other)):
                                        {{ $practice_area->other }}
                                    @else
                                        {{ $practice_area->getPracticeArea()->title; }}
                                    @endif
                                    
                                </td>
                            </tr>
                        @endforeach
                        @else
                        <tr>
                            <td colspan="2">No data availabe!</td>
                        </tr>    
                        @endif
                    </tbody>
                    </table>
                </div>      
              </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>

@endblock

@block("scripts")
<script>
    $(function($) {
      'use strict';
      $(function() {
        $('#user-listing').DataTable({
          "aLengthMenu": [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
          ],
          "iDisplayLength": 10,
          "language": {
            search: ""
          }
        });
        $('#user-listing').each(function() {
          var datatable = $(this);
          // SEARCH - Add the placeholder for Search and Turn this into in-line form control
          var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
          search_input.attr('placeholder', 'Search');
          search_input.removeClass('form-control-sm');
          // LENGTH - Inline-Form control
          var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
          length_sel.removeClass('form-control-sm');
        });
      });
    });
</script>
@endblock