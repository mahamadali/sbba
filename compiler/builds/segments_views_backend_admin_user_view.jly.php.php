<?php class_exists('Jolly\Engine') or exit; ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo setting('app.title', 'Quotations'); ?></title>
    
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/feather/feather.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/ti-icons/css/themify-icons.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/css/vendor.bundle.base.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/css/vertical-layout-light/style.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/dataTables.net-bs4/dataTables.bootstrap4.css'); ?>">
    

    

    <link rel="shortcut icon" href="" />
</head>

<body>
    <div class="container-scroller">
        <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
    <a class="navbar-brand brand-logo mr-5" href="index.html"><img src="<?php echo url('assets/frontend/img/logo.png'); ?>" class="mr-2" alt="<?php echo setting('app.title'); ?>" title="<?php echo setting('app.title'); ?>" /></a>
    <a class="navbar-brand brand-logo-mini" href="index.html"><img src="<?php echo url('assets/frontend/img/logo.png'); ?>" alt="<?php echo setting('app.title'); ?>" title="<?php echo setting('app.title'); ?>" /></a>
  </div>
  <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
    <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span class="icon-menu"></span>
    </button>
    <ul class="navbar-nav navbar-nav-right">
      <li class="nav-item nav-profile dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
          <i class="ti-user text-primary"></i> <?php echo auth()->first_name." ".auth()->last_name; ?>
        </a>
        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">

          <?php if(auth()->role->name == 'user') { ?>
          <a class="dropdown-item" href="<?php echo url('user/profile/edit/'.auth()->id); ?>">
            <i class="ti-user text-primary"></i>
            Update Profile 
          </a>
          <?php } ?>
          <a class="dropdown-item" href="<?php echo route('auth.logout'); ?>">
            <i class="ti-power-off text-primary"></i>
            Logout 
          </a>
        </div>
      </li>
    </ul>
    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span class="icon-menu"></span>
    </button>
  </div>
</nav>
        <div class="container-fluid page-body-wrapper">
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <?php if(auth()->role->name == 'admin') { ?>
      <li class="nav-item <?php echo (request()->matchesTo('/admin/dashboard')) ? 'active' : ''; ?>">
        <a class="nav-link" href="<?php echo route('admin.dashboard'); ?>">
          <i class="icon-grid menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>

      <li class="nav-item <?php echo (request()->matchesTo('/admin/users/*')) ? 'active' : ''; ?>">
        <a class="nav-link" href="<?php echo route('admin.users.list'); ?>">
          <i class="icon-head menu-icon"></i>
          <span class="menu-title">Users</span>
        </a>
      </li>

      <li class="nav-item <?php echo (request()->matchesTO('/admin/cities/*')) ? 'active' : ''; ?>">
        <a class="nav-link" data-toggle="collapse" href="#cities" aria-expanded="false" aria-controls="cities">
          <i class="ti-list menu-icon"></i>
          <span class="menu-title">Cities</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse <?php echo (request()->matchesTO('/admin/cities/*')) ? 'show' : ''; ?>" id="cities">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="<?php echo route('admin.cities.create'); ?>"> Add </a></li>
            <li class="nav-item"> <a class="nav-link" href="<?php echo route('admin.cities.list'); ?>"> Cities </a></li>
          </ul>
        </div>
      </li>

      <li class="nav-item <?php echo (request()->matchesTO('/admin/practice_area/*')) ? 'active' : ''; ?>">
        <a class="nav-link" data-toggle="collapse" href="#practice_area" aria-expanded="false" aria-controls="practice_area">
          <i class="ti-list menu-icon"></i>
          <span class="menu-title">Practice Area</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse <?php echo (request()->matchesTO('/admin/practice_area/*')) ? 'show' : ''; ?>" id="practice_area">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="<?php echo route('admin.practice_area.create'); ?>"> Add </a></li>
            <li class="nav-item"> <a class="nav-link" href="<?php echo route('admin.practice_area.list'); ?>"> Practice Area </a></li>
          </ul>
        </div>
      </li>

    <?php } ?> 

    <li class="nav-item">
      <a class="nav-link" href="<?php echo route('auth.logout'); ?>">
        <i class="icon-power menu-icon"></i>
        <span class="menu-title">Logout</span>
      </a>
    </li>
  </ul>
</nav>
            <div class="main-panel">
                <div class="content-wrapper">
                    <?php if(session()->hasFlash('error')) { ?>
  <div class="alert alert-danger">
    <span><?php echo session()->flash('error'); ?></span>
  </div>
<?php } ?>

<?php if(session()->hasFlash('success')) { ?>
  <div class="alert alert-success">
    <span><?php echo session()->flash('success'); ?></span>
  </div>
<?php } ?>

<?php if(session()->hasFlash('warning')) { ?>
  <div class="alert alert-warning">
    <span><?php echo session()->flash('warning'); ?></span>
  </div>
<?php } ?>

<?php if(session()->hasFlash('info')) { ?>
  <div class="alert alert-info">
    <span><?php echo session()->flash('info'); ?></span>
  </div>
<?php } ?>
                    <div class="content-wrapper">
    <div class="row">
    <div class="col-12">
        <div class="card">
        <div class="card-body">
            <div class="row">
            <div class="col-lg-4">
                <div class="border-bottom text-center pb-4">
                
                
                <div class="mb-3">
                    <h3><?php echo $user->getFullNameProperty(); ?></h3>
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
                    <?php echo $user->getFullNameProperty(); ?>
                    </span>
                </p>
               
                <p class="clearfix">
                    <span class="float-left">
                    Email
                    </span>
                    <span class="float-right text-muted">
                    <?php echo $user->email; ?>
                    </span>
                </p>

                <p class="clearfix">
                    <span class="float-left">
                    City
                    </span>
                    <span class="float-right text-muted">
                        <?php echo $user->city_id != '' ?  $user->getCity()->name : 'N/A'; ?>
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
                        <?php if(!empty($user->practiceArea())) { ?>
                        <?php foreach($user->practiceArea() as $key => $practice_area) { ?>
                            <tr>
                                <td><?php echo $key + 1; ?></td>
                                <td>
                                    <?php if(!empty($practice_area->other)) { ?>
                                        <?php echo $practice_area->other; ?>
                                    <?php } else { ?>
                                        <?php echo $practice_area->getPracticeArea()->title;; ?>
                                    <?php } ?>
                                    
                                </td>
                            </tr>
                        <?php } ?>
                        <?php } else { ?>
                        <tr>
                            <td colspan="2">No data availabe!</td>
                        </tr>    
                        <?php } ?>
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
                </div>
                <footer class="footer">
  <div class="d-sm-flex justify-content-center justify-content-sm-between">
    <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <?php echo date('Y'); ?>.  <a href="<?php echo url('/'); ?>" target="_blank"><?php echo setting('app.title'); ?></a>. All rights reserved.</span>
  </div>
</footer>
            </div>
        </div>
    </div>
    <script src="<?php echo url('assets/backend/vendors/js/vendor.bundle.base.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/js/off-canvas.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/js/hoverable-collapse.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/js/template.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/js/settings.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/js/todolist.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/js/tabs.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/vendors/datatables.net/jquery.dataTables.js'); ?>"></script>
    <script src="<?php echo url('assets/backend/vendors/datatables.net-bs4/dataTables.bootstrap4.js'); ?>"></script>

    
    

    <script type="text/javascript">
        var APP_BASE_URL = '<?php echo url("/"); ?>';
    </script>
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
</body>

</html>







