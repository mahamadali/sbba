<?php class_exists('Jolly\Engine') or exit; ?>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title><?php echo setting('app.title'); ?></title>
        
        <!-- plugins:css -->
      <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/feather/feather.css'); ?>">
      <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/ti-icons/css/themify-icons.css'); ?>">
      <link rel="stylesheet" href="<?php echo url('assets/backend/vendors/css/vendor.bundle.base.css'); ?>">
      <!-- endinject -->
      <!-- Plugin css for this page -->
      <!-- End plugin css for this page -->
      <!-- inject:css -->
      <link rel="stylesheet" href="<?php echo url('assets/backend/css/vertical-layout-light/style.css'); ?>">
      <!-- endinject -->
      <link rel="shortcut icon" href="<?php echo url('assets/backend/images/favicon.png'); ?>" />
    </head>
    <body>
        <div class="container-scroller">
		    <div class="container-fluid page-body-wrapper full-page-wrapper">
		      <div class="content-wrapper d-flex align-items-center auth px-0">
		        <div class="row w-100 mx-0">
		          <div class="col-lg-4 mx-auto">
				  <center>
					
					</center>
		            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
		              <div class="brand-logo">
					  <h5><?php echo setting('app.title'); ?></h5>
		              </div>
		              <h4>Hello! let's get started</h4>
		              <h6 class="font-weight-light">Sign in to continue.</h6>
					
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

		              <form class="pt-3" method="post" action="<?php echo route('auth.check.login'); ?>">
		                <div class="form-group">
		                  <input type="email" name="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email">
		                </div>
		                <div class="form-group">
		                  <input type="password" name="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
		                </div>
		                <div class="mt-3">
		                  <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
		                </div>
		              </form>
		            </div>
		          </div>
		        </div>
		      </div>
		      <!-- content-wrapper ends -->
		    </div>
		    <!-- page-body-wrapper ends -->
		  </div>
        <script src="<?php echo url('assets/backend/vendors/js/vendor.bundle.base.js'); ?>"></script>
        <script src="<?php echo url('assets/backend/js/off-canvas.js'); ?>"></script>
        <script src="<?php echo url('assets/backend/js/hoverable-collapse.js'); ?>"></script>
        <script src="<?php echo url('assets/backend/js/template.js'); ?>./"></script>
        <script src="<?php echo url('assets/backend/js/settings.js'); ?>"></script>
        <script src="<?php echo url('assets/backend/js/todolist.js'); ?>"></script>
        
    </body>
</html>







