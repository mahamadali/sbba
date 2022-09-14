  @extends('app')

@block("title") {{ 'Privacy Policy - '.setting('app.title', 'Ali Rocks!') }} @endblock

@block("styles")
<link rel="stylesheet" href="{{ url('assets/css/welcome.css') }}" />
<style type="text/css">
  #privacy-policy {
    /*background-color: #ec1f27;*/
    background-image: linear-gradient(110deg,#72aed9,#fefbb8);
  }
  .privacy-policy-info {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
  }
  .section-title {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .ml-1
  {
    margin-left:10px;
  }
</style>
@endblock

@block("content")

  <section id="privacy-policy" class="privacy-policy section-bg pt-3 pb-3">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2>PRIVACY POLICY</h2>
      </div>
      <div class="row justify-content-center privacy-policy-info">
        <span class="author-info">- updated September 11, 2022</span>
          <strong class="mt-3">Overview</strong>
          <p class="mt-2">
            Solo & Boutique Bar Association LLC (“SBBA”) (“SBBA” or “we” or “us” or “our” or other similar pronouns) is committed to protecting the privacy of Personal Information (defined below) of users who visit or use the SBBA Web Platforms and / or use the services available thereon and / or that SBBA provides to users who sign-up (the “Services”).
          </p>
           <p class="mt-2">
            For purposes of this Privacy Policy, the term “SBBA Websites” means the SBBA website at sobolawfirms.com including all pages thereunder and all associated websites (collectively, “SBBA Websites”), whether accessed through the SBBA website (desktop or mobile) and/or SBBA applications for mobile and tablet devices (collectively, the “SBBA Web Platform”). References to “herein” refer to this Privacy Policy. 
          </p>
          <p class="mt-2">
            Amendments to this Privacy Policy will be posted to the SBBA Web Platform and will be effective when posted. Your continued use of the SBBA Web Platform and/or Services following the posting of any amendment to this Privacy Policy shall constitute your acceptance of such amendment. You agree that it is your responsibility to periodically review this Privacy Policy and check for updates. You will know whether it has been updated since your last review by referring to the “Last updated” date above.
          </p>

          <ol class="privacy-policy">
                <li>
                  Your Consent Regarding Personal Information You Provide :
                  <p class="mt-3 ml-1">
                    When you sign up on the SBBA Web Platform you are asked to provide certain personal information used or intended to be used to provide the Services to you, communicate with you about upcoming events and other matters, and for other purposes discussed herein. Depending in part upon what Services you select / use, your name, company name, address, telephone number, email address, and certain other information about you may be required by us to provide such Services or be disclosed by you during your use of the Services. In the future you may also be asked to create a unique username or “handle” and a password. All foregoing information becomes part of your account information.
                  </p>
                  <p class="mt-1 ml-1">
                    By providing personal information like the foregoing and by engaging with SBBA to provide the Services to you, you voluntarily consent to SBBA collecting, using, and disclosing such personal information as specified in this Privacy Policy. 
                  </p>
                  <p class="mt-1 ml-1">
                   Note that as you use the Services, we may on occasion ask you to specifically consent when we collect, use, or disclose your personal information in specific circumstances. But such a request should in no way be deemed or viewed as limiting the breadth or the foregoing authorization. 
                  </p>
                </li>

                <li>
                    Information We Collect
                  <p class="mt-3 ml-1">
                   Our SBBA Web Platform collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked to, directly or indirectly, with a particular consumer or device (“Personal Information”). Personal information may be provided to us through the following sources:
                  </p>
                  <ul>
                    <li>directly by you;</li>
                    <li>by your internet service provider;</li>
                    <li>ad networks;</li>
                    <li>analytics providers; and</li>
                    <li>operating systems and platforms</li>
                  </ul>
                </li>

                <li class="mt-3 ml-1">
                    Legal Bases for Information Collection and Processing:
                  <p class="mt-1">
                   SBBA will only collect and process personal data about you where we have lawful bases. Lawful bases include consent (where you have given consent, as in some of the examples discussed above), contract (e.g., processing of personal information is necessary for us to perform and to deliver the Services you have requested), and “legitimate interests” (generally where the collection and processing of your personal data is based on our legitimate interests, including commercial interests, or the legitimate interests of third parties or society, provided that such processing shall not outweigh your rights and freedoms).
                  </p>
                  <p class="mt-1">
                  As discussed in greater detail below, you have the right to withdraw or decline your consent at any time and ask us to delete personal information and where we rely on legitimate interests, you have the right to object.
                  </p>
                </li>


                <li class="mt-3 ml-1">
                    We do not sell your personal information
                  <p class="mt-1">
                   SBBA does not sell your Personal Information and does not plan or anticipate ever doing so. 
                  </p>
                  <p class="mt-1">
                  Notwithstanding the foregoing, in the event of a transaction involving the entire SBBA business (e.g., if substantially all assets of the business were sold), your Personal Information would likely transfer with the business subject to applicable laws and regulations, including applicable privacy-related laws. To be clear, however, we do not and do not anticipate ever selling your Personal Information outside of a sale, restructuring, or change of control type scenario.
                  </p>
                </li>

                 <li class="mt-3 ml-1">
                    Personal Information SBBA Collects or Anticipates Collecting:
                  <p class="mt-1">
                   SBBA discloses that the SBBA Web Platform have collected within the last 12 months, and / or it is anticipated that they will collect within the next 12 months, the following categories of personal information from its users: 
                  </p>
                  <table class="table table-bordered" style="border:1px solid black;text-align:center;">
                    <tr>
                      <th>Personal Information Category and Examples</th>
                      <th>Do we collect this information</th>
                      <th>How Does SBBA Collect the Information</th>
                    </tr>
                    <tr>
                       <td>
                         <span style="font-weight:bold"> Identifiers</span><br><br>
                         Examples: real name, address, email address, and / or other similar identifiers.
                       </td>
                       <td>Yes</td>
                       <td>You provide this information to us directly (such as when you register as a member or otherwise use the Services. We do not intentionally collect or use other information, such as IP addresses, we couple potentially obtain as a result of you using / interacting with the Services / SBBA Web Platform.</td>
                    </tr>
                    <tr>
                       <td>
                        <span style="font-weight:bold;">Protected classifications under California or federal law</span><br><br>
                        Examples: age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information.
                       </td>
                       <td>No</td>
                       <td>N/A</td>
                    </tr>
                    <tr>
                       <td>
                        <span style="font-weight:bold;">Commercial information</span><br><br>
                        Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.
                       </td>
                       <td>Yes</td>
                       <td>We would only obtain such information it you provide this information to us directly (such as when you register as a member or otherwise use the Services.</td>
                    </tr>
                     <tr>
                       <td>
                        <span style="font-weight:bold;">Biometric information</span><br><br>
                        Genetic, physiological, behavioral, biological, and other biometric information.
                       </td>
                       <td>No</td>
                       <td>N/A</td>
                    </tr>
                     <tr>
                       <td>
                        <span style="font-weight:bold;">Internet activity and other network activity</span><br><br>
                        Examples include your browsing history, search history, and interactions with our services.
                       </td>
                       <td>Yes</td>
                       <td>We only collect information on your use of our Services. We obtain that from your use of the SBBA Web Platform.</td>
                    </tr>
                    <tr>
                       <td>
                        <span style="font-weight:bold;">Geolocation data</span><br><br>
                        Example: physical location.
                       </td>
                       <td>No</td>
                       <td>N/A</td>
                    </tr>
                    <tr>
                       <td>
                        <span style="font-weight:bold;">Sensory data</span>
                       </td>
                       <td>No</td>
                       <td>N/A</td>
                    </tr>
                    <tr>
                       <td>
                        <span style="font-weight:bold;">Professional or employment-related information</span><br><br>
                        Examples: Job or work status / history.
                       </td>
                       <td>Yes</td>
                       <td>We only collect this information to the extent you provide it to us directly in connection with using the Services.</td>
                    </tr>
                     <tr>
                       <td>
                        <span style="font-weight:bold;">Non-public education information</span><br><br>
                        Examples: ducation records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.
                       </td>
                       <td>No</td>
                       <td>N/A</td>
                    </tr>
                     <tr>
                       <td>
                        <span style="font-weight:bold;">Inferences drawn from other personal information</span><br><br>
                        For example profile reflecting a person’s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.
                       </td>
                       <td>No</td>
                       <td>N/A</td>
                    </tr>
                  </table>
                    <p class="mt-3">
                      Note that where we mark “No” in the table above, that means that SBBA makes no effort to obtain personal information in the corresponding category. It is possible, however, that a user might directly provide such information to us, but as noted, we are not seeking, requiring, nor wanting such information.
                    </p>
                    <p class="mt-3">Note also that the term “Personal Information” does not include:</p>
                    
                      • Publicly available information such as from government records.<br>
                      • Consumer information that has been deidentified or aggregated.
                      
                  <li class="mt-3 ml-1">
                    Use of Personal Information
                    <p class="mt-2">
                      With respect to Personal Information, we endeavor to ensure that only those employees who need access to your Personal Information to fulfill their employment duties will have access to it. We may use or disclose your personal information for the following purposes:
                    </p>
                    <ul>
                       <li>To fulfill the request for which you provided the information (e.g., to provide a Service you have requested, such as contacting you to let you know about events);</li>
                       <li>To provide the SBBA Web Platform and Services to you and to other users of the SBBA Web Platform and Services;</li>
                       <li>To improve the quality of the SBBA Web Platform and Services through feedback gathering activities conducted by SBBA and/or third parties;</li>
                       <li>To create, manage and control your account information, and to verify access rights to the SBBA Web Platform and Services;</li>
                       <li>To communicate with you (subject to your opt-out rights set forth herein), regarding the Services and other matters;</li>
                       <li>To assess service levels, monitor traffic patterns, and gauge popularity of different features and Service offered on the SBBA Web Platform;</li>
                       <li>To enforce this Privacy Policy or our <a href="{{route('terms-condition')}}" style="color:blue">Terms of Service</a>;</li>
                       <li>To protect against fraud or error, and to respond to claims of any violation of our rights or those of any third parties;</li>
                       <li>To respond to your requests for customer service;</li>
                       <li>To protect the rights, property or personal safety of you, us, our users and the public;</li>
                       <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of SBBA’s assets, in which personal information held by SBBA would be among the assets transferred;</li>
                       <li>As described to you when collecting your personal information; and</li>
                       <li>As required to comply with applicable laws or as authorized by applicable laws.</li>
                    </ul>
                    <p class="mt-3">
                      SBBA will not collect additional categories of personal information or use the personal information we collect for purposes that are materially different, unrelated, or incompatible with those described herein without providing you notice. Such notice may be provided by, without limitation, amending this Privacy Policy. Again, you agree and understand that it is your responsibility to periodically check this Privacy Policy for updates.
                    </p>
                    <li class="mt-3 ml-1">
                        Aggregated Data
                        <p class="mt-2">
                          For purposes of this Privacy Policy, “Aggregated Data” denotes records which have been stripped of information potentially identifying users, and which have been manipulated or combined to provide generalized, anonymous information. 
                        </p>
                        <p class="mt-2">
                         SBBA may also use your personal information to generate Aggregated Data for internal use and for sharing with others where we deem it necessary or appropriate. Your identity and personal information will be kept anonymous in any such Aggregated Data.
                        </p>
                    </li>

                    <li class="mt-3 ml-1">
                         Sharing your Personal Information
                        <p class="mt-2">
                         SBBA may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract. We also take reasonable measures to ensure that these third parties provide sufficient guarantees to implement appropriate technical and organizational measures to ensure such confidentiality. 
                        </p>
                        <p class="mt-2">
                         We may share your personal information with the following categories of third parties:
                        </p>
                        <ul>
                          <li>Service providers such as event organizers.</li>
                          <li>Related, subsidiary, and affiliate companies.</li>
                        </ul>
                    </li>

                    <li class="mt-3 ml-1">
                          General Data Protection Act
                        <p class="mt-2">
                         Your personal information may be stored and processed in any country where we have facilities or in which we engage third party service providers. By using the SBBA Web Platform and / or Services, you consent to the transfer of information to countries outside your country of residence, which may have different data protection rules than in your country. While such information is outside of the United States, it is subject to the laws of the country in which it is held, and may be subject to disclosure to the governments, courts or law, or enforcement or regulatory agencies of such other country, pursuant to the laws of such country. However, our practices regarding your personal information will continue to be governed at all times by this Privacy Policy and, if applicable, we will comply with the General Data Protection Regulation (“GDPR”) requirements providing adequate protection for the transfer of personal information.
                        </p>
                        <p class="mt-2">
                         We may occasionally communicate with you regarding our products, services, news and events. You have the option to not receive this information. We provide an opt-out function within all email communications of this nature or will cease to communicate with you for this purpose if you contact us and tell us not to communicate this information to you. The only kind of these communications that you may not “opt-out” of are those required to communicate announcements related to the Services, including information specific to your account, planned Services suspensions and outages. We will attempt to minimize this type of communication to you.
                        </p>
                        
                    </li>

                    <li class="mt-3 ml-1">
                           Age of Consent
                        <p class="mt-2">
                        SBBA will never knowingly provide the Services to, and will never knowingly collect, personal information from anyone under the age of consent. In our <a href="{{route('terms-condition')}}" style="color:blue">Terms of Service</a>, we specifically prohibit anyone under the age of 13 years old from using the SBBA Web Platform and Services. If you live in a country in the EU/EEA, you must be at least 16 years old to use our Services or such greater age required in your country to register for or use our Services. 
                        </p>
                        <p class="mt-2">
                        In addition to being of the minimum required age to use our Services under applicable law and our <a href="{{route('terms-condition')}}" style="color:blue">Terms of Service</a>, if you are not old enough to have authority to agree to our Privacy Policy in your country, your parent or guardian must agree to our Privacy Policy on your behalf. If you are concerned about your child’s personal information, please contact us at <a href="mailto:sbbacommunity@gmail.com" style="color:blue;">sbbacommunity@gmail.com</a>
                        </p>
                        <p class="mt-2">
                        Neither the SBBA Web Platform nor the Services are intended for children under 13 years of age, and no one under age 13 may provide any personal information to, on or through the SBBA Web Platform or Services. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information to, on or through the SBBA Web Platform or Services, make any purchases through the SBBA Web Platform or Services, or use any of the SBBA Web Platform of Services for any purpose. If we become aware that we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at the email address set forth in the paragraph above.
                        </p>
                        
                    </li>

                      <li class="mt-3 ml-1">
                           Rights to Your Information
                       
                        <p class="mt-2">
                        If you have signed up to become a member on the SBBA Web Platform and submitted Personal Information when doing so or thereafter, you have the right and ability to access and edit such Personal Information at any time through the web interface (member portal). On written request and subject to proof of identity, you may access the personal information that we hold, used, or communicated and ask that any necessary corrections be made, where applicable, as authorized or required by law. To make sure that the Personal Information we maintain about you is accurate and up to date, please keep your information updated on the member portal and / or inform us immediately of any change in your Personal Information by mail (see below) or e-mail  <a href="mailto:sbbacommunity@gmail.com" style="color:blue;">sbbacommunity@gmail.com</a>
                        </p>

                        <p class="mt-2">
                        Under the GDPR, you may be entitled to additional rights, including: (i) the right to withdraw consent to processing where consent is the basis of processing; (ii) the right to access your personal information and certain other supplementary information, under certain conditions; (iii) the right to object to unlawful data processing, under certain conditions; (iv) the right to erasure of personal information about you, under certain conditions; (v) the right to demand that we restrict processing of your personal information, under certain conditions, if you believe we have exceeded the legitimate basis for processing, processing is no longer necessary, or believe your personal information is inaccurate; (vi) the right to data portability of personal information concerning you that you provided us in a structured, commonly used, and machine-readable format, under certain conditions; (vii) the right object to decisions being taken by automated means which produce legal effects concerning you or similarly significantly affect you, under certain conditions; (viii) the right to lodge a complaint with data protection authorities. If you want to learn more about your rights under the GDPR, you can visit the European Commission’s website on data protection.</a>
                        </p> 
                    </li>

                    <li class="mt-3 ml-1 ml-1">
                        Cookies and Log Files
                        <p class="mt-2 ml-1">
                          We do not currently use cookies and log files to track user information. Cookies are small amounts of data that are transferred to your web browser by a web server and are stored on your computer’s hard drive.
                        </p>
                    </li>

                     <li class="mt-3 ml-1 ml-1">
                         Third Party Information Collection
                        <p class="mt-2 ml-1">
                          We do not control third parties’ collection or use of your information, including third parties who engage in interest-based advertising on the SBBA Web Platform or elsewhere. These third parties may provide you with ways to choose not to have your information collected or used in this way. 
                        </p>
                    </li>

                    <li class="mt-3 ml-1 ml-1">
                           Security and Retention
                        <p class="mt-2 ml-1">
                          We will strive to prevent unauthorized access to your personal information, however, no data transmission over the internet, by wireless device, or over the air is guaranteed to be 100% secure. SBBA has implemented and maintains reasonable security procedures and practices (based on the nature of the information we collect) to protect that information from unauthorized disclosure.
                        </p>
                    </li>

                    <li class="mt-3 ml-1 ml-1">
                           Your Ability to Protect Your Personal Information
                        <p class="mt-2 ml-1">
                          Please remember that you control what Personal Information you provide in order to use or while using the SBBA Web Platform and Services. Your decision to disclose such information, as required to access particular services or as you deem beneficial or desirable in connection with using particular services, is a personal choice and voluntary. Providing Personal Information to us – just as disclosing it to any third party – inherently involves some risk, and by accessing the SBBA Web Platform and / or using the Services, you acknowledge and agree that you recognize and understand this and are voluntarily providing the Personal Information in order to facilitate and / or enhance your user experience on the SBBA Web Platform.
                        </p>
                        <p class="mt-2 ml-1">
                         In some cases, you may choose to make certain Personal Information (or non-Personal Information) that you upload to the SBBA Web Platform available for viewing by other users and / or members of the SBBA Web Platform. For example, and without limitation, you may choose to disclose information, potentially including Personal Information, in a chat or other open / public forum. By using the SBBA Web Platform, you agree and acknowledge that it is your sole responsibility to carefully consider what information you disclose publicly while using the SBBA Web Platform, and we ask you not to disclose any sensitive Personal Information. You release us from any and all liability in connection with your decision to disclose Personal Information or other information to other members or users of the SBBA Web Platform (or any other party) while using the SBBA Web Platform or Services.
                        </p>
                        <p class="mt-2 ml-1">
                        Finally, to the extent the SBBA Web Platform allows you (or allows you in the future) to create log-in credentials, you are responsible for maintaining the secrecy of your user credentials, including your user identification, password, and/or other Personal Information that you use in connection with the SBBA Web Platform and/or Services. Always be careful and responsible regarding your account information and Personal Information. You are not authorized to share your account information with others (see our <a href="{{route('terms-condition')}}" style="color:blue">Terms of Service</a> for more details). 
                        </p>  
                        <p class="mt-2 ml-1">
                        We are not responsible for, and cannot control, the use by others of any information which you provide to them or allow them to access (intentionally or unintentionally) and you should use caution in selecting the personal information you provide to others through the SBBA Web Platform or Services. Similarly, we cannot assume any responsibility for the content of any personal information or other information which you receive from other users through the SBBA Web Platform or Services, and you release us from any and all liability in connection with the contents of any personal information or other information which you may receive using the SBBA Web Platform or Services. We cannot guarantee, or assume any responsibility for verifying, the accuracy of the Personal Information or other information provided by any third party. You release us from any and all liability in connection with the use of such personal information or other information of others.
                        </p>
                         <p class="mt-2 ml-1">
                        We will maintain your Personal Information for as long as it is needed by us, or as required by applicable laws, regulations, or government orders.
                        </p>
                    </li>

                    <li class="mt-3 ml-1 ml-1">
                          Questions
                        <p class="mt-2 ml-1">
                          If you have any questions or comments about this Privacy Policy or your personal information, to make an access or correction request, to exercise any applicable rights, to make a complaint, or to obtain information about our policies and practices, our Privacy Officer (or Data Protection Officer) can be reached by mail or email using the following contact information: by email at <a href="mailto:sbbacommunity@gmail.com" style="color:blue;">sbbacommunity@gmail.com</a>, or by mail at SBBA, LLC, 111 W. Washington St., #1221, Chicago, IL 60602.
                        </p>
                       
                    </li>

                  </li>  
                </li>
           </ol>     
          </div>
      </div>
    </div>
  </section>
@endblock

@block("scripts")
<script src="{{ url('assets/js/app.js') }}" type="text/javascript"></script>
@endblock