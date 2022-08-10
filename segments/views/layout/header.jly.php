<noscript><strong>We're sorry but Bizfluence doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
      <div id="app">
         <div>
            <div data-v-88cae4b0="" class="ui-landing">
               <!-- <div data-v-4031e0bf="" data-v-88cae4b0="" class="ui-wrapper-navbar">
                  <div data-v-4031e0bf="" class="ui-wrapper-navbar__inner">
                     <span data-v-4031e0bf="" class="navbar-logo__span" style="color:#ec1f27;text-align: center;">
                        <a href="{{ url('/') }}" class="logo_hover">
                            <img src="{{ url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png') }}" alt="logo" class="navbar-logo bg-white" style="border-radius:4px"> 
                        </a>
                     <h2 style="float:right;margin-top:2rem;">SOLO & BOUTIQUE BAR ASSOCIATION</h2>
                     </span>
                     <div data-v-4031e0bf="">
                        <a href="{{ route('landing')}}" data-v-4031e0bf="" class="text-white" style="padding:5px;padding-left: 20px;padding-right: 20px;">Home</a>
                        <a href="{{ route('about-us')}}" data-v-4031e0bf="" class="text-white" style="padding:5px;padding-left: 20px;padding-right: 20px;">About Us</a>
                        <a href="{{ route('auth.sign-up')}}" data-v-4031e0bf="" class="ui-btn ui-btn__outline" style="padding:5px;padding-left: 20px;padding-right: 20px;">Sign Up</a>
                     </div>
                  </div>
               </div> -->

               <nav class="navbar navbar-expand-lg navbar-dark header-bg">
                 <div class="container-fluid">
                   <a class="navbar-brand" href="{{ url('/') }}">
                      <img src="{{ url('assets/frontend/img/Solo_Boutique_Bar_Association-01.png') }}" alt="logo" class="navbar-logo bg-white" style="border-radius:4px">
                   </a>
                     <h3 class="title_desk theme-text-red">SOLO & BOUTIQUE BAR ASSOCIATION</h3>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                     <ul class="navbar-nav">
                       <li class="nav-item">
                         <a class="nav-link {{ (Bones\Str::contains(request()->currentPage(), '/home')) ? 'active' : '' }}" aria-current="page" href="{{ route('landing')}}">Home</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link {{ (Bones\Str::contains(request()->currentPage(), '/about-us')) ? 'active' : '' }}" href="{{ route('about-us')}}">About Us</a>
                       </li>
                       <li class="nav-item">
                         <button class="btn btn-header" type="submit">Sign Up</button>
                       </li>
                     </ul>
                   </div>
                 </div>
               </nav>
               

