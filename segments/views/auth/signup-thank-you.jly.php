<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>Thank you for signup - {{ setting('app.title') }}</title>
  <link rel="stylesheet" type="text/css" href="{{ url('assets/frontend/css/signup.css') }}">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link rel="icon" href="{{ url('assets/frontend/img/favicon.png') }}">
   <style type="text/css">
     .onboard-main {
      min-width: 56%;
      justify-content: center;
      min-height: 500px;
      text-align: center;
     }
     .ui-onboard-desc {
      font-size: 35px;
      line-height: 40px;
      color: #0f523a;
      font-weight: 500;
      margin-bottom: 20px;
     }

     .ui-onboard__wr-in-main--middle {
      min-height: auto;
     }

     @media only screen and (max-width: 600px) {
      .ui-onboard-desc {
        font-size: 25px;
        line-height: 40px;
        color: #0f523a;
        font-weight: 500;
       }
       .onboard-main {
        min-height: 348px;
       }
    }
   </style>
</head>
<body>
  <div class="ui-onboard" id="signup-page" style="background-image: linear-gradient(110deg,#72aed9,#fefbb8) !important;">
    <div class="ui-onboard__bg bg-img"></div>
    <div class="ui-onboard__wr">
      <div class="ui-onboard__wr-in">
        <div class="ui-onboard__wr-in-main">
          <div class="ui-onboard__wr-in-main--top">
           <div class="signup_logo_div_mb" style="display:none;">
             <a href="{{ url('/') }}">
              <img src="{{ url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png') }}" alt="logo" class="top-logo">
            </a>  
          </div>
          <h2 class="onboard-navbar-text"><a href="{{ route('landing') }}" style="color:white;text-decoration:none;">{{ strtoupper(setting('app.title')) }}</a></h2>
        </div>
        <div class="ui-onboard__wr-in-main--middle">
          <div class="">
            <div class="col-md-12">
              <div class="myform form ui-onboard-form onboard-main" style="opacity:0.92;">
               <div class="logo">
                 <div class="col-md-12">
                  <h1 class="ui-onboard-desc">Thank you for joining the Solo & Boutique Bar Association.</h1>
                  <h3>We hope to see you soon!</h3>
                </div>
              </div>

              <div class="text-center mt-4">
                <a href="{{ route('landing') }}" class="btn btn-success">
                  <i class="fa fa-home"></i> Back to Home
                </a>
              </div>

        </div>
      </div>
    </div>
  </div>
  <div class="ui-onboard__wr-in-main--bottom"></div>
</div>
</div>
</div>
</div>
</body>
</html>