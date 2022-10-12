<noscript><strong>We're sorry but Bizfluence doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
      <div id="app">
         <div>
            <div data-v-88cae4b0="" class="ui-landing">

               <nav class="navbar navbar-expand-lg navbar-dark header-bg">
                 <div class="container-fluid">
                   <a class="navbar-brand" href="{{ url('/') }}">
                      <!-- <img src="{{ url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png') }}" alt="logo" class="navbar-logo bg-white" style="border-radius:4px"> -->
                   </a>
                     <h1 class="title_desk theme-text-red"><a href="{{route('landing')}}">SOLO & BOUTIQUE BAR ASSOCIATION</a></h1>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                     <ul class="navbar-nav">
                       <li class="nav-item">
                         <a class="nav-link {{ (request()->matchesTo('/home') || request()->matchesTo('/')) ? 'active' : '' }}" aria-current="page" href="{{ route('landing')}}">Home</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link {{ (request()->matchesTo('/about-us')) ? 'active' : '' }}" href="{{ route('page', ['about-us'])}}">About Us</a>
                       </li>
                       <li class="nav-item signup_desk">
                         <a class="btn btn-header {{ (request()->matchesTo('/sign-up')) ? 'active' : '' }}" href="{{ route('auth.sign-up')}}">Sign Up</a>
                       </li>
                        <li class="nav-item signup_mb">
                         <a class="nav-link {{ (request()->matchesTo('/sign-up')) ? 'active' : '' }}" href="{{ route('auth.sign-up')}}">Sign Up</a>
                       </li>
                     </ul>
                   </div>
                 </div>
               </nav>
               

