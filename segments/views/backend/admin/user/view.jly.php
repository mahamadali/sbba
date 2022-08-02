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
                <div class="text-center pb-4">
                    <div >
                        <h3>{{ $user->full_name  }}</h3><hr>
                        <h4 class="text-muted">{{ $user->email  }}</h4>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                        {{ $user->city_id != '' ?  $user->city()->name .' | ' : '' }} {{ $user->law_firm ?? '' }}
                        </div>
                    </div>
                </div>
              
            </div>

            <div class="col-lg-8">
            <h3>Practice Areas</h3>
              <div class="card" style="border: 1px solid #CED4DA;padding:20px;">
              <div class="table-responsive" >  
                    <table id="user-listing" class="table dataTable no-footer">
                    <thead>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        @if(!empty($user->practiceArea())):
                        @foreach($user->practiceArea() as $key => $practice_area):
                            <tr>
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