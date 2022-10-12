<?php

namespace Controllers\Backend;

use Bones\Request;
use Models\HomeSectionArea;

class HomePageAreaController
{
	public function index(Request $request)
	{
		$home_area_data = HomeSectionArea::orderBy('id')->get();

		return render('backend/admin/homesection/list', [
			'home_area_data' => $home_area_data
		]);
	}

	public function store_section(Request $request)
	{
		$validator = $request->validate([
			'section1_heading' => 'required|min:2',
			'section1_content' => 'required',
		]);
		if ($validator->hasError()) {
			return redirect()->withFlashError(implode('<br>', $validator->errors()))->with('old', $request->all())->back();
		}
		$HomeSection = HomeSectionArea::orderBy('id')->first();
		
		if(empty($HomeSection))
		{
			$HomeSection = new HomeSectionArea();
		}
		$HomeSection->section1_heading = $request->section1_heading;
		$HomeSection->section1_content = $request->section1_content;
		$HomeSection->section2_heading = $request->section2_heading;
		$HomeSection->section2_content = $request->section2_content;
		$HomeSection->section3_heading = $request->section3_heading;
		$HomeSection->section3_content = $request->section3_content;
		$HomeSection->save();
		return redirect(route('admin.homepage_sections.list'))->withFlashSuccess('Home page data added successfully!')->go();
		
		
	}

}
