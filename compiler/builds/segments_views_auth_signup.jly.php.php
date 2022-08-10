<?php class_exists('Jolly\Engine') or exit; ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sign Up - <?php echo setting('app.title'); ?></title>
  <link rel="stylesheet" type="text/css" href="<?php echo url('assets/frontend/css/signup.css'); ?>">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link rel="icon" href="<?php echo url('assets/frontend/img/favicon.png'); ?>">
</head>
<body>
  <div class="ui-onboard" id="signup-page">
    <div class="ui-onboard__bg"></div>
    <div class="ui-onboard__wr">
      <div class="ui-onboard__wr-in">
        <div class="ui-onboard__wr-in-main">
          <div class="ui-onboard__wr-in-main--top">
           <div class="signup_logo_div_mb" style="display:none;">
             <a href="<?php echo url('/'); ?>">
              <img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png'); ?>" alt="logo" class="top-logo">
            </a>  
          </div>
          <h2 class="onboard-navbar-text"><?php echo strtoupper(setting('app.title')); ?></h2>
        </div>
        <div class="ui-onboard__wr-in-main--middle">
          <div class="row">
            <div class="col-md-3 signup_logo_div text-right">
              <a href="<?php echo url('/'); ?>">
                <img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png'); ?>" alt="logo" class="top-logo">
              </a>
            </div> <!-- 25% -->
            <div class="col-md-6">
              <div class="myform form ui-onboard-form onboard-main">
               <div class="logo">
                 <div class="col-md-12">
                  <h1 class="ui-onboard-title">Sign Up</h1>
                  <p class="ui-onboard-desc">Submit your information -- we will notify you by email about events in your area!</p>
                </div>
              </div>
              <form action="" method="post" name="register">
               <div class="form-row">
                <div class="form-group">
                  <!-- <label for="first_name" class="ui-label">First Name</label> -->
                  <input id="first_name" name="first_name" placeholder="First Name" class="form-control" type="text" required>
                </div>
                <div class="form-group  mt-4">
                  <!-- <label for="last_name">Last Name</label> -->
                  <input id="last_name" name="last_name" placeholder="Last Name" class="form-control" type="text" required>
                </div>
                <div class="form-group  mt-4">
                  <!-- <label for="email">Email</label> -->
                  <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>

                <div class="form-group  mt-4">
                  <!-- <label for="email">City</label> -->
                  <select class="city-options city_name form-control" name="city_id" id="city_name" required style="background-color:#f5f7fa">
                  <option value="">City</option>
                  <?php foreach($cities as $city) { ?>
                  <option value="<?php echo $city->id; ?>"><?php echo $city->name; ?></option>
                  <?php } ?>
                  </select>
                </div>
                <div class="form-group  mt-4">
                  <!-- <label for="law_firm">Law Firm</label> -->
                  <input type="text" class="form-control" id="law_firm" name="law_firm" placeholder="Law Firm" required>
                </div>
              </div>

              <!-- <div class="row add_new mt-4">
                <label for="law_firm">Primary Practice Area(s)</label>
                <div class="form-group col-11">
                  <input name="practice_areas[]" placeholder="Practice Area" class="form-control" type="text" required>
                </div>
                <div class="form-group col-1 mt-2" style="font-size:20px">
                 <a href="javascript:void(0)" class="practice_area_add"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
               </div>
             </div> -->

              

             <div class="row add_new mt-4">
                <!-- <label for="law_firm">Primary Practice Area(s)</label> -->
                <div class="form-group col-11">
                  <select class="form-control practice_areas" name="practice_areas[]" required style="background-color:#f5f7fa">
                    <option value="">Primary Practice Area(s)</option>
                    <?php foreach($practice_areas as $area) { ?>
                    <option value="<?php echo $area->id; ?>"><?php echo $area->title; ?></option>
                    <?php } ?>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                 <div class="form-group col-1 mt-2" style="font-size:20px">
                  <a href="javascript:void(0)" class="practice_area_add"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
                  </div>

                  <div class="row mt-2 other_practice_area_section" style="display:none">
                    
                    <div class="form-group col-12">
                      <input name="other_practice_area[]" placeholder="Enter Practice Area" class="form-control" type="text" required>
                    </div>
                 </div>
             </div>

             <div id="messages"></div>


             <div class="text-center mt-4">
              <button type="submit" id="register_user" class="btn-submit">Sign Up</button>
            </div>
          </form>

        </div>
      </div> <!-- 75% -->
      <div class="col-md-3 signup_logo_div">
        <a href="<?php echo url('/'); ?>">
          <img src="<?php echo url('assets/frontend/img/Solo_Boutique_Bar_Association-02.png'); ?>" alt="logo" class="top-logo">
        </a>
      </div> <!-- 25% -->
    </div>
  </div>
  <div class="ui-onboard__wr-in-main--bottom"></div>
</div>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
<script type="text/javascript">


  /* $(document).on('click', '.practice_area_add', function(){
    $(this).closest("div.add_new").after('<div class="row add_new mt-1"><div class="form-group col-11"><input id="practice_area" name="practice_area[]" placeholder="Practice Area" class="form-control practice_area" type="text" required></div><div class="form-group col-1 mt-2" style="font-size:20px"><a href="javascript:void(0);" class="practice_area_remove"><i class="fa fa-minus-circle" aria-hidden="true"></i></a></div></div>');
    var i = $(".row.add_new .practice_area").length;
    $(".row.add_new:last input[name='practice_area["+i+"]']").rules("add", {
      required: true
    });
  });*/
  
  $(document).on('click', '.practice_area_add', function(){
    $("div.add_new:last").after('<div class="row add_new mt-1"><div class="form-group col-11"><select class="form-control practice_areas" name="practice_areas[]" required style="background-color:#f5f7fa"><option value="">Primary Practice Area(s)</option><?php foreach($practice_areas as $area) { ?><option value="<?php echo $area->id; ?>"><?php echo $area->title; ?></option><?php } ?><option value="other">Other</option></select></div><div class="form-group col-1 mt-2" style="font-size:20px"><a href="javascript:void(0);" class="practice_area_remove"><i class="fa fa-minus-circle" aria-hidden="true"></i></a></div><div class="row mt-2 other_practice_area_section" style="display:none"><div class="form-group col-12"><input name="other_practice_area[]" placeholder="Enter Practice Area" class="form-control" type="text" required></div></div></div>');
    var i = $(".row.add_new .practice_area").length;
    $(".row.add_new:last input[name='practice_area["+i+"]']").rules("add", {
      required: true
    });
    $(".row.add_new:last input[name='other_practice_area["+i+"]']").rules("add", {
      required: true
    });
  });

  $(document).on('click', '.practice_area_remove', function(){
   $(this).parent().parent().remove();
 });

 
 $(document).on('change', '.practice_areas', function(){
    var val = this.value;
    if(val == 'other')
    {
      $(this).parent().parent().find('.other_practice_area_section').css('display','block');
    } else {
      $(this).parent().parent().find('.other_practice_area_section').css('display','none');
    }
});



  $("form[name='register']").validate({
   rules: {

     email: {
       required: true,
       email: true
     },
     password: {
       required: true,

     }
   },
   messages: {
     email: "Please enter a valid email address",

     password: {
       required: "Please enter password",

     }

   },
   submitHandler: function(form) {
       // form.submit();
       city_id = getCookie('city_id');
       // $(form).append("<input type='hidden' name='city_id' value='"+
       //                   city_id+"' />");

       $(form).find('button[type="submit"]').html('<i class="fa fa-spinner fa-spin"></i>');
       $(form).find('button[type="submit"]').prop('disabled', true);

       $.ajax({
      url : '<?php echo route("auth.register"); ?>',
      type : 'POST',
      data : $(form).serializeArray(),
      dataType: 'json',
      success: function(response) {

        $(form).find('button[type="submit"]').html('Sign Up');
        $(form).find('button[type="submit"]').prop('disabled', false);

        $('#messages').html('');
        if(response.status == 304) {
            response.errors.forEach(error => {
                $('#messages').append('<p align="center" style="color:red;">'+error+'</p>');
            });
        }

        if(response.status == 200) {
            $('#messages').append('<p align="center" style="color:green;">'+response.message+'</p>');
            form.reset();
            document.cookie = 'city_id=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
      },
      error: function() {
        $(form).find('button[type="submit"]').html('Sign Up');
        $(form).find('button[type="submit"]').prop('disabled', false);
      }
    });
       
     }
   });

  function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}
  $('.city_name').val(getCookie('city_id'));
 </script>
</body>
</html>