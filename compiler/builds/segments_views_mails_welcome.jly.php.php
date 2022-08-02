<?php class_exists('Jolly\Engine') or exit; ?>
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		@media (max-width:500px) {
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body style="background-color: #ebebeb; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ebebeb; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: auto;margin: 0 auto; padding: 15px;">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h1 style="margin: 0; color: #5c5c5c; font-size: 17px; font-family: 'Arial', Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder"><?php echo setting('app.title', 'Jolly tiny PHP Framework!'); ?></span></h1>
															</td>
														</tr>
													</table>

<table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
	<tr>
		<td class="pad">
			<div style="color:#000000;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:18px;">
				<h5>Hey Admin</h5>
				<p style="margin: 0;"><?php echo $user->full_name; ?> is registered from <?php echo $user->getCity->name; ?> with <?php echo $user->law_firm; ?>.</p>
				<p>Please click below link to access admin portal.</p>
			</div>
		</td>
	</tr>
</table>
<table class="button_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
	<tr>
		<td class="pad">
			<div class="alignment" align="center">
				<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:38px;width:120px;v-text-anchor:middle;" arcsize="11%" stroke="false" fillcolor="#3c9986"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px"><![endif]-->
				<a href="<?php echo route('auth.login'); ?>" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#3c9986;border-radius:4px;width:auto;border-top:1px solid #3c9986;font-weight:400;border-right:1px solid #3c9986;border-bottom:1px solid #3c9986;border-left:1px solid #3c9986;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 28px;"><strong>Access Admin Portal</strong></span></span></a>
				<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
			</div>
		</td>
	</tr>
</table>

<table class="divider_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
	<tr>
		<td class="pad">
			<div class="alignment" align="center">
				<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
					<tr>
						<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #E6E6E6;"><span>&#8202;</span></td>
					</tr>
				</table>
			</div>
		</td>
	</tr>
</table>

													<table class="paragraph_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:15px;">
																<div style="color:#88888d;font-size:12px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-weight:400;line-height:120%;text-align:center;direction:ltr;letter-spacing:0px;mso-line-height-alt:14.399999999999999px;">
																	<p style="margin: 0; padding: 2px;">All copyrights reserved <?php echo date('Y'); ?>.</p>
																	<p style="margin: 0; padding: 2px;">Sent via <?php echo setting('app.title'); ?></p>
																</div>
															</td>
														</tr>
													</table>
													</td>
													</tr>
													</tbody>
													</table>
													</td>
													</tr>
													</tbody>
													</table>
													</td>
													</tr>
													</tbody>
													</table><!-- End -->
													</body>

													</html>