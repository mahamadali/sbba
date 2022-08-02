<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sign Up - {{ setting('app.title') }}</title>
  <link rel="stylesheet" type="text/css" href="{{ url('assets/frontend/css/signup.css') }}">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
</head>
<body>
  <div class="ui-onboard" id="signup-page">
    <div class="ui-onboard__bg"></div>
    <div class="ui-onboard__wr">
      <div class="ui-onboard__wr-in">
        <div class="ui-onboard__wr-in-main">
          <div class="ui-onboard__wr-in-main--top">
           <div class="signup_logo_div_mb" style="display:none;">
             <a href="{{ url('/') }}">
              <img src="{{ url('assets/frontend/img/logo.png') }}" alt="logo" class="top-logo">
            </a>  
          </div>
          <h2 class="onboard-navbar-text">{{ setting('app.title') }}</h2>
        </div>
        <div class="ui-onboard__wr-in-main--middle">
          <div class="row">
            <div class="col-3 col-md-2 signup_logo_div">
              <a href="{{ url('/') }}">
                <img src="{{ url('assets/frontend/img/logo.png') }}" alt="logo" class="top-logo">
              </a>
            </div> <!-- 25% -->
            <div class="col-12 col-md-8">
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
                  <label for="first_name" class="ui-label">First Name</label>
                  <input id="first_name" name="first_name" placeholder="First Name" class="form-control" type="text" required>
                </div>
                <div class="form-group  mt-4">
                  <label for="last_name">Last Name</label>
                  <input id="last_name" name="last_name" placeholder="Last Name" class="form-control" type="text" required>
                </div>
                <div class="form-group  mt-4">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group  mt-4">
                  <label for="law_firm">Law Firm</label>
                  <input type="text" class="form-control" id="law_firm" name="law_firm" placeholder="Law Firm" required>
                </div>
              </div>

              <!-- <div class="row add_new mt-4">
                <label for="law_firm">Primary Practice Area(s)</label>
                <div class="form-group col-11">
                  <input id="practice_areas" name="practice_areas[]" placeholder="Practice Area" class="form-control" type="text" required>
                </div>
                <div class="form-group col-1 mt-2" style="font-size:20px">
                 <a href="javascript:void(0)" class="practice_area_add"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
               </div>
             </div> -->
             <div class="row add_new mt-4">
                <label for="law_firm">Primary Practice Area(s)</label>
                <div class="form-group col-12">
                  <select class="form-control" name="practice_areas" id="practice_areas" required>
                    <option value="Banking & Finance">Banking & Finance</option>
                    <option value="Commercial Bankruptcy">Commercial Bankruptcy</option>
                    <option value="Consumer Bankruptcy">Consumer Bankruptcy</option>
                    <option value="Commercial Litigation">Commercial Litigation</option>
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Intellectual Property">Intellectual Property</option>
                    <option value="Labor & Employment">Labor & Employment</option>
                    <option value="Mergers & Acquisitions">Mergers & Acquisitions</option>
                    <option value="Personal Injury">Personal Injury</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Real Estate Litigation">Real Estate Litigation</option>
                    <option value="Tax">Tax</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
             </div>

              <div class="row add_new mt-4">
                <label for="law_firm">Other Primary Practice Area</label>
                <div class="form-group col-12">
                  <input id="other_practice_area" name="other_practice_area" placeholder="Other Primary Practice Area" class="form-control" type="text" required>
                </div>
             </div>


             <div class="text-center mt-4">
              <button type="submit" id="register_user" class="btn-submit">Sign Up</button>
            </div>
          </form>

        </div>
      </div> <!-- 75% -->
      <div class="col-3 col-md-2 signup_logo_div">
        <a href="{{ url('/') }}">
          <img src="{{ url('assets/frontend/img/logo.png') }}" alt="logo" class="top-logo">
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

  $(document).on('click', '.practice_area_add', function(){
    $(this).closest("div.add_new").after('<div class="row add_new mt-1"><div class="form-group col-11"><input id="practice_area" name="practice_area[]" placeholder="Practice Area" class="form-control practice_area" type="text" required></div><div class="form-group col-1 mt-2" style="font-size:20px"><a href="#" class="practice_area_remove"><i class="fa fa-minus-circle" aria-hidden="true"></i></a></div></div>');
    var i = $(".row.add_new .practice_area").length;
    $(".row.add_new:last input[name='practice_area["+i+"]']").rules("add", {
      required: true
    });
  });



  $(document).on('click', '.practice_area_remove', function(){
   $(this).parent().parent().remove();
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
       alert('Your data has been submitted successfully!');
       form.reset();
     }
   });
 </script>
</body>
</html>