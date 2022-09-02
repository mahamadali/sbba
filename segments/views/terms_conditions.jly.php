  @extends('app')

@block("title") {{ 'Terms - '.setting('app.title', 'Ali Rocks!') }} @endblock

@block("styles")
<link rel="stylesheet" href="{{ url('assets/css/welcome.css') }}" />
<style type="text/css">
  #terms-of-use {
    /*background-color: #ec1f27;*/
    background-image: linear-gradient(110deg,#72aed9,#fefbb8);
  }
  .terms-of-use-info {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
  }
  .section-title {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
</style>
@endblock

@block("content")

  <section id="terms-of-use" class="terms-of-use section-bg pt-3 pb-3">
    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="section-title">
        <h2>TERMS OF SERVICE</h2>
      </div>
      <div class="row justify-content-center terms-of-use-info">
        <div class="terms-of-use-container">
            <span class="author-info">- Updated February 7, 2022</span>
            <p class="mt-3">
              Thank you for your interest in Solo & Boutique Bar Association LLC (“SBBA”). Before enjoying our website, however, please read and make sure you understand and abide by all of the following terms of service (the “Terms of Service”). Doing so is a condition of accessing the SBBA Web Platform (as defined below) and will improve the experience for all of us.<br><br>
              These Terms of Service set forth important information regarding your rights and obligations, as well as conditions, limitations, and exclusions that apply to you. <strong>If you do not agree to all of these Terms of Service, as well as the SBBA <a href="#">Privacy Policy</a> (the “Privacy Policy”) that is incorporated herein by reference, you may not use the SBBA Web Platform.</strong>
              <br><br>
              If you are entering into these Terms of Service on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to the Terms of Service. If you do not have such authority, you must not accept the Terms of Service or use the SBBA Web Platform on behalf of such entity. The SBBA Web Platform is only available to users who are over 13 years old and fully able and competent to enter into, abide by, and comply with the Terms of Service. For the sake of clarity, the SBBA Web Platform are not directed to children under 13 years old.
              <br><br>
              AGAIN, IF YOU CHOOSE TO ACCESS OR USE THE SBBA WEB PLATFORM, BY DOING SO YOU ARE AGREEING TO ACCEPT AND BE BOUND BY: (A) THESE TERMS OF SERVICE AND (B) THE PRIVACY POLICY AND COMMUNITY GUIDELINES. YOU FURTHER AGREE AND SUBMIT THAT (A) YOU WILL ACCESS AND USE THE SBBA WEB PLATFORM ONLY IN ACCORDANCE WITH THESE TERMS OF SERVICE AND ALL APPLICABLE LAWS, RULES, AND REGULATIONS AND (B) YOU ARE OVER 13 YEARS OLD AND COMPETENT TO ENTER INTO A BINDING CONTRACT IN YOUR JURISDICTION.
              <br><br>
              The Terms of Service are entered into by and between you and SBBA (“SBBA” or “we” or “us” or “our” or other similar pronouns) and, together with any documents incorporated herein by reference, govern your access to and use of the SBBA website at sobolawfirms.com including all pages thereunder and all associated websites (collectively, “SBBA Websites”), whether accessed through the SBBA website (desktop or mobile) and/or SBBA applications for mobile and tablet devices (collectively, the “SBBA Web Platform”). References to “herein” refer to these Terms of Service.
              <br><br>
              There may be additional terms and conditions not contained herein that relate to your use of specific portions or functions of the SBBA Websites. Any such additional terms will be posted or otherwise available to you in the applicable section of the SBBA Web Platform.
              <br><br>
              SBBA may change these Terms of Service from time to time, at any time without notice to you. You are responsible for periodically checking for changes. You can refer to the date at the top of these Terms of Service to determine whether they have been modified since you last reviewed them. Your continued use of or access to the Service following the posting of any changes to the Terms of Service constitutes acceptance of those changes. When SBBA offers new services and/or features through the SBBA Web Platform such new features and/or services shall be subject to these Terms of Service.
              <br><br>
              IF YOU DO NOT AGREE TO THE CURRENT VERSION OF THE TERMS OF SERVICE, YOU MAY NOT ACCESS THE SBBA WEB PLATFORM, AND YOUR SOLE AND EXCLUSIVE REMEDY IS TO NOT ACCESS OR USE SAME.
              <br><br>
              <ol class="terms-of-use">
                <li>
                  <u>Communications</u>. If you access or use the SBBA Web Platform, communicate with us electronically (including via email), or provide us with your e-mail address, you consent to receiving communications from SBBA, including by, without limitation, email or messages regarding upcoming social events. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any and all legal requirement that such communication be in writing.
                </li>
                <li>
                  <u>Ownership of SBBA Content</u>. SBBA exclusively owns all right, title and interest in and to the SBBA Web Platform and all elements thereof, including, without limitation: all the content (including, without limitation, audio, images, photographs, illustrations, text, graphics, logos, icons, visuals, video, copy, trademarks, etc.), software, code, data and materials used therein or located thereon; the appearance and design of the SBBA Web Platform; the compilation of the information and data on the SBBA Web Platform; and all copyrights, trademark rights, patent rights, database rights, trade secrets, moral rights (including rights of authorship, attribution and subsequent modification) and other intellectual property and proprietary rights (whether registered or unregistered in any jurisdiction) in any of the foregoing (all of the foregoing rights and information, the “SBBA Web Content & Rights”). Your use of the SBBA Web Platform does not grant to you any right, title or interest in any element thereof.
                </li>
                <li>
                  <u>Limited License</u>. Subject to the restrictions and limitations set forth in these Terms of Service, we grant you a limited license to access and use the SBBA Web Platform for internal purposes of: (a) accessing and viewing the content on the SBBA Web Platform on your computer or other Internet compatible device, including mobile devices and tablets; (b) making single copies or prints of the content on the SBBA Web Platform; and (c) using features intentionally made available to members. The SBBA Web Platform and the services offered on or through the SBBA Web Platform, including any content, software, code, data and materials thereon, are only for your own personal, non-commercial use. 
                </li>
                <li>
                  <u>Prohibited Use</u>. Any commercial distribution, publishing, use, or exploitation of the SBBA Web Platform and / or the SBBA Web Content & Rights is strictly prohibited absent the express prior written permission of SBBA (and / or other rights holders in the case of third party content included on the SBBA Web Platform).
                  <br><br>
                  Other than as expressly permitted hereunder, you are prohibited from: (i) downloading, publishing, performing, displaying, distributing, copying, imitating, reproducing, posting, transmitting, modifying, adapting, editing, creating derivative works from, transferring, selling, licensing, renting or otherwise exploiting or making commercial use of the SBBA Web Platform and / or the SBBA Web Content & Rights or (ii) translating, reverse engineering, decrypting, disassembling, or altering the SBBA Web Platform or any element thereof (including any aspect of the SBBA Web Content & Rights) not intended to be so read (this includes using or directly viewing the underlying code).
                  <br><br>
                  Your access to and use of the SBBA Web Platform is expressly conditioned on your agreement that you will not use the SBBA Web Platform or the SBBA Web Content & Rights for any purpose that is unlawful, commercial in nature, or prohibited by these Terms of Service. You agree to abide by all applicable local, state, national and international laws, regulations and rules and not to only access or use the SBBA Web Platform when doing so is authorized under such laws.
                  <br><br>
                  Without in any way limiting the generality of the foregoing, you agree that while using the SBBA Web Platform and associated features you shall not engage in any of the following conduct:
                  <ul class="no-style" type="none">
                   <li>
                      (a) misrepresent your affiliation with or impersonate any person or entity;
                    </li>
                    <li>
                      (b) improperly or without authorization reveal or use information of or about another individual or company;
                    </li>
                    <li>
                      (c) insert advertising or other promotional content into any of the part of the SBBA Web Platform; 
                    </li>
                    <li>
                      (d) ) in any way use content from the SBBA Web Platform for any commercial or promotional purpose; 
                    </li>
                    <li>
                      (e) engage in data mining, spidering, screen or database “scraping,” harvesting of information of any type, or any other means of obtaining information from the SBBA Web Platform;
                    </li>
                    <li>
                      (f) attempt to obtain access to computer systems, materials or information, including any of the SBBA Web Content & Rights, that SBBA has not purposefully and obviously made publicly available on the SBBA Web Platform;
                    </li>
                    <li>
                      (g) use the SBBA Web Platform or any of the SBBA Web Content & Rights in violation of applicable intellectual property or other proprietary or legal rights, including rights held by SBBA;
                      </li>
                    <li>
                      (h) unless expressly permitted herein, link to the SBBA Web Platform without the express written permission of SBBA;
                    </li>
                    <li>
                      (i) use the SBBA Web Platform or any of the SBBA Web Content & Rights in connection with or furtherance of any illegal act including, without limitation, collusion, money laundering, rigging of bids, or fixing of prices;
                    </li>
                    <li>
                      (j) do any act or use the SBBA Web Platform in any manner that could harm, disable, slow, overburden, or impair the SBBA Web Platform or the infrastructure that supports the SBBA Web Platform (including any infrastructure owned by third party service provides such as hosting providers)
                    </li>
                    <li>
                      (k) interfere with any other party’s use and enjoyment of the SBBA Web Platform;
                    </li>
                    <li>
                      (l) use or deploy any software viruses, computer codes, files, or programs that are designed or intended to disrupt, damage, limit or interfere with the proper function of any software, hardware, or network system or to damage or obtain unauthorized access to any system, data or other information of SBBA or any third party; or
                    </li>
                    <li>
                      (m) attempt or conspire or encourage any attempt to engage in any of the prohibited activities set forth above or otherwise interfere with the SBBA Web Platform.
                    </li>
                  </ul>
                </li>
                <li>
                  <u>Trademarks</u>. The trademarks, logos, service marks and trade names (collectively “Trademarks”) displayed on or in connection with the SBBA Web Platform (or on content available on the SBBA Web Platform) and all rights therein belong to SBBA and / or its affiliates and licensees and partners and may not be used in any manner other than as expressly authorized in writing by SBBA (or the applicable Trademark owner in the case of third party trademarks that may be displayed on the SBBA Web Platform).
                </li>
                <li>
                  <u>Account Registration & Associated Information</u>. When you register to access or become a member of the SBBA Web Platform, and / or at other times while using the SBBA Web Platform, you may be asked to provide certain personal information to us (“User Data”). The Privacy Policy (link above) sets forth our policies relating to the collection, use, and privacy of such User Data and the Privacy Policy is incorporated herein by reference. We encourage you to review the Privacy Policy in detail, and you must accept and agree to its terms (including through your agreement to these Terms of Service) as a condition of accessing the SBBA Web Platform. You acknowledge and agree that you are solely responsible for the accuracy and content of User Data, and that it is your responsibility to keep it up to date and accurate.
                  <br><br>
                  SBBA will never knowingly collect personally identifiable information from any person that is actually known to SBBA to be under 13 years old. AS NOTED ABOVE, IF YOU ARE LESS THAN 13 YEARS OLD, YOU ARE PROHIBITED FROM USING OR ACCESSING THE SBBA WEB PLATFORM IN ANY MANNER.
                  <br><br>
                  If you choose to submit User Data on one or more of the SBBA Web Platforms, please be advised that SBBA may choose not to include you in its email distribution lists or invite you to events, or may otherwise delete or not use the information you submit, for any or no reason, in SBBA’s sole discretion, with or without cause.
                </li>
                <li>
                  <u>User Materials</u>. Unless specifically requested, we do not solicit nor do we wish to receive any confidential, secret, or proprietary information or other material from you through the SBBA Web Platform, by e-mail or in any other way. Any materials you submit or send to us, including, without limitation, any items uploaded to the SBBA Web Platform or associated databases or sent to us in any fashion (“User Materials”) will be deemed non-confidential and not secret, and may be used by us in any manner consistent with the then current and applicable SBBA Privacy Policy and these Terms of Service. By submitting or sending User Materials to us, you: (a) represent and warrant that the User Materials are original to you, that no other party has any rights thereto (i.e., that the material you submit does not infringe the rights of a third party), and that any “moral rights” in User Materials have been waived, (b) irrevocably assign to us all right, title and interest therein, and waive any rights therein that cannot be assigned to us (including moral rights), and (c) acknowledge that we have the unrestricted right to use User Materials for any purpose whatsoever, commercial or otherwise, without compensation to you or any other person. We are not responsible for maintaining any Submitted Material that you provide to us, and we may delete or destroy any such Submitted Material at any time.
                </li>
                <li>
                  <u>Linking to SBBA Web Platform</u>. If you include a link in any other web site to the SBBA Web Platform, you agree that such link shall: (i) only read “Solo & Boutique Bar Association” in plain text and not contain any logo; (ii) cause the SBBA Web Platform that is linked to open in a new browser window; and (iii) link to the full version of a formatted page of the SBBA Web Platform. You are prohibited from linking directly to any image contained on the SBBA Web Platform and may not cause any image on the SBBA Web Platform to be displayed on another web site. You agree not to download or use images hosted on the SBBA Web Platform on another website, for any purpose. You agree not to link from any other web site to the SBBA Web Platform in any manner such that the SBBA Web Platform, or any page of the SBBA Web Platform, is “framed,” surrounded, or obfuscated by any third party content, materials, or branding. We reserve all of our rights under the law to insist that any link to the SBBA Web Platform be discontinued, and to revoke your right to link to the SBBA Web Platform from any other web site at any time upon written notice to you. To find out more information about our linking policies, or to seek our permission, you may email us at: <a href="mailto:sobolawfirms@gmail.com">sobolawfirms@gmail.com</a>.
                </li>
                <li>
                  <u>Indemnification</u>. You agree to defend, indemnify on demand, and keep SBBA and our affiliates, parents, subsidiaries and each of our and their respective officers, employees, agents, partners, content providers, service providers, suppliers and licensors (collectively, the “Released Parties”) indemnified, and hold the Released Parties harmless from any and all claims, liabilities, costs, losses (including without limitation consequential and indirect losses) and expenses, including reasonable attorneys’ fees, arising in any way from: (a) your use of or reliance on the SBBA Web Platform or any services, content, functions, or information available through the SBBA Web Platform; (b) your placement or transmission of any message, content, information, software or other materials through the SBBA Web Platform; or (c) your fraudulent or deceptive acts or omissions, or breach or violation of the law (including infringement of any intellectual property or other right of any person or entity) or of these Terms of Service. We will provide notice to you promptly of any such claim, suit, or proceeding. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and in such case, you agree to assist and cooperate with our defense of such claim. You shall not settle any such claim without our prior written approval.
                </li>
                <li>
                  <u>Non SBBA Websites</u>. The SBBA Web Platform may link or connect to Outside Websites (as defined below), and Outside Websites may link to the SBBA Web Platform. The term “Outside Websites” as used in this paragraph shall be deemed to include all websites, mobile websites, mobile and web applications, and services owned, operated, or provided by any third party, including any such website, application, or service operated or provided by a third party under license from SBBA or its affiliates. The inclusion in the SBBA Web Platform of any link to a Outside Website does not constitute an endorsement or sponsorship by SBBA of such Outside Website, or the information, content, products, services, or any other aspects of or materials presented on or through such Outside Website. If you choose to review or rely on the contents of an Outside Website, you do so at your own risk and pursuant to any terms and conditions of that Outside Website. To the extent you choose to access Outside Websites, you acknowledge and agree that: (a) such Outside Websites are not controlled by SBBA and we have no responsibility for the information, content, products, services, advertising, code or other materials provided by or through any Outside Website; (b) there are risks in accessing these Outside Websites, and you assume all responsibilities and consequences resulting from such risks, and under no circumstances will SBBA be responsible for any consequences resulting from such risks or for the accuracy, legality, appropriateness or any other aspect of the content or function of such websites; and (c) additional or different terms and conditions may apply when you access and use such Outside Websites. By using the SBBA Web Platform, you release and hold the Released Parties harmless from any and all liability arising from your use of or reliance on any such Outside Website (including with respect to any goods and services obtained therefrom). In the event of a dispute between you and any third party owner or operator of an Outside Website, we are under no obligation to become involved and you should direct any concerns to the relevant third party owner or operator.
                </li>
                <li>
                  <u>Copyright Matters</u>. . We take care to respect the intellectual property rights of others and require and expect that all who use the SBBA Web Platform do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, please forward the following information to SBBA Copyright Agent, designated as such pursuant to the Digital Millennium Copyright Act, 17 U.S.C. § 512(c)(2), named below, and be sure to include the following information:
                  <ul type="none" class="no-style">
                    <li>
                      (a) Your address, telephone number, and email address;
                    </li>
                    <li>
                      (b) A description of the copyrighted work that you claim has been infringed;
                    </li>
                    <li>
                      (c) A description of where the alleged infringing material is located;
                    </li>
                    <li>
                      (d) A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
                    </li>
                    <li>
                      (e) An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; and
                    </li>
                    <li>
                      (f) A statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.
                    </li>
                    <li>
                        <p class="ml-2">
                          <strong>Copyright Agent</strong>:<br>
                          Declan Stoeckel<br>
                          Chief Operating Officer SBBA<br>
                          c/o Goldstein & McClintock LLLP<br>
                          111 W. Washington St., Suite 1221<br>
                          Chicago, IL 60602<br>
                          E-mail: <a href="mailto:declans@goldmclaw.com">declans@goldmclaw.com</a>
                        </p>
                    </li>
                  </ul>
                </li>
                <li>
                    <u>WARRANTY DISCLAIMER</u>. YOU EXPRESSLY UNDERSTAND AND AGREE THAT (I) IF YOU CHOOSE TO ACCESS AND USE THE SBBA WEB PLATFORM YOU DO SO AT YOUR OWN RISK AND (II) THE SBBA WEB PLATFORM AND ALL SERVICES, CONTENT, FUNCTIONS, INFORMATION, MATERIALS AND PRODUCTS AVAILABLE THROUGH THE SBBA WEB PLATFORM ARE PROVIDED ON AN “ AS IS ” AND “ AS AVAILABLE ” BASIS WITHOUT WARRANTY OF ANY KIND, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, INTEGRATION, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED.
                    <br><br>
                   WITHOUT IN ANY WAY LIMITING THE GENERALITY OF THE FOREGOING, THE RELEASED PARTIES (I) MAKE NO WARRANTIES OR REPRESENTATIONS REGARDING ANY PRODUCTS OR SERVICES ORDERED OR PROVIDED VIA THE SBBA WEB PLATFORM, AND (II) HEREBY DISCLAIM, AND YOU HEREBY WAIVE, ANY AND ALL WARRANTIES AND REPRESENTATIONS WITH RESPECT THERETO, INCLUDING WITHOUT LIMITATION ANY AND ALL WARRANTIES AND REPRESENTATIONS MADE IN PRODUCT OR SERVICES LITERATURE, FREQUENTLY ASKED QUESTIONS DOCUMENTS OR OTHERWISE ON THE SBBA WEB PLATFORM OR IN CORRESPONDENCE WITH SBBA OR ITS AGENTS. YOU ARE SOLELY RESPONSIBLE FOR, AND ASSUME ALL RISKS RELATED TO, THE HANDLING, STORAGE, AND USE OF ANY PRODUCTS MADE AVAILABLE TO YOU VIA THE SBBA WEB PLATFORM.
                    <br><br>
                   THE RELEASED PARTIES FURTHER DO NOT WARRANT OR GUARANTEE THAT: (A) THE SBBA WEB PLATFORM OR ANY SERVICES, CONTENT, FUNCTIONS, INFORMATION, MATERIALS OR PRODUCTS AVAILABLE THROUGH THE SBBA WEB PLATFORM WILL MEET YOUR REQUIREMENTS OR THAT THE QUALITY OF ANY GOODS, PRODUCTS OR SERVICES AVAILABLE ON THE SBBA WEB PLATFORM WILL MEET YOUR EXPECTATIONS; (B) ANY INFORMATION PROVIDED WILL BE TIMELY, ACCURATE, RELIABLE, PRECISE, THOROUGH, CORRECT OR COMPLETE; (C) THE SBBA WEB PLATFORM OR ANY SERVICES, CONTENT, FUNCTIONS, INFORMATION, MATERIALS AND PRODUCTS AVAILABLE THROUGH THE SBBA WEB PLATFORM WILL BE AVAILABLE AT ANY PARTICULAR TIME OR PLACE, UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (D) ANY DEFECTS OR ERRORS IN THE SBBA WEB PLATFORM WILL BE CORRECTED; (E) THE SBBA WEB PLATFORM WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (F) ANY PARTICULAR RESULT OR OUTCOME CAN BE ACHIEVED OR THAT THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SBBA WEB PLATFORM WILL BE ACCURATE OR RELIABLE.
                  </li>
                  <li>
                    <u>LIMITATION OF LIABILITY</u>. IN NO EVENT SHALL SBBA BE LIABLE, WHETHER IN AN ACTION BASED ON A CONTRACT INDEMNIFICATION, OBLIGATION, TORT (INCLUDING WITHOUT LIMITATION NEGLIGENCE), COLLATERALLY OR ARISING FROM ANY STATUTORY DUTY, PRE-CONTRACT OR OTHER REPRESENTATIONS, OR OTHERWISE, HOWEVER ARISING, FOR ANY ECONOMIC LOSSES (INCLUDING, WITHOUT LIMITATION, LOSS OF REVENUES, PROFITS, CONTRACTS, BUSINESS, GOODWILL OR ANTICIPATED SAVINGS) OR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES ARISING FROM, OR DIRECTLY OR INDIRECTLY RELATED TO (A) ANY BREACH OF THIS AGREEMENT, (B) THE USE OF, OR THE INABILITY TO USE, THE SBBA WEB PLATFORM OR THE CONTENT, MATERIALS, INFORMATION, FUNCTIONS OR PRODUCTS AVAILABLE THROUGH THE SBBA WEB PLATFORM, (C) YOUR PROVISION OF INFORMATION VIA THE SBBA WEB PLATFORM; (D) ANY INACCURACY OR OMISSION CONCERNING ANY OF THE INFORMATION PROVIDED ON THE SBBA WEB PLATFORM; (E) ANY CONTENT POSTED, TRANSMITTED, EXCHANGED OR RECEIVED BY OR ON BEHALF OF ANY USER OR OTHER PERSON ON OR THROUGH THE SBBA WEB PLATFORM, OR (F) LOST BUSINESS OR LOST SALES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    <br><br>
                   WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, ANY MATERIALS, DATA, TEXT, IMAGES, VIDEO, AUDIO OR SOFTWARE DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE SBBA WEB PLATFORM ARE ACCESSED, DOWNLOADED OR OBTAINED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM, MOBILE DEVICE OR OTHER PROPERTY THAT RESULTS THEREFROM OR FROM YOUR USE OF ANY SUCH MATERIALS.
                    <br><br>
                    IN NO EVENT SHALL THE TOTAL AGGREGATE LIABILITY OF THE RELEASED PARTIES FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT OR TORT, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE OR OTHERWISE) ARISING FROM THESE TERMS OF SERVICE OR YOUR USE OF THE SBBA WEB PLATFORM OR THE CONTENT, MATERIALS, INFORMATION, FUNCTIONS OR PRODUCTS AVAILABLE THROUGH THE SBBA WEB PLATFORM EXCEED, IN THE AGGREGATE, FIFTY DOLLARS (.00).
                  </li>
                  <li>
                    <u>Dispute Resolution</u>. EXCEPT AS OTHERWISE PROVIDED UNDER THESE TERMS OF SERVICE, ALL DISPUTES AND CLAIMS BETWEEN YOU AND SBBA THAT ARISE OUT OF OR IN CONNECTION WITH, OR RELATE TO, THESE TERMS OF SERVICE SHALL BE RESOLVED, AT THE FILING PARTY'S ELECTION, IN EITHER A SMALL CLAIMS COURT OR BY FINAL AND BINDING ARBITRATION ADMINISTERED BY THE AMERICAN ARBITRATION ASSOCIATION UNDER ITS COMMERCIAL ARBITRATION RULES AND SUPPLEMENTARY PROCEDURES FOR CONSUMER-RELATED DISPUTES, WHICH ARBITRATION SHALL TAKE PLACE IN CHICAGO, ILLINOIS. ALL DISPUTES IN ARBITRATION WILL BE HANDLED SOLELY BETWEEN THE NAMED PARTIES, AND NOT ON ANY REPRESENTATIVE OR CLASS BASIS. FURTHER, UNLESS BOTH YOU AND SBBA AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING. THE ARBITRATOR MAY AWARD DECLARATORY OR INJUNCTIVE RELIEF ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF WARRANTED BY THAT PARTY'S INDIVIDUAL CLAIM WITHOUT AFFECTING OTHER INDIVIDUALS.
                    <br><br>
                    YOU UNDERSTAND AND AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS, WHETHER IN ARBITRATION OR COURT, WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS OR REPRESENTATIVE ACTION OR AS A NAMED OR UNNAMED MEMBER IN A CLASS, CONSOLIDATED, REPRESENTATIVE OR PRIVATE ATTORNEY GENERAL ACTION, UNLESS BOTH YOU AND SBBA SPECIFICALLY AGREE TO DO SO IN WRITING FOLLOWING INITIATION OF THE ARBITRATION. THIS PROVISION DOES NOT PRECLUDE YOUR PARTICIPATION AS A MEMBER IN A CLASS ACTION FILED ON OR BEFORE AUGUST 20, 2011. THIS PROVISION IS NOT APPLICABLE TO THE EXTENT SUCH WAIVER IS PROHIBITED BY LAW.
                    <br><br>
                    <strong>YOU UNDERSTAND THAT YOU AND SBBA ARE AGREEING TO GIVE UP ANY RIGHTS TO LITIGATE CLAIMS BEFORE A JURY.</strong>
                  </li>
                  <li>
                    <u>Local Standards</u>. We do not represent or warrant that the SBBA Web Platform or any content, materials, information, functions or products available through the SBBA Web Platform are appropriate for use in all locations. If you choose to access the SBBA Web Platform you do so at your own initiative and are responsible for compliance with any applicable local laws.
                  </li>
                  <li>
                    <u>Termination</u>. If you wish to terminate the Terms of Service or your account, you may simply discontinue using the Service (including choosing to opt out of future email distributions). If you have been given access to a member account to log into, log into your member portal and terminate your account. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                    <br><br>
                    Notwithstanding anything to the contrary set forth in these Terms of Service, we may terminate your access to all or any part of the SBBA Web Platform at any time, and/or block or prevent future access to and use of the SBBA Web Platform, in each case with or without cause, with or without notice and without attendant liability, effective immediately. Upon any termination, all rights and obligations of the parties hereunder shall cease and you shall immediately cease using the SBBA Web Platform, except that the provisions of these Terms of Service that by their nature are intended to survive termination shall so survive. We maintain a policy that provides for the termination in appropriate circumstances of the SBBA Web Platform use privileges of users who are repeat infringers of intellectual property rights.
                  </li>
                  <li>
                    <u>Miscellaneous</u>. The Terms of Service incorporate the applicable Privacy Policy and any other terms applying to your use of the SBBA Website by reference. These Terms of Service and the relationship between you and us shall be governed by the laws of the State of Illinois, without regard to its conflict of law provisions. You agree that any cause of action that may arise under the Terms of Service shall be commenced and be heard in the appropriate court in the State of Illinois, County of Cook. Subject to the terms of Section 18 above (Dispute Resolution), you agree to submit to the personal and exclusive jurisdiction of the courts located within Cook County in the City of Chicago. Our failure to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision. Except as otherwise set forth herein, these Terms of Service may only be amended by a written agreement executed by you and an authorized representative of SBBA specifically referencing these Terms of Service. Any waiver of any provision of these Terms of Service by SBBA must be made in writing and signed by an authorized representative of SBBA and the provision to be waived. Headings used in these Terms of Service are for convenience only and are not to be relied upon. If any provision of the Terms of Service is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the Terms of Service remain in full force and effect. These Terms of Service will inure to the benefit of, and are intended to be enforceable by, SBBA successors, assigns and licensees. There are no third party beneficiaries to this Agreement.
                  </li>
                  <li>
                    <u>Further Inquiries</u>. You may direct questions about these Terms of Service, or other issues, by sending an email to <a href="mailto:declans@goldmclaw.com">declans@goldmclaw.com</a>.
                  </li>
              </ol>
            </p>
          </div>
      </div>
    </div>
  </section>
@endblock

@block("scripts")
<script src="{{ url('assets/js/app.js') }}" type="text/javascript"></script>
@endblock