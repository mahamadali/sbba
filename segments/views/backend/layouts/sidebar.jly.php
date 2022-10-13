<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    @if (auth()->role->name == 'admin'):
      <li class="nav-item {{ (request()->matchesTo('/admin/dashboard')) ? 'active' : '' }}">
        <a class="nav-link" href="{{ route('admin.dashboard') }}">
          <i class="icon-grid menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>

      <li class="nav-item {{ (request()->matchesTo('/admin/users/*')) ? 'active' : '' }}">
        <a class="nav-link" href="{{ route('admin.users.list') }}">
          <i class="icon-head menu-icon"></i>
          <span class="menu-title">Members</span>
        </a>
      </li>

      <li class="nav-item {{ (request()->matchesTo('/admin/cities/*')) ? 'active' : '' }}">
        <a class="nav-link" data-toggle="collapse" href="#cities" aria-expanded="false" aria-controls="cities">
          <i class="ti-list menu-icon"></i>
          <span class="menu-title">Cities</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse {{ (request()->matchesTo('/admin/cities/*')) ? 'show' : '' }}" id="cities">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="{{ route('admin.cities.create') }}"> Add </a></li>
            <li class="nav-item"> <a class="nav-link" href="{{ route('admin.cities.list') }}"> Cities </a></li>
          </ul>
        </div>
      </li>

      <li class="nav-item {{ (request()->matchesTo('/admin/practice_area/*')) ? 'active' : '' }}">
        <a class="nav-link" data-toggle="collapse" href="#practice_area" aria-expanded="false" aria-controls="practice_area">
          <i class="ti-list menu-icon"></i>
          <span class="menu-title">Practice Area</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse {{ (request()->matchesTo('/admin/practice_area/*')) ? 'show' : '' }}" id="practice_area">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="{{ route('admin.practice_area.create') }}"> Add </a></li>
            <li class="nav-item"> <a class="nav-link" href="{{ route('admin.practice_area.list') }}"> Practice Area </a></li>
          </ul>
        </div>
      </li>

       <li class="nav-item {{ (request()->matchesTo('/admin/cms/homepage/*')) ? 'active' : '' }}">
        <a class="nav-link" data-toggle="collapse" href="#cms-homepage" aria-expanded="false" aria-controls="cms/homepage">
          <i class="ti-list menu-icon"></i>
          <span class="menu-title">Heading and Text</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse {{ (request()->matchesTo('/admin/cms/homepage/*')) ? 'show' : '' }}" id="cms-homepage">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="{{ route('admin.cms.homepage.index') }}">Homepage sections</a></li>
          </ul>
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="{{ route('admin.cms.about-us.index') }}">AboutUs sections</a></li>
          </ul>
        </div>
      </li>

      <li class="nav-item {{ (request()->matchesTo('/admin/settings/*')) ? 'active' : '' }}">
        <a class="nav-link" href="{{ route('admin.settings.list') }}">
          <i class="ti-settings menu-icon"></i>
          <span class="menu-title">Settings</span>
        </a>
      </li>

    @endif 

    <li class="nav-item">
      <a class="nav-link" href="{{ route('auth.logout') }}">
        <i class="icon-power menu-icon"></i>
        <span class="menu-title">Logout</span>
      </a>
    </li>
  </ul>
</nav>