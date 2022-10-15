<?php

namespace Controllers\Backend\CMS;

use Bones\Request;
use Models\CMS\Homepage;
use Models\CMS\AboutUs;
use Models\CMS\Footer;

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

	public function aboutUs(Request $request)
	{
		$aboutUsData = AboutUs::orderBy('id')->firstOrNull();
		return render('backend/admin/cms/aboutus/content', [
			'aboutUsData' => $aboutUsData
		]);
	}

	public function aboutUsPost(Request $request)
	{
		
		$validator = $request->validate([
			'content' => 'required|min:2',
		]);

		if ($validator->hasError()) {
			return redirect()->withFlashError(implode('<br>', $validator->errors()))->with('old', $request->all())->back();
		}

		$aboutus_cms = AboutUs::orderBy('id')->firstOrNull();

		if (empty($aboutus_cms)) {
			$aboutus_cms = new AboutUs();
		}

		$aboutus_cms->content = $request->content;
		$aboutus_cms->save();

		return redirect(route('admin.cms.about-us.index'))->withFlashSuccess('AboutUs content saved successfully!')->go();
	}

	public function footer(Request $request)
	{
		$footerData = Footer::orderBy('id')->firstOrNull();
		return render('backend/admin/cms/footer/content', [
			'footerData' => $footerData
		]);
	}

	public function footerPost(Request $request)
	{
		
		$validator = $request->validate([
			'follow_on_social_media_line_text' => 'required|min:2',
			'terms_and_conditions_link' => 'required|min:2',
			'privacy_policy_link' => 'required|min:2',
			'contact_us_link' => 'required|min:2',
		]);

		if ($validator->hasError()) {
			return redirect()->withFlashError(implode('<br>', $validator->errors()))->with('old', $request->all())->back();
		}

		$footer_cms = Footer::orderBy('id')->firstOrNull();

		if (empty($footer_cms)) {
			$footer_cms = new Footer();
		}
		$footer_cms->follow_on_social_media_line_text = $request->follow_on_social_media_line_text;
		$footer_cms->terms_and_conditions_link = $request->terms_and_conditions_link;
		$footer_cms->privacy_policy_link = $request->privacy_policy_link;
		$footer_cms->contact_us_link = $request->contact_us_link;
		$footer_cms->facebook_link = $request->facebook_link;
		$footer_cms->instagram_link = $request->instagram_link;
		$footer_cms->save();

		return redirect(route('admin.cms.footer.index'))->withFlashSuccess('Footer data saved successfully!')->go();
	}
}