<?php

namespace Controllers\Backend\CMS;

use Bones\Request;
use Models\CMS\Homepage;

class HomepageController
{
	public function index(Request $request)
	{
		$home_area_data = Homepage::orderBy('id')->get();

		return render('backend/admin/cms/homepage/content', [
			'home_area_data' => $home_area_data
		]);
	}

	public function store(Request $request)
	{
		$validator = $request->validate([
			'section1_heading' => 'required|min:2',
			'section1_content' => 'required',
		]);

		if ($validator->hasError()) {
			return redirect()->withFlashError(implode('<br>', $validator->errors()))->with('old', $request->all())->back();
		}

		$homepage_cms = Homepage::orderBy('id')->firstOrNull();

		if (empty($homepage_cms)) {
			$homepage_cms = new Homepage();
		}

		$homepage_cms->section1_heading = $request->section1_heading;
		$homepage_cms->section1_content = $request->section1_content;
		$homepage_cms->section2_heading = $request->section2_heading;
		$homepage_cms->section2_content = $request->section2_content;
		$homepage_cms->section3_heading = $request->section3_heading;
		$homepage_cms->section3_content = $request->section3_content;
		$homepage_cms->save();

		return redirect(route('admin.cms.homepage.index'))->withFlashSuccess('Homepage content saved successfully!')->go();
	}
}