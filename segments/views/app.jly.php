<html>
<head>
    <title>@plot('title')</title>
    <meta charset="utf-8">
    <html lang="" data-theme="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,maximum-scale=1,user-scalable=0">
    <link rel="icon" href="{{ url('assets/frontend/img/favicon.png') }}">

    
      <link href=" {{ url('assets/frontend/js/app.186570a1.js')}} " rel="preload" as="script">
      <link href=" {{ url('assets/frontend/js/chunk-vendors.8af9899c.js') }} " rel="preload" as="script">
      <link href=" {{ url('assets/frontend/css/app.7c513575.css') }} " rel="stylesheet">
      <link rel="stylesheet" type="text/css" href=" {{ url('assets/frontend/css/chunk-10e6a05d.0a76f51e.css') }} ">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href=" {{ url('assets/frontend/css/landing.css') }} ">
      <link rel="stylesheet" type="text/css" href=" {{ url('assets/frontend/css/styles.css') }} ">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">

      <style type="text/css">
          body {
              font-family: 'Poppins', sans-serif;
          }
      </style>


        @plot('styles')
    </head>
    <body>
        @include('layout/header')
        @plot('content')
        @include('layout/footer')
        @plot('scripts')
    </body>
</html>