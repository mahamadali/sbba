<?php class_exists('Jolly\Engine') or exit; ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php echo setting('app.title'); ?></title>
    
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/feather/feather.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/ti-icons/css/themify-icons.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/css/vendor.bundle.base.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/css/vertical-layout-light/style.css'); ?>">
    <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/dataTables.net-bs4/dataTables.bootstrap4.css'); ?>">
    
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.bootstrap4.min.css">
    

    

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
          <span class="menu-title">Members</span>
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

      <li class="nav-item <?php echo (request()->matchesTo('/admin/settings/*')) ? 'active' : ''; ?>">
        <a class="nav-link" href="<?php echo route('admin.settings.list'); ?>">
          <i class="ti-settings menu-icon"></i>
          <span class="menu-title">Settings</span>
        </a>
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
                    <div class="row">
  <div class="col-md-12 grid-margin">
    <div class="row">
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Welcome <?php echo auth()->full_name; ?></h3>
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
            <p class="fs-30 mb-2"><?php echo $total_users; ?></p>
          </div>
        </div>
      </div>

      <div class="col-md-3 mb-4 stretch-card transparent">
        <div class="card card-dark-blue">
          <div class="card-body">
            <p class="mb-4">Total Cities</p>
            <p class="fs-30 mb-2"><?php echo $total_cities; ?></p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-4 stretch-card transparent">
        <div class="card card-light-blue">
          <div class="card-body">
            <p class="mb-4">Total Practice Area</p>
            <p class="fs-30 mb-2"><?php echo $total_practice_area; ?></p>
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
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.bootstrap4.min.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
	<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.colVis.min.js"></script>

    
    

    <script type="text/javascript">
        var APP_BASE_URL = '<?php echo url("/"); ?>';
    </script>
    
</body>

</html>







