<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>@plot('title')</title>
    @plot('styles')
    <link rel="stylesheet" href="{{ url('assets/backend/vendors/feather/feather.css') }}">
    <link rel="stylesheet" href="{{ url('assets/backend/vendors/ti-icons/css/themify-icons.css') }}">
    <link rel="stylesheet" href="{{ url('assets/backend/vendors/css/vendor.bundle.base.css') }}">
    <link rel="stylesheet" href="{{ url('assets/backend/css/vertical-layout-light/style.css') }}">
    <link rel="stylesheet" href="{{ url('assets/backend/vendors/dataTables.net-bs4/dataTables.bootstrap4.css') }}">
    

    

    <link rel="shortcut icon" href="" />
</head>

<body>
    <div class="container-scroller">
        @include('backend/layouts/nav')
        <div class="container-fluid page-body-wrapper">
            @include('backend/layouts/sidebar')
            <div class="main-panel">
                <div class="content-wrapper">
                    @include('backend/layouts/alerts')
                    @plot('content')
                </div>
                @include('backend/layouts/footer')
            </div>
        </div>
    </div>
    <script src="{{ url('assets/backend/vendors/js/vendor.bundle.base.js') }}"></script>
    <script src="{{ url('assets/backend/js/off-canvas.js') }}"></script>
    <script src="{{ url('assets/backend/js/hoverable-collapse.js') }}"></script>
    <script src="{{ url('assets/backend/js/template.js') }}"></script>
    <script src="{{ url('assets/backend/js/settings.js') }}"></script>
    <script src="{{ url('assets/backend/js/todolist.js') }}"></script>
    <script src="{{ url('assets/backend/js/tabs.js') }}"></script>
    <script src="{{ url('assets/backend/vendors/datatables.net/jquery.dataTables.js') }}"></script>
    <script src="{{ url('assets/backend/vendors/datatables.net-bs4/dataTables.bootstrap4.js') }}"></script>

    
    

    <script type="text/javascript">
        var APP_BASE_URL = '{{ url("/") }}';
    </script>
    @plot('scripts')
</body>

</html>